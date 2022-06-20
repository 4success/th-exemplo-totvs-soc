type EstadosBrasileirosSoc = 'AC'
    | 'AL'
    | 'AM'
    | 'AP'
    | 'BA'
    | 'CE'
    | 'DF'
    | 'ES'
    | 'GO'
    | 'MA'
    | 'MG'
    | 'MS'
    | 'MT'
    | 'PA'
    | 'PB'
    | 'PE'
    | 'PI'
    | 'PR'
    | 'RJ'
    | 'RN'
    | 'RO'
    | 'RR'
    | 'RS'
    | 'SC'
    | 'SE'
    | 'SP'
    | 'TO';

type SituacaoSoc = 'ATIVO' | 'AFASTADO' | 'PENDENTE' | 'FERIAS' | 'INATIVO';
type EstadoCivilSoc =
    'SOLTEIRO'
    | 'CASADO'
    | 'SEPARADO'
    | 'DIVORCIADO'
    | 'VIUVO'
    | 'OUTROS'
    | 'DESQUITADO'
    | 'UNIAO_ESTAVEL';
type CorSoc = 'EM_BRANCO' | 'BRANCO' | 'NEGRO' | 'AMARELO' | 'PARDO' | 'INDIGENA' | 'MULATO';

type TiposCnaeSoc = 'CNAE' | 'CNAE_2' | 'CNAE_7' | 'CNAE_LIVRE';

type EscolaridadeSoc = 'EM_BRANCO'
    | 'ENSINO_FUNDAMENTAL_INCOMPLETO'
    | 'ENSINO_FUNDAMENTAL_COMPLETO'
    | 'ENSINO_MEDIO_INCOMPLETO'
    | 'ENSINO_MEDIO_COMPLETO'
    | 'ENSINO_SUPERIOR_INCOMPLETO'
    | 'ENSINO_SUPERIOR_COMPLETO'
    | 'PROFISSIONALIZANTE'
    | 'TECNICO_INCOMPLETO'
    | 'TECNICO_COMPLETO'
    | 'TECNOLOGO_INCOMPLETO'
    | 'TECNOLOGO_COMPLETO'
    | 'POS_GRADUACAO_INCOMPLETA'
    | 'POS_GRADUACAO_COMPLETA'
    | 'MESTRADO_INCOMPLETO'
    | 'MESTRADO_COMPLETO'
    | 'DOUTORADO_INCOMPLETO'
    | 'DOUTORADO_COMPLETO'
    | 'PHD_INCOMPLETO'
    | 'PHD_COMPLETO'
    | 'NAO_INFORMADO'
    | 'ANALFABETO';

type TipoContratacaoSoc = 'CLT'
    | 'COOPERADO'
    | 'TERCERIZADO'
    | 'AUTONOMO'
    | 'TEMPORARIO'
    | 'PESSOA_JURIDICA'
    | 'ESTAGIARIO'
    | 'MENOR_APRENDIZ'
    | 'ESTATUTARIO'
    | 'COMISSIONADO_INTERNO'
    | 'COMISSIONADO_EXTERNO'
    | 'APOSENTADO'
    | 'APOSENTADO_INATIVO_PREFEITURA'
    | 'PENSIONISTA'
    | 'SERVIDOR_PUBLICO_EFETIVO'
    | 'EXTRANUMERARIO'
    | 'AUTARQUICO'
    | 'INATIVO'
    | 'TITULO_PRECARIO'
    | 'SERVIDOR_ADM_CENTRALIZADA_OU_DESCENTRALIZADA';

