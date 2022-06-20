import SocConversion from '../../../src/classes/socConversion';
import { FuncionarioModelo2WsPortTypes } from '../../../src/wsdl/FuncionarioModelo2WsService/FuncionarioModelo2WsPort';

describe('test conversion methods', () => {

  test('convertSituacao', () => {
    expect(SocConversion.convertSituacao('A')).toBe('ATIVO');
    expect(SocConversion.convertSituacao('F')).toBe('FERIAS');
    expect(SocConversion.convertSituacao('I')).toBe('INATIVO');
    expect(SocConversion.convertSituacao('I')).toBe('INATIVO');
    expect(SocConversion.convertSituacao('any other string')).toBe('PENDENTE');
  });

  test('convertEstadoCivil', () => {
    expect(SocConversion.convertEstadoCivil('C')).toBe('CASADO');
    expect(SocConversion.convertEstadoCivil('S')).toBe('SOLTEIRO');
    expect(SocConversion.convertEstadoCivil('U')).toBe('UNIAO_ESTAVEL');
    expect(SocConversion.convertEstadoCivil('any other string')).toBe('OUTROS');
  });

  test('convertTipoContratacao', () => {
    expect(SocConversion.convertTipoContratacao('N')).toBe('CLT');
    expect(SocConversion.convertTipoContratacao('A')).toBe('AUTONOMO');
    expect(SocConversion.convertTipoContratacao('Z')).toBe('MENOR_APRENDIZ');
    expect(SocConversion.convertTipoContratacao('T')).toBe('ESTAGIARIO');
    expect(SocConversion.convertTipoContratacao('E')).toBe('ESTATUTARIO');
    expect(SocConversion.convertTipoContratacao('P')).toBe('TEMPORARIO');
    expect(SocConversion.convertTipoContratacao('any other string')).toBe('CLT');
  });

  test('convertCor', () => {
    expect(SocConversion.convertCor(1)).toBe('BRANCO');
    expect(SocConversion.convertCor(2)).toBe('NEGRO');
    expect(SocConversion.convertCor(3)).toBe('AMARELO');
    expect(SocConversion.convertCor(4)).toBe('PARDO');
    expect(SocConversion.convertCor(5)).toBe('INDIGENA');
    expect(SocConversion.convertCor(6)).toBe('MULATO');
    expect(SocConversion.convertCor(6 + Math.random() * 10)).toBe('EM_BRANCO');
  });

  test('escreveDataNoFormatoSoc', () => {
    expect(SocConversion.escreveDataNoFormatoSoc('2022-01-01')).toBe('01/01/2022');
    expect(SocConversion.escreveDataNoFormatoSoc('2022-01-20')).toBe('20/01/2022');
    expect(SocConversion.escreveDataNoFormatoSoc(null)).toBeNull();
    expect(SocConversion.escreveDataNoFormatoSoc(undefined)).toBeNull();
  });

  test('somenteNumeros', () => {
    expect(SocConversion.somenteNumeros('2022-01-01')).toBe('20220101');
    expect(SocConversion.somenteNumeros('something102asdfkj1948948')).toBe('1021948948');
  });

  test('formataMensagemDeRetorno', () => {
    const baseParams: FuncionarioModelo2WsPortTypes.IFuncionarioRetorno = {
      atualizouCargo: false,
      atualizouCentroCusto: false,
      atualizouFuncionario: false,
      atualizouMotivoLicenca: false,
      atualizouRegistro: false,
      atualizouSetor: false,
      atualizouTurno: false,
      atualizouUnidade: false,
      codigoEmpresa: '',
      codigoFuncionario: '',
      descricaoErro: '',
      encontrouCargo: false,
      encontrouCentroCusto: false,
      encontrouErro: false,
      encontrouFuncionario: false,
      encontrouMotivoLicenca: false,
      encontrouRegistro: false,
      encontrouSetor: false,
      encontrouTurno: false,
      encontrouUnidade: false,
      encontrouUnidadeContratante: false,
      incluiuCargo: false,
      incluiuCentroCusto: false,
      incluiuFuncionario: false,
      incluiuMotivoLicenca: false,
      incluiuRegistro: false,
      incluiuSetor: false,
      incluiuTurno: false,
      incluiuUnidade: false,
      incluiuUnidadeContratante: false,
      informacaoGeral: undefined,
      observacao: ''
    };

    expect(SocConversion.formataMensagemDeRetorno({
      ...baseParams,
      atualizouFuncionario: true
    })).toBe('Funcionário atualizado com sucesso! ');

    expect(SocConversion.formataMensagemDeRetorno({
      ...baseParams,
      incluiuFuncionario: true
    })).toBe('Funcionário criado com sucesso! ');

    expect(SocConversion.formataMensagemDeRetorno({
      ...baseParams,
      atualizouFuncionario: true,
      atualizouCargo: true,
      atualizouCentroCusto: true,
      atualizouSetor: true,
      atualizouUnidade: true,
      incluiuCargo: true,
      incluiuCentroCusto: true,
      incluiuSetor: true,
      incluiuUnidade: true,
    })).toBe('Funcionário atualizado com sucesso! Cargo atualizado! C.Custo atualizado! Setor atualizado! Unidade atualizada! Cargo criado! C.Custo criado! Setor criado! Unidade criada! ');

  });

});