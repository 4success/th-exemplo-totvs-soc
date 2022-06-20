import { IntegrationMessageReturn, Metadata } from '@4success/tunnelhub-sdk';
import { GenericParameter, TunnelHubSystem } from '@4success/tunnelhub-sdk/src/types/data';
import DataStore from '@4success/tunnelhub-sdk/src/classes/util/dataStore';
import * as  soap from 'soap';
import { Client } from 'soap';
import { createClientAsync } from '../soap/wsdataserver';
import TotvsApi from './totvsApi';
import {
  FuncionarioModelo2WsPortTypes,
  IFuncionarioModelo2WsPortSoap,
  IimportacaoFuncionarioInput,
} from '../wsdl/FuncionarioModelo2WsService/FuncionarioModelo2WsPort';
import metadata from '../assets/metadata';
import {
  EstadosBrasileirosSoc,
  FopFuncDataReadViewResponse,
  FuncionarioSoc,
  GlbColigadaDataReadViewResponse,
} from '../data';
import { NoDeltaIntegrationFlow } from '@4success/tunnelhub-sdk/src/classes/flows/noDeltaIntegrationFlow';
import { Promise } from 'bluebird';
import SocConversion from './socConversion';
import { DateTime } from 'luxon';
import AutomationParameter from '@4success/tunnelhub-sdk/src/classes/util/automationParameter';

const StringMask = require('string-mask');

export default class Integration extends NoDeltaIntegrationFlow {
  private readonly totvsApi: TotvsApi;
  private soapClient: IFuncionarioModelo2WsPortSoap;
  private systems: TunnelHubSystem[];
  private readonly parameters: { custom: GenericParameter[] };
  private dataStore: DataStore;
  private socParameters: {
    username: string;
    mainCompany: string;
    password: string;
    responsible: string;
    testing: boolean;
  };

  constructor(event: any, context: any) {
    super(event, context);

    this.systems = event.systems ?? [];
    this.parameters = event.parameters ?? {};
    this.dataStore = new DataStore(event);

    const automationParameters: { custom: GenericParameter[] } = event.parameters ?? {};
    this.preCarregarParametros(automationParameters);

    const defaultApiSystem = this.systems.find(value => value.internalName === 'TOTVS_API');
    if (!defaultApiSystem || defaultApiSystem.type !== 'SOAP' || defaultApiSystem.parameters.authType !== 'BASIC') {
      throw new Error(`O sistema TOTVS_API precisa ser do tipo HTTP com autorização Basic`);
    }

    this.totvsApi = new TotvsApi(
      defaultApiSystem.parameters.wsdlUrl,
      defaultApiSystem.parameters.user,
      defaultApiSystem.parameters.password,
    );
  }