export interface FuncionarioTotvs {
  CODCOLIGADA: string
  CHAPA: string
  NROFICHAREG: string
  CODRECEBIMENTO: string
  CODSITUACAO: string
  CODTIPO: string
  CODSECAO: string
  CODFUNCAO: string
  CODSINDICATO: string
  CODHORARIO: string
  NRODEPIRRF: string
  NRODEPSALFAM: string
  DTBASE: string
  SALARIO: string
  SITUACAOFGTS: string
  DTOPCAOFGTS: string
  CONTRIBSINDICAL: string
  TEMMAIS65ANOS: string
  DATAADMISSAO: string
  TIPOADMISSAO: string
  MOTIVOADMISSAO: string
  TEMPRAZOCONTR: string
  FIMPRAZOCONTR: string
  DTVENCFERIAS: string
  SALDOFERIAS: string
  SITUACAORAIS: string
  CONTAPAGAMENTO: string
  VINCULORAIS: string
  MUDOUENDERECO: string
  MUDOUCARTTRAB: string
  ANTIGACARTTRAB: string
  ANTIGASERIECART: string
  MUDOUNOME: string
  MUDOUPIS: string
  MUDOUCHAPA: string
  MUDOUADMISSAO: string
  MUDOUDTOPCAO: string
  MUDOUSECAO: string
  MUDOUDTNASCIM: string
  PISPARAFGTS: string
  ULTIMORECALCULODATA: string
  ULTIMORECALCULOHORA: string
  CODFILIAL: string
  NOME: string
  INDINICIOHOR: string
  PISPASEP: string
  CODPESSOA: string
  CODBANCOPAGTO: string
  CODAGENCIAPAGTO: string
  RESCISAOCALCULADA: string
  MEMBROCIPA: string
  USASALCOMPOSTO: string
  REGATUAL: string
  JORNADAMENSAL: string
  CODOCORRENCIA: string
  CODCATEGORIA: string
  ESUPERVISOR: string
  USACONTROLEDESALDO: string
  MUDOUCI: string
  SITUACAOINSS: string
  TEMDEDUCAOCPMF: string
  SEXO: string
  NACIONALIDADE: string
  GRAUINSTRUCAO: string
  NATURALIDADE: string
  APELIDO: string
  DTNASCIMENTO: string
  CARTIDENTIDADE: string
  ORGEMISSORIDENT: string
  DTEMISSAOIDENT: string
  UFCARTIDENT: string
  CARTEIRATRAB: string
  SERIECARTTRAB: string
  NIT: string
  TITULOELEITOR: string
  SECAOTITELEITOR: string
  ZONATITELEITOR: string
  CERTIFRESERV: string
  CPF: string
  RUA: string
  NUMERO: string
  BAIRRO: string
  CIDADE: string
  ESTADO: string
  PAIS: string
  CEP: string
  TELEFONE1: string
  NOMEBANCOPGTO: string
  NOMEAGENCIAPGTO: string
  NOMEPAI: string
  NOMEMAE: string
  CODIGO: string
  Jornada_Mensal: string
  Hora: string
  DEFICIENTEFISICO: string
  DEFICIENTEAUDITIVO: string
  DEFICIENTEFALA: string
  DEFICIENTEVISUAL: string
  DEFICIENTEMENTAL: string
  BRPDH: string
  HSTAFT_ESTTEMPOSERVICO: string
  NOMEFUNC: string
  CORRACA: string
  ESTADOCIVIL: string
  ESTADONATAL: string
  CANDIDATO: string
  CODCOLIGADAORIGEM: string
  CHAPAORIGEM: string
  NUMEROCARTAOSUS: string
  CODTIPOBAIRRO: string
  CODTIPORUA: string
  TPCONTABANCARIA: string
  TPREGIMEPREV: string
  INDADMISSAO: string
  NUMERORIC: string
  ORGEMISSORRIC: string
  DTEMISSAORIC: string
  DEFICIENTEINTELECTUAL: string
  CODMUNICIPIO: string
  SITUACAOIRRF: string
  NROFILHOSBRASIL: string
  CARREGOUAVISOPREVIO: string
  MATRICULAESOCIAL: string
  TIPOREGIMEJORNADA: string
  IDADE: string
  TEMPOPARCIAL: string
  CODCATEGORIAESOCIAL: string
  ESOCIALFUNCAOCONF: string
  TIPOCONTRATOPRAZO: string
  ESOCIALNATATIVIDADE: string
  REFERENCIA_MENSAL: string
  ENVIORESCISAOCONSIGNADO: string
  DTTITELEITOR: string
  FIADOR_SGI: string
  CONJUGE_SGI: string
  Periodo_Aquisitivo: string
  Limite_Ferias_Dobro: string
  DiasFaltasFeriasNormais: string
  CONJUGEBRASIL: string
  NATURALIZADO: string
  FILHOSBRASIL: string
  INVESTTREINANT: string
  DATAAPROVACAOCURR: string
  ESTELEIT: string
  ESTADOROW: string
  ROWVALIDA: string
  ALUNO: string
  PROFESSOR: string
  USUARIOBIBLIOS: string
  FUNCIONARIO: string
  EXFUNCIONARIO: string
  CODNATURALIDADE: string
  FALECIDO: string
  TIPOPRAZORESIDENCIA: string
}

