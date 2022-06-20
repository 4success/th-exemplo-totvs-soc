import { Client } from 'soap';

/* tslint:disable:max-line-length no-empty-interface */
export interface IimportacaoFuncionarioInput {
    Funcionario: FuncionarioModelo2WsPortTypes.IFuncionario;
}

export interface IimportacaoFuncionarioOutput {
    FuncionarioRetorno: FuncionarioModelo2WsPortTypes.IFuncionarioRetorno;
}

export interface IFuncionarioModelo2WsPortSoap extends Client{
    importacaoFuncionario: (input: IimportacaoFuncionarioInput, cb: (err: any | null, result: IimportacaoFuncionarioOutput, raw: string,  soapHeader: {[k: string]: any; }) => any, options?: any, extraHeaders?: any) => void;
    importacaoFuncionarioAsync: (input: IimportacaoFuncionarioInput, options?: any, extraHeaders?: any) => Promise<[IimportacaoFuncionarioOutput, string, {[k: string]: any; }, string]>;
}

export namespace FuncionarioModelo2WsPortTypes {
    export interface IatividadesPerigosasWsVo {
        /** http://services.soc.age.com/#xs:string(undefined) */
        codigoAtividadePerigosa: string;
    }
    export interface IcargoWsVo {
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        atualizaDescricaoRequisitosCargoPeloCbo: boolean;
        /** http://services.soc.age.com/#xs:string(undefined) */
        cbo: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        codigo: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        codigoRh: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        descricaoDetalhada: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        descricaoLocal: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        educacao: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        experiencia: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        funcao: string;
        /** http://services.soc.age.com/#xs:int(undefined) */
        gfip: number;
        /** http://services.soc.age.com/#xs:string(undefined) */
        habilidades: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        localTrabalho: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        materialUtilizado: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        mobiliarioUtilizado: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        nome: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        nomeLegal: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        orientacaoAso: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        requisitosFuncao: string;
        /** http://services.soc.age.com/#situacao(ATIVO,INATIVO) */
        status: "ATIVO" | "INATIVO";
        /** http://services.soc.age.com/#tipoBuscaCargoEnum(CODIGO,CODIGO_RH,NOME) */
        tipoBusca: "CODIGO" | "CODIGO_RH" | "NOME";
        /** http://services.soc.age.com/#xs:string(undefined) */
        treinamento: string;
        atividadesPerigosasWsVo: FuncionarioModelo2WsPortTypes.IatividadesPerigosasWsVo;
    }
    export interface IcentroCustoWsVo {
        /** http://services.soc.age.com/#xs:string(undefined) */
        codigo: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        codigoRh: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        nome: string;
        /** http://services.soc.age.com/#tipoBuscaCentroCustoEnum(CODIGO,CODIGO_RH,NOME) */
        tipoBusca: "CODIGO" | "CODIGO_RH" | "NOME";
    }
    export interface IclassificacaoDeficiencia {
        /** http://services.soc.age.com/#classificacaoDeficienciaEnum(DEFICIENCIA_FISICA,DEFICIENCIA_AUDITIVA,DEFICIENCIA_VISUAL,DEFICIENCIA_MENTAL,DEFICIENCIA_MULTIPLA,REABILITACAO,DEFICIENCIA_INTELECTUAL) */
        classificacao: "DEFICIENCIA_FISICA" | "DEFICIENCIA_AUDITIVA" | "DEFICIENCIA_VISUAL" | "DEFICIENCIA_MENTAL" | "DEFICIENCIA_MULTIPLA" | "REABILITACAO" | "DEFICIENCIA_INTELECTUAL";
        /** http://services.soc.age.com/#xs:string(undefined) */
        codigo: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        nome: string;
        /** http://services.soc.age.com/#tipoBuscaEnum(CODIGO,NOME) */
        tipoBusca: "CODIGO" | "NOME";
    }
    export interface IdeficienciaWsVo {
        /** http://services.soc.age.com/#xs:string(undefined) */
        cids: string;
        classificacaoDeficiencia: FuncionarioModelo2WsPortTypes.IclassificacaoDeficiencia[];
        /** http://services.soc.age.com/#xs:string(undefined) */
        codigoLegislacaoReferencia: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        codigoMedico: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        dataEmissaoLaudo: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        deficiencia: string;
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        deficiente: boolean;
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        gravarHistorico: boolean;
        /** http://services.soc.age.com/#xs:string(undefined) */
        nomeLegislacaoReferencia: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        observacao: string;
        /** http://services.soc.age.com/#origemDeficienciaEnum(EM_BRANCO,ACIDENTE_DE_TRABALHO,CONGENITA,ACIDENTE_COMUM,DOENCA,ADQUIRIDA_EM_POS_OPERATORIO,DESCONHECIDA,OUTRAS) */
        origemDeficiencia: "EM_BRANCO" | "ACIDENTE_DE_TRABALHO" | "CONGENITA" | "ACIDENTE_COMUM" | "DOENCA" | "ADQUIRIDA_EM_POS_OPERATORIO" | "DESCONHECIDA" | "OUTRAS";
        /** http://services.soc.age.com/#parecerLaudoEnum(EM_BRANCO,APTO_PARA_FUNCAO,INAPTO_PARA_FUNCAO) */
        parecerLaudo: "EM_BRANCO" | "APTO_PARA_FUNCAO" | "INAPTO_PARA_FUNCAO";
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        reabilitado: boolean;
        /** http://services.soc.age.com/#tipoBuscaEnum(CODIGO,NOME) */
        tipoBuscaLegislacaoReferencia: "CODIGO" | "NOME";
    }
    export interface IfuncionarioWsVo {
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        autorizadoMensagemSms: boolean;
        /** http://services.soc.age.com/#xs:string(undefined) */
        bairro: string;
        /** http://services.soc.age.com/#xs:int(undefined) */
        campoInteiro01: number;
        /** http://services.soc.age.com/#xs:int(undefined) */
        campoInteiro02: number;
        /** http://services.soc.age.com/#xs:int(undefined) */
        campoInteiro03: number;
        /** http://services.soc.age.com/#xs:int(undefined) */
        campoInteiro04: number;
        /** http://services.soc.age.com/#xs:int(undefined) */
        campoInteiro05: number;
        /** http://services.soc.age.com/#xs:int(undefined) */
        campoInteiro06: number;
        /** http://services.soc.age.com/#xs:int(undefined) */
        campoInteiro07: number;
        /** http://services.soc.age.com/#xs:int(undefined) */
        campoInteiro08: number;
        /** http://services.soc.age.com/#xs:int(undefined) */
        campoInteiro09: number;
        /** http://services.soc.age.com/#xs:int(undefined) */
        campoInteiro10: number;
        /** http://services.soc.age.com/#xs:string(undefined) */
        campoString01: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        campoString02: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        campoString03: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        campoString04: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        campoString05: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        campoString06: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        campoString07: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        campoString08: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        campoString09: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        campoString10: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        campoString11: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        campoString12: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        campoString13: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        campoString14: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        campoString15: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        campoString16: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        campoString17: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        campoString18: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        campoString19: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        campoString20: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        campoString21: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        campoString22: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        campoString23: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        campoString24: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        campoString25: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        campoString26: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        campoString27: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        campoString28: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        campoString29: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        campoString30: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        carteiraNacionalSaude: string;
        /** http://services.soc.age.com/#tipoCategoriaEnum(EM_BRANCO,CONTRIB_INDIVIDUAL_AUTONOMO_CONTRATADO_EMPRESAS_GERAL,CONTRIB_INDIVIDUAL_AUTONOMO_CONTRATADO_CONTRIB_INDIVIDUAL_PESSOA_FISICA_OU_MISSAO_DIPLOMATICA_E_REPARTICAO_CONSULAR_ESTRANGEIRAS,CONTRIB_INDIVIDUAL_AUTONOMO_CONTRATADO_ENTIDADE_BENEFICENTE_ISENTA_COTA_PATRONAL,EXCLUIDO,CONTRIB_INDIVIDUAL_TRANSPORTADOR_AUTONOMO_CONTRATADO_EMPRESAS_GERAL,CONTRIB_INDIVIDUAL_TRANSPORTADOR_AUTONOMO_CONTRATADO_CONTRIB_INDIVIDUAL_PESSOA_FISICA_OU_MISSAO_DIPLOMATICA_E_REPARTICAO_CONSULAR_ESTRANGEIRAS,CONTRIB_INDIVIDUAL_TRANSPORTADOR_AUTONOMO_CONTRATADO_ENTIDADE_BENEFICENTE_ISENTA_COTA_PATRONAL) */
        categoria: "EM_BRANCO" | "CONTRIB_INDIVIDUAL_AUTONOMO_CONTRATADO_EMPRESAS_GERAL" | "CONTRIB_INDIVIDUAL_AUTONOMO_CONTRATADO_CONTRIB_INDIVIDUAL_PESSOA_FISICA_OU_MISSAO_DIPLOMATICA_E_REPARTICAO_CONSULAR_ESTRANGEIRAS" | "CONTRIB_INDIVIDUAL_AUTONOMO_CONTRATADO_ENTIDADE_BENEFICENTE_ISENTA_COTA_PATRONAL" | "EXCLUIDO" | "CONTRIB_INDIVIDUAL_TRANSPORTADOR_AUTONOMO_CONTRATADO_EMPRESAS_GERAL" | "CONTRIB_INDIVIDUAL_TRANSPORTADOR_AUTONOMO_CONTRATADO_CONTRIB_INDIVIDUAL_PESSOA_FISICA_OU_MISSAO_DIPLOMATICA_E_REPARTICAO_CONSULAR_ESTRANGEIRAS" | "CONTRIB_INDIVIDUAL_TRANSPORTADOR_AUTONOMO_CONTRATADO_ENTIDADE_BENEFICENTE_ISENTA_COTA_PATRONAL";
        /** http://services.soc.age.com/#xs:string(undefined) */
        cep: string;
        /** http://services.soc.age.com/#chaveProcura(CODIGO,MATRICULA,MATRICULA_RH,CPF,DATA_NASCIMENTO,CPF_PENDENTE,CPF_ATIVO,CPF_DATA_ADMISSAO,CPF_DATA_ADMISSAO_PERIODO,CODIGO_RH) */
        chaveProcuraFuncionario: "CODIGO" | "MATRICULA" | "MATRICULA_RH" | "CPF" | "DATA_NASCIMENTO" | "CPF_PENDENTE" | "CPF_ATIVO" | "CPF_DATA_ADMISSAO" | "CPF_DATA_ADMISSAO_PERIODO" | "CODIGO_RH";
        /** http://services.soc.age.com/#xs:string(undefined) */
        cidade: string;
        /** http://services.soc.age.com/#tipoCipaEnum(EM_BRANCO,EFETIVO,SUPLENTE,RESPONSAVEL) */
        cipa: "EM_BRANCO" | "EFETIVO" | "SUPLENTE" | "RESPONSAVEL";
        /** http://services.soc.age.com/#xs:string(undefined) */
        cipaDataFimMandato: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        cipaDataInicioMandato: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        cnpjEmpresaFuncionario: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        codigo: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        codigoEmpresa: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        codigoMunicipio: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        complementoEndereco: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        contatoEmergencia: string;
        /** http://services.soc.age.com/#corEnum(EM_BRANCO,BRANCO,NEGRO,AMARELO,PARDO,INDIGENA,MULATO) */
        cor: "EM_BRANCO" | "BRANCO" | "NEGRO" | "AMARELO" | "PARDO" | "INDIGENA" | "MULATO";
        /** http://services.soc.age.com/#xs:string(undefined) */
        cpf: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        dataAdmissao: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        dataAfastamento: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        dataDemissao: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        dataDemissionalCarta: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        dataEmissaoCtps: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        dataFinalEstabilidade: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        dataNascimento: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        dataUltimaMovimentacao: string;
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        desabilitarRisco: boolean;
        /** http://services.soc.age.com/#xs:string(undefined) */
        descricaoAtividade: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        email: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        endereco: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        enderecoEmergencia: string;
        /** http://services.soc.age.com/#tipoEscolaridadeEnum(EM_BRANCO,ENSINO_FUNDAMENTAL_INCOMPLETO,ENSINO_FUNDAMENTAL_COMPLETO,ENSINO_MEDIO_INCOMPLETO,ENSINO_MEDIO_COMPLETO,ENSINO_SUPERIOR_INCOMPLETO,ENSINO_SUPERIOR_COMPLETO,PROFISSIONALIZANTE,TECNICO_INCOMPLETO,TECNICO_COMPLETO,TECNOLOGO_INCOMPLETO,TECNOLOGO_COMPLETO,POS_GRADUACAO_INCOMPLETA,POS_GRADUACAO_COMPLETA,MESTRADO_INCOMPLETO,MESTRADO_COMPLETO,DOUTORADO_INCOMPLETO,DOUTORADO_COMPLETO,PHD_INCOMPLETO,PHD_COMPLETO,NAO_INFORMADO,ANALFABETO) */
        escolaridade: "EM_BRANCO" | "ENSINO_FUNDAMENTAL_INCOMPLETO" | "ENSINO_FUNDAMENTAL_COMPLETO" | "ENSINO_MEDIO_INCOMPLETO" | "ENSINO_MEDIO_COMPLETO" | "ENSINO_SUPERIOR_INCOMPLETO" | "ENSINO_SUPERIOR_COMPLETO" | "PROFISSIONALIZANTE" | "TECNICO_INCOMPLETO" | "TECNICO_COMPLETO" | "TECNOLOGO_INCOMPLETO" | "TECNOLOGO_COMPLETO" | "POS_GRADUACAO_INCOMPLETA" | "POS_GRADUACAO_COMPLETA" | "MESTRADO_INCOMPLETO" | "MESTRADO_COMPLETO" | "DOUTORADO_INCOMPLETO" | "DOUTORADO_COMPLETO" | "PHD_INCOMPLETO" | "PHD_COMPLETO" | "NAO_INFORMADO" | "ANALFABETO";
        /** http://services.soc.age.com/#estadosEnum(AC,AL,AM,AP,BA,CE,DF,ES,GO,MA,MG,MS,MT,PA,PB,PE,PI,PR,RJ,RN,RO,RR,RS,SC,SE,SP,TO) */
        estado: "AC" | "AL" | "AM" | "AP" | "BA" | "CE" | "DF" | "ES" | "GO" | "MA" | "MG" | "MS" | "MT" | "PA" | "PB" | "PE" | "PI" | "PR" | "RJ" | "RN" | "RO" | "RR" | "RS" | "SC" | "SE" | "SP" | "TO";
        /** http://services.soc.age.com/#estadoCivilEnum(SOLTEIRO,CASADO,SEPARADO,DIVORCIADO,VIUVO,OUTROS,DESQUITADO,UNIAO_ESTAVEL) */
        estadoCivil: "SOLTEIRO" | "CASADO" | "SEPARADO" | "DIVORCIADO" | "VIUVO" | "OUTROS" | "DESQUITADO" | "UNIAO_ESTAVEL";
        /** http://services.soc.age.com/#xs:string(undefined) */
        funcao: string;
        /** http://services.soc.age.com/#tipoFuncaoBrigadaEnum(EM_BRANCO,COORDENADOR_GERAL,LIDER,CHEFE_DE_BRIGADA,BRIGADISTA) */
        funcaoBrigadaIncendio: "EM_BRANCO" | "COORDENADOR_GERAL" | "LIDER" | "CHEFE_DE_BRIGADA" | "BRIGADISTA";
        /** http://services.soc.age.com/#xs:int(undefined) */
        gfip: number;
        /** http://services.soc.age.com/#historicoPPP(EXIBIR,NAO_EXIBIR) */
        historicoPPP: "EXIBIR" | "NAO_EXIBIR";
        /** http://services.soc.age.com/#xs:string(undefined) */
        matricula: string;
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        naoPossuiCpf: boolean;
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        naoPossuiCtps: boolean;
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        naoPossuiMatricula: boolean;
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        naoPossuiPis: boolean;
        /** http://services.soc.age.com/#xs:string(undefined) */
        naturalidade: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        nomeCooperativa: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        nomeFuncionario: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        nomeMae: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        nrCtps: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        numeroEndereco: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        observacaoAso: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        observacaoEstabilidade: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        observacaoPpp: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        parentescoContatoEmergencia: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        pis: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        ramal: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        ramalTelefoneEmergencia: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        razaoSocialEmpresaFuncionario: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        regimeRevezamento: string;
        /** http://services.soc.age.com/#regimeTrabalhoEnum(NORMAL,TURNO) */
        regimeTrabalho: "NORMAL" | "TURNO";
        /** http://services.soc.age.com/#xs:decimal(undefined) */
        remuneracaoMensal: number;
        /** http://services.soc.age.com/#xs:string(undefined) */
        requisitosFuncao: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        rg: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        rgDataEmissao: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        rgOrgaoEmissor: string;
        /** http://services.soc.age.com/#estadosEnum(AC,AL,AM,AP,BA,CE,DF,ES,GO,MA,MG,MS,MT,PA,PB,PE,PI,PR,RJ,RN,RO,RR,RS,SC,SE,SP,TO) */
        rgUf: "AC" | "AL" | "AM" | "AP" | "BA" | "CE" | "DF" | "ES" | "GO" | "MA" | "MG" | "MS" | "MT" | "PA" | "PB" | "PE" | "PI" | "PR" | "RJ" | "RN" | "RO" | "RR" | "RS" | "SC" | "SE" | "SP" | "TO";
        /** http://services.soc.age.com/#xs:string(undefined) */
        serieCtps: string;
        /** http://services.soc.age.com/#sexoEnum(MASCULINO,FEMININO) */
        sexo: "MASCULINO" | "FEMININO";
        /** http://services.soc.age.com/#situacaoFuncionario(ATIVO,AFASTADO,PENDENTE,FERIAS,INATIVO) */
        situacao: "ATIVO" | "AFASTADO" | "PENDENTE" | "FERIAS" | "INATIVO";
        /** http://services.soc.age.com/#xs:string(undefined) */
        telefoneCelular: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        telefoneComercial: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        telefoneEmergencia: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        telefoneResidencial: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        telefoneSms: string;
        /** http://services.soc.age.com/#tipoBuscaEmpresaEnum(CODIGO_SOC,CODIGO_CLIENTE) */
        tipoBuscaEmpresa: "CODIGO_SOC" | "CODIGO_CLIENTE";
        /** http://services.soc.age.com/#tipoContratacaoEnum(CLT,COOPERADO,TERCERIZADO,AUTONOMO,TEMPORARIO,PESSOA_JURIDICA,ESTAGIARIO,MENOR_APRENDIZ,ESTATUTARIO,COMISSIONADO_INTERNO,COMISSIONADO_EXTERNO,APOSENTADO,APOSENTADO_INATIVO_PREFEITURA,PENSIONISTA,SERVIDOR_PUBLICO_EFETIVO,EXTRANUMERARIO,AUTARQUICO,INATIVO,TITULO_PRECARIO,SERVIDOR_ADM_CENTRALIZADA_OU_DESCENTRALIZADA) */
        tipoContratacao: "CLT" | "COOPERADO" | "TERCERIZADO" | "AUTONOMO" | "TEMPORARIO" | "PESSOA_JURIDICA" | "ESTAGIARIO" | "MENOR_APRENDIZ" | "ESTATUTARIO" | "COMISSIONADO_INTERNO" | "COMISSIONADO_EXTERNO" | "APOSENTADO" | "APOSENTADO_INATIVO_PREFEITURA" | "PENSIONISTA" | "SERVIDOR_PUBLICO_EFETIVO" | "EXTRANUMERARIO" | "AUTARQUICO" | "INATIVO" | "TITULO_PRECARIO" | "SERVIDOR_ADM_CENTRALIZADA_OU_DESCENTRALIZADA";
        /** http://services.soc.age.com/#estadosEnum(AC,AL,AM,AP,BA,CE,DF,ES,GO,MA,MG,MS,MT,PA,PB,PE,PI,PR,RJ,RN,RO,RR,RS,SC,SE,SP,TO) */
        ufCtps: "AC" | "AL" | "AM" | "AP" | "BA" | "CE" | "DF" | "ES" | "GO" | "MA" | "MG" | "MS" | "MT" | "PA" | "PB" | "PE" | "PI" | "PR" | "RJ" | "RN" | "RO" | "RR" | "RS" | "SC" | "SE" | "SP" | "TO";
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        utilizarDescricaoRequisitoCargo: boolean;
        /** http://services.soc.age.com/#xs:string(undefined) */
        observacaoFuncionario: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        codigoPaisNascimento: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        emailPessoal: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        matriculaRh: string;
        /** http://services.soc.age.com/#xs:int(undefined) */
        codigoCategoriaESocial: number;
        /** http://services.soc.age.com/#generoEnum(EM_BRANCO,TRAVESTI,TRANSEXUAL) */
        genero: "EM_BRANCO" | "TRAVESTI" | "TRANSEXUAL";
        /** http://services.soc.age.com/#xs:string(undefined) */
        nomeSocial: string;
        /** http://services.soc.age.com/#tipoVinculoEnum(EM_BRANCO,EMPREGATICIO,ASSOCIATIVO) */
        tipoVinculo: "EM_BRANCO" | "EMPREGATICIO" | "ASSOCIATIVO";
        /** http://services.soc.age.com/#tipoAdmissaoEnum(EM_BRANCO,ADMISSAO,TRANSFERENCIA_EMPRESA_MESMO_GRUPO,TRANSFERENCIA_EMPRESA_CONSORCIADA,TRANSFERENCIA_MOTIVO_SUCESSAO) */
        tipoAdmissao: "EM_BRANCO" | "ADMISSAO" | "TRANSFERENCIA_EMPRESA_MESMO_GRUPO" | "TRANSFERENCIA_EMPRESA_CONSORCIADA" | "TRANSFERENCIA_MOTIVO_SUCESSAO";
        /** http://services.soc.age.com/#xs:string(undefined) */
        nomePai: string;
        atividadesPerigosasWsVo: FuncionarioModelo2WsPortTypes.IatividadesPerigosasWsVo;
        /** http://services.soc.age.com/#tipoSanguineoEnum(NENHUM,O_POSITIVO,A_POSITIVO,AB_POSITIVO,B_POSITIVO,O_NEGATIVO,A_NEGATIVO,AB_NEGATIVO,B_NEGATIVO) */
        tipoSanguineo: "NENHUM" | "O_POSITIVO" | "A_POSITIVO" | "AB_POSITIVO" | "B_POSITIVO" | "O_NEGATIVO" | "A_NEGATIVO" | "AB_NEGATIVO" | "B_NEGATIVO";
        /** http://services.soc.age.com/#corOlhoNorma13Enum(EM_BRANCO,AZUL,AZUL_ESVERDEADO,CASTANHO,CINZA,VERDE,AVELA,AMBAR,VERMELHO,VIOLETA) */
        corDosOlhos: "EM_BRANCO" | "AZUL" | "AZUL_ESVERDEADO" | "CASTANHO" | "CINZA" | "VERDE" | "AVELA" | "AMBAR" | "VERMELHO" | "VIOLETA";
        /** http://services.soc.age.com/#funcionarioGrauInstrucaoEnum(EM_BRANCO,ANALFABETO,QUINTO_INCOMPLETO,QUINTO_COMPLETO,FUNDAMENTAL_INCOMPLETO,FUNDAMENTAL_COMPLETO,MEDIO_INCOMPLETO,MEDIO_COMPLETO,SUPERIOR_INCOMPLETO,SUPERIOR_COMPLETO,POS_GRADUACAO_COMPLETA,MESTRADO_COMPLETO,DOUTORADO_COMPLETO) */
        grauInstrucao: "EM_BRANCO" | "ANALFABETO" | "QUINTO_INCOMPLETO" | "QUINTO_COMPLETO" | "FUNDAMENTAL_INCOMPLETO" | "FUNDAMENTAL_COMPLETO" | "MEDIO_INCOMPLETO" | "MEDIO_COMPLETO" | "SUPERIOR_INCOMPLETO" | "SUPERIOR_COMPLETO" | "POS_GRADUACAO_COMPLETA" | "MESTRADO_COMPLETO" | "DOUTORADO_COMPLETO";
        /** http://services.soc.age.com/#xs:string(undefined) */
        cns: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        dataInicioPeriodoAquisitivo: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        dataFimPeriodoAquisitivo: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        codigoRh: string;
    }
    export interface IidentificacaoWsVo {
        /** http://services.soc.age.com/#xs:string(undefined) */
        chaveAcesso: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        codigoEmpresaPrincipal: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        codigoResponsavel: string;
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        homologacao: boolean;
        /** http://services.soc.age.com/#xs:string(undefined) */
        codigoUsuario: string;
    }
    export interface ImotivoLicencaWsVo {
        /** http://services.soc.age.com/#xs:string(undefined) */
        codigo: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        codigoDeIntegracao: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        nome: string;
        /** http://services.soc.age.com/#tipoBuscaMotivoLicencaEnum(CODIGO,CODIGO_INTEGRACAO,NOME) */
        tipoBusca: "CODIGO" | "CODIGO_INTEGRACAO" | "NOME";
    }
    export interface IsetorWsVo {
        /** http://services.soc.age.com/#xs:string(undefined) */
        codigo: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        codigoRh: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        descricao: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        nome: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        observacaoAso: string;
        /** http://services.soc.age.com/#situacao(ATIVO,INATIVO) */
        status: "ATIVO" | "INATIVO";
        /** http://services.soc.age.com/#tipoBuscaSetorEnum(CODIGO,CODIGO_RH,NOME) */
        tipoBusca: "CODIGO" | "CODIGO_RH" | "NOME";
    }
    export interface IturnoWsVo {
        /** http://services.soc.age.com/#xs:string(undefined) */
        cargaHorariaSemanal: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        codigo: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        nome: string;
        /** http://services.soc.age.com/#tipoBuscaTurnoEnum(CODIGO,NOME,CODIGO_RH) */
        tipoBusca: "CODIGO" | "NOME" | "CODIGO_RH";
        /** http://services.soc.age.com/#xs:string(undefined) */
        codigoRh: string;
    }
    export interface IunidadeContratanteWsVo {
        /** http://services.soc.age.com/#xs:string(undefined) */
        bairro: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        bairroCobranca: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        cep: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        cepCobranca: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        cidade: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        cidadeCobranca: string;
        /** http://services.soc.age.com/#cnpjCei(CNPJ,CEI,CPF,CAEPF) */
        cnpj_cei: "CNPJ" | "CEI" | "CPF" | "CAEPF";
        /** http://services.soc.age.com/#xs:string(undefined) */
        codigo: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        codigoArquivo: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        codigoCnae: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        codigoCnpjCei: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        codigoMunicipio: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        codigoMunicipioCobranca: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        codigoRh: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        complemento: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        complementoCobranca: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        dataAssinaturaContrato: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        descricaoCnae: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        endereco: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        enderecoCobranca: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        estado: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        estadoCobranca: string;
        /** http://services.soc.age.com/#xs:int(undefined) */
        grauRisco: number;
        /** http://services.soc.age.com/#xs:string(undefined) */
        inscricaoEstadual: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        inscricaoMunicipal: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        nome: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        numero: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        numeroCobranca: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        observacaoASO: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        observacaoContrato: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        observacaoPPP: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        percentualCalculoBrigada: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        razaoSocial: string;
        /** http://services.soc.age.com/#situacao(ATIVO,INATIVO) */
        status: "ATIVO" | "INATIVO";
        /** http://services.soc.age.com/#xs:string(undefined) */
        telefoneCat: string;
        /** http://services.soc.age.com/#tipoBuscaUnidadeEnum(CODIGO,CODIGO_RH,NOME) */
        tipoBusca: "CODIGO" | "CODIGO_RH" | "NOME";
        /** http://services.soc.age.com/#tipoCnae(CNAE,CNAE_2,CNAE_7,CNAE_LIVRE) */
        tipoCnae: "CNAE" | "CNAE_2" | "CNAE_7" | "CNAE_LIVRE";
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        unidadeContratante: boolean;
        /** http://services.soc.age.com/#xs:string(undefined) */
        codigoCpf: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        codigoCaepf: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        caracterizacaoProcessosAmbientesTrabalho: string;
    }
    export interface IunidadeWsVo {
        /** http://services.soc.age.com/#xs:string(undefined) */
        bairro: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        bairroCobranca: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        cep: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        cepCobranca: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        cidade: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        cidadeCobranca: string;
        /** http://services.soc.age.com/#cnpjCei(CNPJ,CEI,CPF,CAEPF) */
        cnpj_cei: "CNPJ" | "CEI" | "CPF" | "CAEPF";
        /** http://services.soc.age.com/#xs:string(undefined) */
        codigo: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        codigoArquivo: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        codigoCnae: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        codigoCnpjCei: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        codigoMunicipio: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        codigoMunicipioCobranca: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        codigoRh: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        complemento: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        complementoCobranca: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        dataAssinaturaContrato: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        descricaoCnae: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        endereco: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        enderecoCobranca: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        estado: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        estadoCobranca: string;
        /** http://services.soc.age.com/#xs:int(undefined) */
        grauRisco: number;
        /** http://services.soc.age.com/#xs:string(undefined) */
        inscricaoEstadual: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        inscricaoMunicipal: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        nome: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        numero: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        numeroCobranca: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        observacaoASO: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        observacaoContrato: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        observacaoPPP: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        percentualCalculoBrigada: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        razaoSocial: string;
        /** http://services.soc.age.com/#situacao(ATIVO,INATIVO) */
        status: "ATIVO" | "INATIVO";
        /** http://services.soc.age.com/#xs:string(undefined) */
        telefoneCat: string;
        /** http://services.soc.age.com/#tipoBuscaUnidadeEnum(CODIGO,CODIGO_RH,NOME) */
        tipoBusca: "CODIGO" | "CODIGO_RH" | "NOME";
        /** http://services.soc.age.com/#tipoCnae(CNAE,CNAE_2,CNAE_7,CNAE_LIVRE) */
        tipoCnae: "CNAE" | "CNAE_2" | "CNAE_7" | "CNAE_LIVRE";
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        unidadeContratante: boolean;
        /** http://services.soc.age.com/#xs:string(undefined) */
        codigoCpf: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        codigoCaepf: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        caracterizacaoProcessosAmbientesTrabalho: string;
    }
    export interface ItipoFichaCopia {
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        acidente: boolean;
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        admissional: boolean;
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        avaliacaoFisica: boolean;
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        checkup: boolean;
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        consulta: boolean;
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        consultaAssist: boolean;
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        demissional: boolean;
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        enfermagem: boolean;
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        especial: boolean;
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        licencaMedica: boolean;
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        mudancaFuncao: boolean;
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        periodico: boolean;
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        qualidadeVida: boolean;
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        retornoConsulta: boolean;
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        retornoTrabalho: boolean;
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        terceiros: boolean;
    }
    export interface Itransferencia {
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        copiaFichaClinica: boolean;
        tipoFichaCopia: FuncionarioModelo2WsPortTypes.ItipoFichaCopia;
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        copiaSocGed: boolean;
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        valorizarExamesNaoCobradoNoDestino: boolean;
        /** http://services.soc.age.com/#xs:string(undefined) */
        dataTransferencia: string;
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        copiaHistoricoLaboral: boolean;
    }
    export interface IFuncionario {
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        atualizarCargo: boolean;
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        atualizarCentroCusto: boolean;
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        atualizarFuncionario: boolean;
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        atualizarMotivoLicenca: boolean;
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        atualizarSetor: boolean;
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        atualizarTurno: boolean;
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        atualizarUnidade: boolean;
        cargoWsVo: FuncionarioModelo2WsPortTypes.IcargoWsVo;
        centroCustoWsVo: FuncionarioModelo2WsPortTypes.IcentroCustoWsVo;
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        criarCargo: boolean;
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        criarCentroCusto: boolean;
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        criarFuncionario: boolean;
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        criarHistorico: boolean;
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        criarMotivoLicenca: boolean;
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        criarSetor: boolean;
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        criarTurno: boolean;
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        criarUnidade: boolean;
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        criarUnidadeContratante: boolean;
        deficienciaWsVo: FuncionarioModelo2WsPortTypes.IdeficienciaWsVo;
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        destravarFuncionarioBloqueado: boolean;
        funcionarioWsVo: FuncionarioModelo2WsPortTypes.IfuncionarioWsVo;
        identificacaoWsVo: FuncionarioModelo2WsPortTypes.IidentificacaoWsVo;
        motivoLicencaWsVo: FuncionarioModelo2WsPortTypes.ImotivoLicencaWsVo;
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        naoImportarFuncionarioSemHierarquia: boolean;
        setorWsVo: FuncionarioModelo2WsPortTypes.IsetorWsVo;
        turnoWsVo: FuncionarioModelo2WsPortTypes.IturnoWsVo;
        unidadeContratanteWsVo: FuncionarioModelo2WsPortTypes.IunidadeContratanteWsVo;
        unidadeWsVo: FuncionarioModelo2WsPortTypes.IunidadeWsVo;
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        transferirFuncionario: boolean;
        transferencia: FuncionarioModelo2WsPortTypes.Itransferencia;
    }
    export interface ImensagemOperacaoDetalheList {
        /** http://services.soc.age.com/#xs:string(undefined) */
        codigo: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        mensagem: string;
    }
    export interface IinformacaoGeral {
        /** http://services.soc.age.com/#xs:string(undefined) */
        codigoMensagem: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        mensagem: string;
        mensagemOperacaoDetalheList: FuncionarioModelo2WsPortTypes.ImensagemOperacaoDetalheList[];
        /** http://services.soc.age.com/#xs:int(undefined) */
        numeroErros: number;
    }
    export interface IFuncionarioRetorno {
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        atualizouCargo: boolean;
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        atualizouCentroCusto: boolean;
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        atualizouFuncionario: boolean;
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        atualizouRegistro: boolean;
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        atualizouSetor: boolean;
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        atualizouUnidade: boolean;
        /** http://services.soc.age.com/#xs:string(undefined) */
        codigoEmpresa: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        codigoFuncionario: string;
        /** http://services.soc.age.com/#xs:string(undefined) */
        descricaoErro: string;
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        encontrouCargo: boolean;
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        encontrouCentroCusto: boolean;
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        encontrouErro: boolean;
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        encontrouFuncionario: boolean;
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        encontrouRegistro: boolean;
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        encontrouSetor: boolean;
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        encontrouUnidade: boolean;
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        incluiuCargo: boolean;
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        incluiuCentroCusto: boolean;
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        incluiuFuncionario: boolean;
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        incluiuRegistro: boolean;
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        incluiuSetor: boolean;
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        incluiuUnidade: boolean;
        /** http://services.soc.age.com/#xs:string(undefined) */
        observacao: string;
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        atualizouMotivoLicenca: boolean;
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        atualizouTurno: boolean;
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        encontrouUnidadeContratante: boolean;
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        encontrouMotivoLicenca: boolean;
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        encontrouTurno: boolean;
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        incluiuUnidadeContratante: boolean;
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        incluiuMotivoLicenca: boolean;
        /** http://services.soc.age.com/#xs:boolean(undefined) */
        incluiuTurno: boolean;
        informacaoGeral: FuncionarioModelo2WsPortTypes.IinformacaoGeral;
    }
}