  async loadSourceSystemData(payload?: any): Promise<FuncionarioSoc[]> {
    const dataUltimaModificacao = this.lerParametro(this.parameters, 'dataUltimaModificacao')?.value ?? DateTime.now().toISO({
      suppressMilliseconds: true,
      includeOffset: false,
    });

    const unidades = await this.totvsApi.buscaUnidades();

    const output = [] as FuncionarioSoc[];
    for (let i = 0; i < unidades.length; i++) {
      const unidade = unidades[i];

      const [setores, cargos, funcionariosAtivos] = await Promise.all([
        this.totvsApi.buscaSetores(unidade.CODCOLIGADA),
        this.totvsApi.buscaCargos(unidade.CODCOLIGADA),
        this.totvsApi.buscaFuncionariosAtivos(unidade.CODCOLIGADA, dataUltimaModificacao),
      ]);

      const detalhesFuncionarios = await Promise.map(funcionariosAtivos, (funcionario: FopFuncDataReadViewResponse.PFunc) => {
        const chapa = funcionario.CHAPA.toString().padStart(6, '0');
        return this.totvsApi.buscaDetalheFuncionario(funcionario.CODCOLIGADA, chapa);
      }, { concurrency: 10 });


      detalhesFuncionarios.forEach(funcionario => {
        const employee = {} as FuncionarioSoc;

        const setor = setores.find((value) => value.CODIGO === funcionario.FopFunc.PFunc.CODSECAO);
        const cargo = cargos.find((value) => value.CODIGO === funcionario.FopFunc.PFunc.CODFUNCAO);

        employee.codigoSocEmpresa = this.convertCodigoempresaSoc(unidade);
        employee.codigoRhUnidade = unidade?.CODCOLIGADA?.toString();
        employee.nomeUnidade = unidade?.NOMEFANTASIA?.toString();
        employee.codigoRhSetor = setor?.CODIGO?.toString();
        employee.nomeSetor = setor?.DESCRICAO?.toString();
        employee.codigoRhCargo = cargo?.CODIGO?.toString();
        employee.nomeCargo = cargo?.NOME?.toString();
        employee.matricula = funcionario.FopFunc.PFunc.MATRICULAESOCIAL;
        employee.nomeFuncionario = funcionario.FopFunc.PFunc.NOME;
        employee.dtNascimento = DateTime.fromFormat(funcionario.FopFunc.PFunc.DTNASCIMENTO, 'yyyy-LL-ddT00:00:00').toFormat('yyyy-LL-dd');
        employee.sexo = funcionario.FopFunc.PFunc.SEXO === 'M' ? 'MASCULINO' : 'FEMININO';
        employee.situacao = SocConversion.convertSituacao(funcionario.FopFunc.PFunc.CODSITUACAO);
        employee.dtAdmissao = funcionario.FopFunc.PFunc.DATAADMISSAO ? DateTime.fromFormat(funcionario.FopFunc.PFunc.DATAADMISSAO, 'yyyy-LL-ddT00:00:00').toFormat('yyyy-LL-dd') : undefined;
        employee.estadoCivil = SocConversion.convertEstadoCivil(funcionario.FopFunc.PFunc.ESTADOCIVIL);
        employee.tipoContratacao = SocConversion.convertTipoContratacao(funcionario.FopFunc.PFunc.CODTIPO);
        employee.cpf = funcionario.FopFunc?.PFunc?.CPF?.toString();
        employee.cnpjUnidade = unidade.CGC;
        employee.razaoSocialUnidade = unidade.NOME;
        employee.categoriaEsocial = funcionario?.FopFunc?.PFunc?.CODCATEGORIAESOCIAL?.toString();
        employee.pis = SocConversion.somenteNumeros(funcionario?.FopFunc?.PFunc?.PISPASEP?.toString());
        employee.rg = funcionario.FopFunc.PFunc?.CARTIDENTIDADE?.toString();
        employee.rgOrgaoEmissor = funcionario.FopFunc.PFunc.ORGEMISSORIDENT;
        employee.ufRG = funcionario.FopFunc.PFunc.UFCARTIDENT as EstadosBrasileirosSoc;
        employee.nrCtps = funcionario.FopFunc.PFunc?.CARTEIRATRAB?.toString();
        employee.enderecoFuncionario = funcionario.FopFunc.PFunc.RUA;
        employee.bairroFuncionario = funcionario.FopFunc.PFunc.BAIRRO;
        employee.cepFuncionario = funcionario?.FopFunc?.PFunc?.CEP?.toString();
        employee.cidadeFuncionario = funcionario.FopFunc.PFunc.CIDADE;
        employee.estadoFuncionario = funcionario.FopFunc.PFunc.ESTADO as EstadosBrasileirosSoc;
        employee.telefoneCelular = SocConversion.somenteNumeros(funcionario.FopFunc.PFunc?.TELEFONE1?.toString());
        employee.cor = SocConversion.convertCor(funcionario.FopFunc.PFunc.CORRACA);
        employee.cbo = cargo.CBO.toString();
        employee.enderecoUnidade = unidade.RUA;
        employee.bairroUnidade = unidade.BAIRRO;
        employee.cidadeUnidade = unidade.CIDADE;
        employee.estadoUnidade = unidade.ESTADO as EstadosBrasileirosSoc;
        employee.cepUnidade = unidade?.CEP?.toString();
        employee.nomedaMae = funcionario.FopFunc.PFunc.NOMEMAE;
        employee.serieCtps = funcionario.FopFunc.PFunc?.SERIECARTTRAB?.toString();

        output.push(employee);
      });
    }

    return output;
  }