export interface FuncionarioExportaDadosSoc {
  CODIGOEMPRESA: string;
  NOMEEMPRESA: string;
  CODIGO: string;
  NOME: string;
  CODIGOUNIDADE: string;
  NOMEUNIDADE: string;
  CODIGOSETOR: string;
  NOMESETOR: string;
  CODIGOCARGO: string;
  NOMECARGO: string;
  CBOCARGO: string;
  CCUSTO: string;
  NOMECENTROCUSTO: string;
  MATRICULAFUNCIONARIO: string;
  CPF: string;
  RG: string;
  UFRG: string;
  ORGAOEMISSORRG: string;
  SITUACAO: string;
  SEXO: string;
  PIS: string;
  CTPS: string;
  SERIECTPS: string;
  ESTADOCIVIL: string;
  TIPOCONTATACAO: string;
  DATA_NASCIMENTO: string;
  DATA_ADMISSAO: string;
  DATA_DEMISSAO: string;
  ENDERECO: string;
  NUMERO_ENDERECO: string;
  BAIRRO: string;
  CIDADE: string;
  UF: string;
  CEP: string;
  TELEFONERESIDENCIAL: string;
  TELEFONECELULAR: string;
  EMAIL: string;
  DEFICIENTE: string;
  DEFICIENCIA: string;
  NM_MAE_FUNCIONARIO: string;
  DATAULTALTERACAO: string;
  MATRICULARH: string;
  COR: string;
  ESCOLARIDADE: string;
  NATURALIDADE: string;
  RAMAL: string;
  REGIMEREVEZAMENTO: string;
  REGIMETRABALHO: string;
  TELCOMERCIAL: string;
  TURNOTRABALHO: string;
  RHUNIDADE: string;
  RHSETOR: string;
  RHCARGO: string;
  RHCENTROCUSTOUNIDADE: string;
}

export interface FuncionarioSoc {
  codigoSocEmpresa?: string;
  codigoRhEmpresa?: string;
  nomeEmpresa?: string;
  codigoSocUnidade?: string;
  codigoRhUnidade?: string;
  nomeUnidade?: string;
  codigoSocSetor?: string;
  codigoRhSetor?: string;
  nomeSetor?: string;
  codigoSocCargo?: string;
  codigoRhCargo?: string;
  nomeCargo?: string;
  descricaoDetalhadaCargo?: string;
  cbo?: string;
  codigoSocCentroCusto?: string;
  codigoRhCentroCusto?: string;
  nomeCentroCusto?: string;
  nomeTurno?: string;
  regimeRevezamento?: string;
  regimeTrabalho?: 'NORMAL' | 'TURNO';
  funcao?: string;
  ultimaMovimentacao?: string;
  situacao?: 'ATIVO' | 'AFASTADO' | 'PENDENTE' | 'FERIAS' | 'INATIVO';
  escolaridade?: EscolaridadeSoc;
  codigoSocFuncionario?: string;
  nomeFuncionario?: string;
  cpf?: string;
  matricula?: string;
  matriculaRH?: string;
  dtNascimento?: string;
  sexo?: 'MASCULINO' | 'FEMININO';
  cor?: 'EM_BRANCO' | 'BRANCO' | 'NEGRO' | 'AMARELO' | 'PARDO' | 'INDIGENA' | 'MULATO';
  nomedaMae?: string;
  nomedoPai?: string;
  email?: string;
  dtAdmissao?: string;
  dtDemissao?: string;
  estadoCivil?: 'SOLTEIRO' | 'CASADO' | 'SEPARADO' | 'DIVORCIADO' | 'VIUVO' | 'OUTROS' | 'DESQUITADO' | 'UNIAO_ESTAVEL';
  tipoContratacao?: TipoContratacaoSoc;
  salarioFuncionario?: number;
  pis?: string;
  rg?: string;
  dtEmissaoRg?: string;
  ufRG?: EstadosBrasileirosSoc;
  rgOrgaoEmissor?: string;
  nrCtps?: string;
  dataEmissaoCtps?: string;
  serieCtps?: string;
  ufCtps?: EstadosBrasileirosSoc;
  enderecoFuncionario?: string;
  numeroEndereco?: string;
  complemento?: string;
  bairroFuncionario?: string;
  cidadeFuncionario?: string;
  estadoFuncionario?: EstadosBrasileirosSoc;
  cepFuncionario?: string;
  telefoneResidencial?: string;
  telefoneCelular?: string;
  telefoneComercial?: string;
  ramal?: string;
  telefoneSMS?: string;
  nacionalidade?: string;
  naturalidade?: string;
  paisNascimento?: string;
  deficiente?: boolean;
  deficiencia?: string;
  gfip?: string;
  razaoSocialEmpresaFuncionario?: string;
  cnpjEmpresaFuncionario?: string;
  razaoSocialUnidade?: string;
  codigoRhUnidadeContratante?: string;
  enderecoUnidade?: string;
  numeroEnderecoUnidade?: string;
  complementoEnderecoUnidade?: string;
  bairroUnidade?: string;
  cidadeUnidade?: string;
  estadoUnidade?: EstadosBrasileirosSoc;
  cepUnidade?: string;
  cnpjUnidade?: string;
  inscricaoUnidade?: string;
  telefoneUnidade1?: string;
  telefoneUnidade2?: string;
  telefoneUnidade3?: string;
  telefoneUnidade4?: string;
  contatoUnidade?: string;
  cnaeUtilizado?: 'CNAE' | 'CNAE_2' | 'CNAE_7' | 'CNAE_LIVRE';
  cnae?: string;
  cnae2?: string;
  cnae7?: string;
  cnaeLivre?: string;
  descricaoCnaeLivre?: string;
  cei?: string;
  grauRisco?: string;
  autorizaMensagemSms?: boolean;
  enderecoUnidadeCobranca?: string;
  numeroEnderecoUnidadeCobranca?: string;
  bairroUnidadeCobranca?: string;
  cidadeUnidadeCobranca?: string;
  estadoUnidadeCobranca?: EstadosBrasileirosSoc;
  cepUnidadeCobranca?: string;
  complementoEnderecoUnidadeCobranca?: string;
  categoriaEsocial?: string;
}

