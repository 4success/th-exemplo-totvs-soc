import { createClientAsync } from '../soap/wsdataserver';
import { BasicAuthSecurity } from 'soap';
import { XMLParser } from 'fast-xml-parser';
import {
  FopFuncaoDataReadViewResponse,
  FopFuncDataReadRecordResponse,
  FopFuncDataReadViewResponse,
  FopSecaoDataReadViewResponse,
  GlbColigadaDataReadViewResponse,
} from '../data';

const parser = new XMLParser({
  ignoreDeclaration: true,
  numberParseOptions: {
    leadingZeros: true,
    hex: false,
  },
});

export default class TotvsApi {
  constructor(private defaultApiHost: string, private defaultApiUser: string, private defaultApiPassword: string) {
  }

  /**
   * Método que busca o cadastro completo de um funcionário em uma coligada
   * Ele é necessário apenas pelo fato do TOTVS não retornar todos os campos em operações ReadView
   * @param codColigada
   * @param chapa
   */
  async buscaDetalheFuncionario(codColigada: number | string, chapa: number | string) {
    const soapClient = await createClientAsync(this.defaultApiHost);
    soapClient.setSecurity(new BasicAuthSecurity(this.defaultApiUser, this.defaultApiPassword));

    const [funcionarioDetalhado] = await soapClient.ReadRecordAsync({
      DataServerName: 'FopFuncData',
      PrimaryKey: `${codColigada};${chapa}`,
      Contexto: `CODSISTEMA=P;CODCOLIGADA=${codColigada};CODUSUARIO=SOC`,
    });

    return parser.parse(funcionarioDetalhado.ReadRecordResult) as FopFuncDataReadRecordResponse.RootObject;
  }

  /**
   * Método que busca todos os funcionários ativos em uma coligada, com modificação a partir de uma determinada data
   */
  async buscaFuncionariosAtivos(codColigada: number, dataModificacao: string) {
    const soapClient = await createClientAsync(this.defaultApiHost);
    soapClient.setSecurity(new BasicAuthSecurity(this.defaultApiUser, this.defaultApiPassword));

    const [allEmployee] = await soapClient.ReadViewAsync({
      DataServerName: 'FopFuncData',
      Filtro: `PFunc.CODCOLIGADA=${codColigada} AND PFunc.RECMODIFIEDON>'${dataModificacao}'`,
      Contexto: `CODSISTEMA=P;CODCOLIGADA=${codColigada};CODUSUARIO=SOC`,
    });

    const todosFuncionarios = parser.parse(allEmployee.ReadViewResult) as FopFuncDataReadViewResponse.RootObject;

    // @ts-ignore
    if (todosFuncionarios.NewDataSet === '') {
      return [];
    }
    if (!Array.isArray(todosFuncionarios.NewDataSet.PFunc)) {
      todosFuncionarios.NewDataSet.PFunc = [todosFuncionarios.NewDataSet.PFunc];
    }
    return todosFuncionarios.NewDataSet.PFunc;
  }

  /**
   * Método que determina quais serão as coligadas participantes da integração
   */
  async buscaUnidades() {
    const soapClient = await createClientAsync(this.defaultApiHost);
    soapClient.setSecurity(new BasicAuthSecurity(this.defaultApiUser, this.defaultApiPassword));

    const [allUnidades] = await soapClient.ReadViewAsync({
      DataServerName: 'GlbColigadaData',
      Filtro: '1=1',
      Contexto: `CODSISTEMA=P;CODCOLIGADA=1;CODUSUARIO=SOC`,
    });
    const respostaXml = parser.parse(allUnidades.ReadViewResult) as GlbColigadaDataReadViewResponse.RootObject;
    const dadosUnidade = respostaXml.NewDataSet.GColigada;
    return dadosUnidade.filter(value => {
      switch (value.CODCOLIGADA.toString()) {
        case '1':
          return true;
        default:
          return false;
      }
    });
  }

  /**
   * Método que busca todos os setores de uma determinada coligada
   */
  async buscaSetores(codColigada: number) {
    const soapClient = await createClientAsync(this.defaultApiHost);
    soapClient.setSecurity(new BasicAuthSecurity(this.defaultApiUser, this.defaultApiPassword));

    const [allSetores] = await soapClient.ReadViewAsync({
      DataServerName: 'FopSecaoData',
      Filtro: `CODCOLIGADA=${codColigada}`,
      Contexto: `CODSISTEMA=P;CODCOLIGADA=${codColigada};CODUSUARIO=SOC`,
    });
    const dadosSetores = parser.parse(allSetores.ReadViewResult) as FopSecaoDataReadViewResponse.RootObject;
    if (!Array.isArray(dadosSetores.NewDataSet.PSecao)) {
      dadosSetores.NewDataSet.PSecao = [dadosSetores.NewDataSet.PSecao];
    }
    return dadosSetores.NewDataSet.PSecao;
  }

  /**
   * Método que busca todos os cargos de uma determinada coligada
   */
  async buscaCargos(codColigada: number) {
    const soapClient = await createClientAsync(this.defaultApiHost);
    soapClient.setSecurity(new BasicAuthSecurity(this.defaultApiUser, this.defaultApiPassword));

    const [allCargos] = await soapClient.ReadViewAsync({
      DataServerName: 'FopFuncaoData',
      Filtro: `PFuncao.CODCOLIGADA=${codColigada}`,
      Contexto: `CODSISTEMA=P;CODCOLIGADA=${codColigada};CODUSUARIO=SOC`,
    });
    const dadosCargos = parser.parse(allCargos.ReadViewResult) as FopFuncaoDataReadViewResponse.RootObject;
    if (!Array.isArray(dadosCargos.NewDataSet.PFuncao)) {
      dadosCargos.NewDataSet.PFuncao = [dadosCargos.NewDataSet.PFuncao];
    }
    return dadosCargos.NewDataSet.PFuncao;
  }
}