  async sendData(item: FuncionarioSoc): Promise<IntegrationMessageReturn> {
    const system = this.systems.find(value => value.internalName === 'SOC_FUNCIONARIOS');
    if (system.type !== 'SOAP') {
      throw new Error(`O sistema SOC_FUNCIONARIOS precisa ser do tipo SOAP`);
    }

    const wsSocEmployee = this.mapearValoresParaEstruturaWebservice(item);

    const employeeHireDate = DateTime.fromISO(item.dtAdmissao);
    const diffInDays = DateTime.now().diff(employeeHireDate, 'days');
    if (diffInDays.days >= -30 && diffInDays.days <= 30) {
      wsSocEmployee.Funcionario.funcionarioWsVo.chaveProcuraFuncionario = 'CPF_DATA_ADMISSAO_PERIODO';
    }

    const soapClient = await this.getSoapClient(system);
    soapClient.setSecurity(new soap.WSSecurity(this.socParameters.mainCompany, this.socParameters.password, {
      hasNonce: true,
      hasTimeStamp: true,
      hasTokenCreated: true,
      passwordType: 'PasswordDigest',
    }));

    const [socResponse] = await soapClient.importacaoFuncionarioAsync(wsSocEmployee);
    if (socResponse) {
      if (socResponse.FuncionarioRetorno.encontrouErro) {
        throw new Error(socResponse.FuncionarioRetorno.descricaoErro);
      }

      return {
        message: SocConversion.formataMensagemDeRetorno(socResponse.FuncionarioRetorno),
        data: socResponse.FuncionarioRetorno,
      };
    }
  }

  protected defineMetadata(): Metadata[] {
    return metadata as Metadata[];
  }

  /**
   * Esse método pode ser usado para lógicas avançadas de conversão entre os códigos do cliente e os do SOC
   * @param dadosColigada
   * @private
   */
  protected convertCodigoempresaSoc(dadosColigada: GlbColigadaDataReadViewResponse.GColigada) {
    return '1234';
  }

  protected async postProcessingCustomerRoutines(): Promise<void> {
    if (!this.hasAnyErrors()) {
      const parameterStore = new AutomationParameter(this.tenantId, this.automationId, this.environmentId);
      await parameterStore.saveParameter('dataUltimaModificacao', DateTime.now().toUTC().toISO());
    }
  }

  private async getSoapClient(system: TunnelHubSystem) {
    if (this.soapClient) {
      return this.soapClient;
    }

    // @ts-ignore
    this.soapClient = await this.createSoapClientAs<IFuncionarioModelo2WsPortSoap>(system.parameters.wsdlUrl);

    return this.soapClient;
  }

  private lerParametro(parameters: { custom: GenericParameter[] }, parameterName: string): GenericParameter | null {
    return parameters?.custom?.find(param => param.name === parameterName);
  }

  private createSoapClientAs = <T extends Client>(url: string): Promise<T> => {
    return (createClientAsync(url) as unknown as Promise<T>);
  };