export namespace GlbColigadaDataReadViewResponse{

  export interface GColigada {
    CODCOLIGADA: number;
    NOMEFANTASIA: string;
    CGC: string;
    EMAIL: string;
    INTEGRADOFLUIG: number;
    NOME: string;
    TELEFONE: string;
    FAX: string;
    RUA: string;
    NUMERO?: number;
    BAIRRO: string;
    CIDADE: string;
    ESTADO: string;
    PAIS: string;
    CEP: any;
    COMPLEMENTO: string;
  }

  export interface X0024IMAGES {
    GROUP: string;
    ID: number;
    IMAGE: string;
    HINT: string;
    INDEX: number;
  }

  export interface NewDataSet {
    GColigada: GColigada[];
    _x0024_IMAGES: X0024IMAGES[];
  }

  export interface RootObject {
    NewDataSet: NewDataSet;
  }

}



export namespace FopSecaoDataReadViewResponse {

  export interface PSecao {
    CODCOLIGADA: number;
    CODIGO: any;
    DESCRICAO: string;
    RUA: string;
    NUMERO: number;
    ESTADO: string;
    CIDADE: string;
    PAIS: string;
    TELEFONE: number;
    DDD: number;
    CONTAPR: number;
    CONTENTEDAPR: number;
    CONTPCD?: number;
  }

  export interface NewDataSet {
    PSecao: PSecao[];
  }

  export interface RootObject {
    NewDataSet: NewDataSet;
  }

}



export namespace FopFuncaoDataReadViewResponse {

  export interface PFuncao {
    CODCOLIGADA: number;
    CODIGO: number;
    NOME: string;
    CBO: number;
    DESCRICAO: string;
    CBO2002: number;
    ESOCIALFUNCAOCONF?: number;
  }

  export interface NewDataSet {
    PFuncao: PFuncao[];
  }

  export interface RootObject {
    NewDataSet: NewDataSet;
  }
}


export namespace FopFuncDataReadViewResponse {