  private mapearValoresParaEstruturaWebservice(item: FuncionarioSoc): IimportacaoFuncionarioInput {
    const employeeSearchKey = this.lerParametro(this.parameters, 'chaveBusca');

    const employee = {} as IimportacaoFuncionarioInput;
    employee.Funcionario = {} as FuncionarioModelo2WsPortTypes.IFuncionario;

    employee.Funcionario.funcionarioWsVo = {} as FuncionarioModelo2WsPortTypes.IfuncionarioWsVo;

    if (employeeSearchKey) {
      // @ts-ignore
      employee.Funcionario.funcionarioWsVo.chaveProcuraFuncionario = employeeSearchKey.value;
    } else {
      employee.Funcionario.funcionarioWsVo.chaveProcuraFuncionario = 'CPF_DATA_ADMISSAO_PERIODO';
    }
    const companySearchKey = this.lerParametro(this.parameters, 'tipoBuscaEmpresa');
    if (companySearchKey) {
      // @ts-ignore
      employee.Funcionario.funcionarioWsVo.tipoBuscaEmpresa = companySearchKey.value;
    } else {
      employee.Funcionario.funcionarioWsVo.tipoBuscaEmpresa = 'CODIGO_SOC';
    }

    employee.Funcionario.transferirFuncionario = false;
    employee.Funcionario.criarFuncionario = true;
    employee.Funcionario.atualizarFuncionario = true;
    employee.Funcionario.criarMotivoLicenca = true;
    employee.Funcionario.atualizarMotivoLicenca = false;
    employee.Funcionario.criarCargo = false;
    employee.Funcionario.atualizarCargo = true;
    employee.Funcionario.criarSetor = false;
    employee.Funcionario.atualizarSetor = true;
    employee.Funcionario.criarUnidade = false;
    employee.Funcionario.atualizarUnidade = true;
    employee.Funcionario.criarHistorico = true;
    if (item.codigoRhCentroCusto || item.nomeCentroCusto) {
      employee.Funcionario.criarCentroCusto = true;
      employee.Funcionario.atualizarCentroCusto = true;
    }
    employee.Funcionario.criarUnidadeContratante = false;
    employee.Funcionario.destravarFuncionarioBloqueado = false;
    employee.Funcionario.naoImportarFuncionarioSemHierarquia = false;

    employee.Funcionario.identificacaoWsVo = {} as FuncionarioModelo2WsPortTypes.IidentificacaoWsVo;
    employee.Funcionario.identificacaoWsVo.chaveAcesso = this.socParameters.password;
    employee.Funcionario.identificacaoWsVo.codigoEmpresaPrincipal = this.socParameters.mainCompany;
    employee.Funcionario.identificacaoWsVo.codigoResponsavel = this.socParameters.responsible;
    employee.Funcionario.identificacaoWsVo.codigoUsuario = this.socParameters.username;
    employee.Funcionario.identificacaoWsVo.homologacao = this.socParameters.testing;

    employee.Funcionario.funcionarioWsVo.campoInteiro01 = 1;
    employee.Funcionario.funcionarioWsVo.campoInteiro02 = 2;
    employee.Funcionario.funcionarioWsVo.campoInteiro03 = 3;
    employee.Funcionario.funcionarioWsVo.campoInteiro04 = 4;
    employee.Funcionario.funcionarioWsVo.campoInteiro05 = 5;
    employee.Funcionario.funcionarioWsVo.campoInteiro06 = 6;
    employee.Funcionario.funcionarioWsVo.campoInteiro07 = 7;
    employee.Funcionario.funcionarioWsVo.campoInteiro08 = 8;
    employee.Funcionario.funcionarioWsVo.campoInteiro09 = 9;
    employee.Funcionario.funcionarioWsVo.campoInteiro10 = 10;

    employee.Funcionario.funcionarioWsVo.autorizadoMensagemSms = item.autorizaMensagemSms;
    employee.Funcionario.funcionarioWsVo.bairro = item.bairroFuncionario;
    employee.Funcionario.funcionarioWsVo.codigoCategoriaESocial = item.categoriaEsocial ? parseInt(item.categoriaEsocial) : undefined;
    employee.Funcionario.funcionarioWsVo.cep = SocConversion.somenteNumeros(item.cepFuncionario);
    employee.Funcionario.funcionarioWsVo.cidade = item.cidadeFuncionario;
    employee.Funcionario.funcionarioWsVo.cnpjEmpresaFuncionario = item.cnpjEmpresaFuncionario;
    employee.Funcionario.funcionarioWsVo.codigoEmpresa = item?.codigoSocEmpresa;
    employee.Funcionario.funcionarioWsVo.complementoEndereco = item.complemento;
    employee.Funcionario.funcionarioWsVo.cor = item.cor;
    employee.Funcionario.funcionarioWsVo.cpf = item.cpf;
    employee.Funcionario.funcionarioWsVo.dataAdmissao = SocConversion.escreveDataNoFormatoSoc(item.dtAdmissao);
    employee.Funcionario.funcionarioWsVo.dataDemissao = SocConversion.escreveDataNoFormatoSoc(item.dtDemissao);
    employee.Funcionario.funcionarioWsVo.dataEmissaoCtps = SocConversion.escreveDataNoFormatoSoc(item.dataEmissaoCtps);
    employee.Funcionario.funcionarioWsVo.dataNascimento = SocConversion.escreveDataNoFormatoSoc(item.dtNascimento);
    employee.Funcionario.funcionarioWsVo.dataUltimaMovimentacao = SocConversion.escreveDataNoFormatoSoc(item.ultimaMovimentacao);
    employee.Funcionario.funcionarioWsVo.email = item.email;
    employee.Funcionario.funcionarioWsVo.endereco = item.enderecoFuncionario;
    employee.Funcionario.funcionarioWsVo.escolaridade = item.escolaridade;
    employee.Funcionario.funcionarioWsVo.estado = item.estadoFuncionario;
    employee.Funcionario.funcionarioWsVo.estadoCivil = item.estadoCivil;
    employee.Funcionario.funcionarioWsVo.funcao = item.funcao;
    employee.Funcionario.funcionarioWsVo.gfip = item.gfip ? parseInt(item.gfip) : undefined;
    employee.Funcionario.funcionarioWsVo.matricula = item.matricula;
    employee.Funcionario.funcionarioWsVo.matriculaRh = item.matriculaRH;
    employee.Funcionario.funcionarioWsVo.nomeFuncionario = item.nomeFuncionario;
    employee.Funcionario.funcionarioWsVo.nomeMae = item.nomedaMae;
    employee.Funcionario.funcionarioWsVo.nomePai = item.nomedoPai;
    employee.Funcionario.funcionarioWsVo.naturalidade = item.naturalidade;
    employee.Funcionario.funcionarioWsVo.nrCtps = item.nrCtps;
    employee.Funcionario.funcionarioWsVo.numeroEndereco = item.numeroEndereco;
    employee.Funcionario.funcionarioWsVo.pis = SocConversion.somenteNumeros(item.pis);
    employee.Funcionario.funcionarioWsVo.codigoPaisNascimento = item.paisNascimento;
    employee.Funcionario.funcionarioWsVo.razaoSocialEmpresaFuncionario = item.razaoSocialEmpresaFuncionario;
    employee.Funcionario.funcionarioWsVo.regimeRevezamento = item.regimeRevezamento;
    employee.Funcionario.funcionarioWsVo.regimeTrabalho = item.regimeTrabalho ?? 'NORMAL';
    employee.Funcionario.funcionarioWsVo.rg = item.rg;
    employee.Funcionario.funcionarioWsVo.rgDataEmissao = SocConversion.escreveDataNoFormatoSoc(item.dtEmissaoRg);
    employee.Funcionario.funcionarioWsVo.rgOrgaoEmissor = item.rgOrgaoEmissor;
    employee.Funcionario.funcionarioWsVo.rgUf = item.ufRG;
    employee.Funcionario.funcionarioWsVo.remuneracaoMensal = item.salarioFuncionario;
    employee.Funcionario.funcionarioWsVo.serieCtps = item.serieCtps;
    employee.Funcionario.funcionarioWsVo.sexo = item.sexo;
    employee.Funcionario.funcionarioWsVo.situacao = item.situacao;
    employee.Funcionario.funcionarioWsVo.telefoneCelular = item.telefoneCelular;
    employee.Funcionario.funcionarioWsVo.telefoneComercial = item.telefoneComercial;
    employee.Funcionario.funcionarioWsVo.tipoContratacao = item.tipoContratacao;
    employee.Funcionario.funcionarioWsVo.ufCtps = item.ufCtps;
    employee.Funcionario.funcionarioWsVo.utilizarDescricaoRequisitoCargo = true;

    employee.Funcionario.unidadeWsVo = {} as FuncionarioModelo2WsPortTypes.IunidadeWsVo;
    // @ts-ignore
    employee.Funcionario.unidadeWsVo.tipoBusca = this.lerParametro(this.parameters, 'tipoBuscaUnidade')?.value ?? 'CODIGO_RH';
    employee.Funcionario.unidadeWsVo.codigoRh = item.codigoRhUnidade;
    employee.Funcionario.unidadeWsVo.nome = item.nomeUnidade;
    employee.Funcionario.unidadeWsVo.bairro = item.bairroUnidade;
    employee.Funcionario.unidadeWsVo.bairroCobranca = item.bairroUnidadeCobranca;
    employee.Funcionario.unidadeWsVo.endereco = item.enderecoUnidade;
    employee.Funcionario.unidadeWsVo.enderecoCobranca = item.enderecoUnidadeCobranca;
    employee.Funcionario.unidadeWsVo.numero = item.numeroEnderecoUnidade;
    employee.Funcionario.unidadeWsVo.numeroCobranca = item.numeroEnderecoUnidadeCobranca;
    employee.Funcionario.unidadeWsVo.complemento = item.complementoEnderecoUnidade;
    employee.Funcionario.unidadeWsVo.complementoCobranca = item.complementoEnderecoUnidadeCobranca;
    employee.Funcionario.unidadeWsVo.cidade = item.cidadeUnidade;
    employee.Funcionario.unidadeWsVo.cidadeCobranca = item.cidadeUnidadeCobranca;
    employee.Funcionario.unidadeWsVo.estado = item.estadoUnidade;
    employee.Funcionario.unidadeWsVo.estadoCobranca = item.estadoUnidadeCobranca;
    employee.Funcionario.unidadeWsVo.cep = SocConversion.somenteNumeros(item.cepUnidade);
    employee.Funcionario.unidadeWsVo.cepCobranca = SocConversion.somenteNumeros(item.cepUnidadeCobranca);
    employee.Funcionario.unidadeWsVo.codigoCnpjCei = item.cnpjUnidade;
    employee.Funcionario.unidadeWsVo.cnpj_cei = 'CNPJ';
    employee.Funcionario.unidadeWsVo.inscricaoEstadual = item.inscricaoUnidade;
    employee.Funcionario.unidadeWsVo.telefoneCat = item.telefoneUnidade1;
    employee.Funcionario.unidadeWsVo.tipoCnae = item.cnaeUtilizado;
    employee.Funcionario.unidadeWsVo.codigoCnae = SocConversion.somenteNumeros(item.cnae7);
    employee.Funcionario.unidadeWsVo.razaoSocial = item.razaoSocialUnidade;
    employee.Funcionario.unidadeWsVo.descricaoCnae = item.descricaoCnaeLivre;
    employee.Funcionario.unidadeWsVo.grauRisco = item.grauRisco ? parseInt(item.grauRisco) : null;

    employee.Funcionario.setorWsVo = {} as FuncionarioModelo2WsPortTypes.IsetorWsVo;
    // @ts-ignore
    employee.Funcionario.setorWsVo.tipoBusca = this.lerParametro(this.parameters, 'tipoBuscaSetor')?.value ?? 'CODIGO_RH';
    employee.Funcionario.setorWsVo.codigoRh = item.codigoRhSetor;
    employee.Funcionario.setorWsVo.nome = item.nomeSetor;

    employee.Funcionario.cargoWsVo = {} as FuncionarioModelo2WsPortTypes.IcargoWsVo;
    // @ts-ignore
    employee.Funcionario.cargoWsVo.tipoBusca = this.lerParametro(this.parameters, 'tipoBuscaCargo')?.value ?? 'CODIGO_RH';
    employee.Funcionario.cargoWsVo.codigoRh = item.codigoRhCargo;
    employee.Funcionario.cargoWsVo.nome = item.nomeCargo;
    if (item.cbo) {
      const cboFormatter = new StringMask('####.##');
      employee.Funcionario.cargoWsVo.cbo = cboFormatter.apply(SocConversion.somenteNumeros(item.cbo));
    }

    employee.Funcionario.cargoWsVo.atualizaDescricaoRequisitosCargoPeloCbo = false;

    if (item.descricaoDetalhadaCargo) {
      employee.Funcionario.cargoWsVo.descricaoDetalhada = item.descricaoDetalhadaCargo;
    }

    if (item.codigoRhCentroCusto || item.nomeCentroCusto) {
      employee.Funcionario.centroCustoWsVo = {} as FuncionarioModelo2WsPortTypes.IcentroCustoWsVo;
      // @ts-ignore
      employee.Funcionario.centroCustoWsVo.tipoBusca = this.lerParametro(this.parameters, 'tipoBuscaCentroCusto')?.value ?? 'CODIGO_RH';
      employee.Funcionario.centroCustoWsVo.codigoRh = item.codigoRhCentroCusto;
      employee.Funcionario.centroCustoWsVo.nome = item.nomeCentroCusto;
    }

    employee.Funcionario.deficienciaWsVo = {} as FuncionarioModelo2WsPortTypes.IdeficienciaWsVo;
    if (item.deficiencia && item.deficiencia !== '') {
      employee.Funcionario.deficienciaWsVo.deficiente = true;
      employee.Funcionario.deficienciaWsVo.deficiencia = item.deficiencia;
    } else {
      employee.Funcionario.deficienciaWsVo.deficiente = false;
      employee.Funcionario.deficienciaWsVo.deficiencia = null;
    }

    if (item.nomeTurno) {
      employee.Funcionario.atualizarTurno = true;
      employee.Funcionario.criarTurno = true;

      employee.Funcionario.turnoWsVo = {} as FuncionarioModelo2WsPortTypes.IturnoWsVo;
      employee.Funcionario.turnoWsVo.tipoBusca = 'NOME';
      employee.Funcionario.turnoWsVo.nome = item.nomeTurno;
    }

    return employee;
  }