  export interface PFunc {
    CODCOLIGADA: number;
    CODPESSOA: number;
    CHAPA: number;
    MATRICULAESOCIAL: string;
    CODRECEBIMENTO: string;
    CODSITUACAO: string;
    CODTIPO: string;
    CODSECAO: string;
    CODFUNCAO: number;
    SALARIO: number;
    DATAADMISSAO: Date;
    PISPASEP: any;
    HORA: number;
    NOME: string;
    IDADE: number;
    EMAIL: string;
    SEXO: string;
    NOME_FUNCAO: string;
    NOME_SECAO: string;
    CODCOLIGADAORIGEM: number;
    CHAPAORIGEM: number;
    CODHORARIO: number;
    RECCREATEDBY: string;
    RECCREATEDON: Date;
    RECMODIFIEDBY: string;
    RECMODIFIEDON: Date;
    CODFILIAL: number;
    APELIDO: string;
    CODIGORECEITA3533: number;
    CPF: any;
    TIPOADESAOBEM: number;
    DTACORDOBEM: Date;
    DURACAOBEM: number;
    PERCENTUALREDUCAOBEM: number;
    VALORREDUZIDOBEM: number;
    JORNADA_MENSAL: string;
    DESCRICAOHORARIO: string;
    DESCRICAOSITUACAO: string;
    DESCRICAOSECAO: string;
    NOMEFILIAL: string;
    DTNASCIMENTO: Date;
    DESCRICAOTIPORECEB: string;
    DESCRICAOTIPOFUNC: string;
    NOMECCUSTO: string;
    NOMEDEPARTAMENTO: string;
    CODCATEGORIAESOCIAL: number;
    UTILIZAPONTO: string;
    TEMPODECASA: number;
    TELEFONE1?: number;
    DIASPRORROGACAOBEM?: number;
  }

  export interface NewDataSet {
    PFunc: PFunc[];
  }

  export interface RootObject {
    NewDataSet: NewDataSet;
  }

}




export namespace FopFuncDataReadRecordResponse {