  private preCarregarParametros(automationParameters: { custom: GenericParameter[] }) {
    this.socParameters = {
      password: null,
      testing: null,
      username: null,
      responsible: null,
      mainCompany: null,
    };

    const system = this.systems.find(value => value.internalName === 'SOC_FUNCIONARIOS');
    if (!system || system.type !== 'SOAP' || system.parameters.authType !== 'BASIC') {
      throw new Error(`O sistema SOC_FUNCIONARIOS precisa ser do tipo SOAP com autenticação Basic`);
    }

    const automationUserName = this.lerParametro(automationParameters, 'userName');
    if (automationUserName) {
      this.socParameters.username = automationUserName.value;
    } else {
      this.socParameters.username = system.parameters.user;
    }

    const automationMainCompany = this.lerParametro(automationParameters, 'mainCompany');
    if (automationMainCompany) {
      this.socParameters.mainCompany = automationMainCompany.value;
    } else {
      const mainCompany = this.lerParametro(system.parameters, 'mainCompany');
      if (mainCompany) {
        this.socParameters.mainCompany = mainCompany.value;
      }
    }

    const automationPassword = this.lerParametro(automationParameters, 'password');
    if (automationPassword) {
      this.socParameters.password = automationPassword.value;
    } else {
      this.socParameters.password = system.parameters.password;
    }

    const automationResponsible = this.lerParametro(automationParameters, 'responsibleCode');
    if (automationResponsible) {
      this.socParameters.responsible = automationResponsible.value;
    } else {
      const responsible = this.lerParametro(system.parameters, 'responsibleCode');
      if (responsible) {
        this.socParameters.responsible = responsible.value;
      }
    }

    const automationTestingEnvironment = this.lerParametro(automationParameters, 'testingEnvironment');
    if (automationTestingEnvironment) {
      this.socParameters.testing = automationTestingEnvironment.value === 'true' || automationTestingEnvironment.value === '1';
    } else {
      const testingEnvironment = this.lerParametro(system.parameters, 'testingEnvironment');
      if (testingEnvironment) {
        this.socParameters.testing = testingEnvironment.value === 'true' || testingEnvironment.value === '1';
      }
    }
  }
}