  export interface PFunc {
    CODCOLIGADA: number;
    CHAPA: number;
    NROFICHAREG: number;
    CODRECEBIMENTO: string;
    CODSITUACAO: string;
    CODTIPO: string;
    CODSECAO: string;
    CODFUNCAO: number;
    CODSINDICATO: number;
    CODHORARIO: number;
    NRODEPIRRF: number;
    DTBASE: string;
    SALARIO: number;
    SITUACAOFGTS: number;
    DTOPCAOFGTS: string;
    CONTRIBSINDICAL: string;
    TEMMAIS65ANOS: number;
    DATAADMISSAO: string;
    TIPOADMISSAO: string;
    MOTIVOADMISSAO: number;
    DTVENCFERIAS: string;
    QUER1APARC13O: number;
    FERIASCOLETIVAS: number;
    NRODIASABONO: number;
    SALDOFERIAS: number;
    NDIASLICREM1: number;
    NDIASLICREM2: number;
    SITUACAORAIS: number;
    CONTAPAGAMENTO: number;
    VINCULORAIS: number;
    MUDOUENDERECO: number;
    MUDOUCARTTRAB: number;
    MUDOUNOME: number;
    ANTIGONOME: string;
    MUDOUPIS: number;
    MUDOUCHAPA: number;
    MUDOUADMISSAO: number;
    MUDOUDTOPCAO: number;
    MUDOUSECAO: number;
    ANTIGASECAO: string;
    MUDOUDTNASCIM: number;
    PISPARAFGTS: number;
    ULTIMORECALCULODATA: string;
    ULTIMORECALCULOHORA: string;
    CODFILIAL: number;
    NOME: string;
    INDINICIOHOR: number;
    PISPASEP: number;
    CODPESSOA: number;
    CODBANCOPAGTO: number;
    CODAGENCIAPAGTO: number;
    RESCISAOCALCULADA: number;
    MEMBROCIPA: number;
    USASALCOMPOSTO: number;
    REGATUAL: number;
    JORNADAMENSAL: number;
    CODOCORRENCIA: number;
    CODCATEGORIA: number;
    ESUPERVISOR: number;
    USACONTROLEDESALDO: number;
    MUDOUCI: number;
    SITUACAOINSS: number;
    TEMDEDUCAOCPMF: number;
    SEXO: string;
    NACIONALIDADE: number;
    GRAUINSTRUCAO: number;
    NATURALIDADE: string;
    APELIDO: string;
    EMAIL: string;
    TELEFONE1?: string;
    DTNASCIMENTO: string;
    CARTIDENTIDADE?: string;
    ORGEMISSORIDENT: string;
    DTEMISSAOIDENT: string;
    UFCARTIDENT: string;
    CARTEIRATRAB?: number;
    DTCARTTRAB: string;
    SERIECARTTRAB?: number;
    UFCARTTRAB: string;
    TITULOELEITOR: number;
    SECAOTITELEITOR: number;
    ZONATITELEITOR: number;
    CPF: number;
    RUA: string;
    NUMERO: number;
    BAIRRO: string;
    CIDADE: string;
    ESTADO: string;
    PAIS: string;
    CEP: number;
    NOMEBANCOPGTO: string;
    NOMEAGENCIAPGTO: string;
    NOMEPAI: string;
    NOMEMAE: string;
    CODIGO: number;
    Jornada_Mensal: string;
    Hora: number;
    DEFICIENTEFISICO: number;
    DEFICIENTEAUDITIVO: number;
    DEFICIENTEFALA: number;
    DEFICIENTEVISUAL: number;
    DEFICIENTEMENTAL: number;
    BRPDH: number;
    HSTAFT_ESTTEMPOSERVICO: boolean;
    NOMEFUNC: string;
    CORRACA: number;
    CODUSUARIO: string;
    ESTADOCIVIL: string;
    ESTADONATAL: string;
    CANDIDATO: number;
    CODCOLIGADAORIGEM: number;
    CHAPAORIGEM: number;
    CODTIPOBAIRRO: number;
    CODTIPORUA: number;
    TPCONTABANCARIA: number;
    TPREGIMEPREV: number;
    INDADMISSAO: number;
    NUMERORIC: string;
    ORGEMISSORRIC: string;
    DTEMISSAORIC: string;
    DEFICIENTEINTELECTUAL: number;
    CODMUNICIPIO: number;
    SITUACAOIRRF: number;
    CODIGORECEITA3533: number;
    MATRICULAESOCIAL: string;
    TIPOREGIMEJORNADA: number;
    IDADE: number;
    TEMPOPARCIAL: number;
    CODCATEGORIAESOCIAL: number;
    ESOCIALNATATIVIDADE: number;
    REFERENCIA_MENSAL: string;
    TIPOADESAOBEM: number;
    DTACORDOBEM: string;
    PERCENTUALREDUCAOBEM: number;
    DURACAOBEM: number;
    VALORREDUZIDOBEM: number;
    ENVIORESCISAOCONSIGNADO: number;
    FERIASFINALIZADASPROXMES: number;
    TIPOREDUCAOAVISO: number;
    FORMAREDUCAOAVISO: number;
    DTTITELEITOR: string;
    FIADOR_SGI: number;
    CONJUGE_SGI: number;
    DEFICIENTEMOBREDUZIDA: number;
    Periodo_Aquisitivo: string;
    Limite_Ferias_Dobro: string;
    DiasFaltasFeriasNormais: number;
    CONJUGEBRASIL: number;
    NATURALIZADO: number;
    FILHOSBRASIL: number;
    INVESTTREINANT: number;
    DATAAPROVACAOCURR: string;
    ESTELEIT: string;
    ESTADOROW: number;
    ROWVALIDA: number;
    ALUNO: number;
    PROFESSOR: number;
    USUARIOBIBLIOS: number;
    FUNCIONARIO: number;
    EXFUNCIONARIO: number;
    CODNATURALIDADE: number;
    FALECIDO: number;
    TIPOPRAZORESIDENCIA: number;
  }

  export interface PFCOMPL {
    CODCOLIGADA: number;
    CHAPA: number;
    VALE: number;
    ASSISMED: number;
    PLANOASSISMED: number;
    ASSISTODONT: number;
    PLANOASSISODON: number;
    VALEREF: number;
    ASSISMED01: number;
    PLANOASSISMED01: number;
    ASSISTODONT01: number;
    PLANOASSISODON01: number;
  }

  export interface VPCOMPL {
    CODPESSOA: string;
  }

  export interface FopFunc {
    PFunc: PFunc;
    PFCOMPL: PFCOMPL;
    VPCOMPL: VPCOMPL;
  }

  export interface RootObject {
    FopFunc: FopFunc;
  }

}

