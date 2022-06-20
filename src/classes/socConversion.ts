import { CorSoc, EstadoCivilSoc, SituacaoSoc, TipoContratacaoSoc } from '../data';
import { DateTime } from 'luxon';
import { FuncionarioModelo2WsPortTypes } from '../wsdl/FuncionarioModelo2WsService/FuncionarioModelo2WsPort';

export default class SocConversion {

  public static convertSituacao(SITUACAO: any): SituacaoSoc {
    switch (SITUACAO) {
      case 'A':
        return 'ATIVO';
      case 'F':
        return 'FERIAS';
      case 'I':
        return 'INATIVO';
      default:
        return 'PENDENTE';
    }
  }

  public static convertEstadoCivil(ESTADO_CIVIL: any): EstadoCivilSoc {
    switch (ESTADO_CIVIL) {
      case 'C':
        return 'CASADO';
      case 'S':
        return 'SOLTEIRO';
      case 'U':
        return 'UNIAO_ESTAVEL';
      default:
        return 'OUTROS';
    }
  }

  public static escreveDataNoFormatoSoc(date: string) {
    if (date) {
      return DateTime.fromISO(date).toFormat('dd/LL/yyyy');
    }
    return null;
  }

  public static somenteNumeros(str: string): string {
    if (str) {
      return str.replace(/\D/g, '');
    }
    return str;
  }

  public static convertTipoContratacao(tipoContratacao: string): TipoContratacaoSoc {
    switch (tipoContratacao) {
      case 'N':
        return 'CLT';
      case 'A':
        return 'AUTONOMO';
      case 'Z':
        return 'MENOR_APRENDIZ';
      case 'T':
        return 'ESTAGIARIO';
      case 'E':
        return 'ESTATUTARIO';
      case 'P':
        return 'TEMPORARIO';
      default:
        return 'CLT';
    }
  }

  public static convertCor(cor: number): CorSoc {
    switch (cor) {
      case 1:
        return 'BRANCO';
      case 2:
        return 'NEGRO';
      case 3:
        return 'AMARELO';
      case 4:
        return 'PARDO';
      case 5:
        return 'INDIGENA';
      case 6:
        return 'MULATO';
      default:
        return 'EM_BRANCO';
    }
  }

  public static formataMensagemDeRetorno(socReturn: FuncionarioModelo2WsPortTypes.IFuncionarioRetorno) {
    let messageReturn = '';
    if (socReturn.atualizouFuncionario) {
      messageReturn += 'Funcionário atualizado com sucesso! ';
    } else {
      if (socReturn.incluiuFuncionario) {
        messageReturn += 'Funcionário criado com sucesso! ';
      }
    }

    if (socReturn.atualizouCargo) {
      messageReturn += 'Cargo atualizado! ';
    }

    if (socReturn.atualizouCentroCusto) {
      messageReturn += 'C.Custo atualizado! ';
    }

    if (socReturn.atualizouSetor) {
      messageReturn += 'Setor atualizado! ';
    }

    if (socReturn.atualizouUnidade) {
      messageReturn += 'Unidade atualizada! ';
    }

    if (socReturn.incluiuCargo) {
      messageReturn += 'Cargo criado! ';
    }

    if (socReturn.incluiuCentroCusto) {
      messageReturn += 'C.Custo criado! ';
    }

    if (socReturn.incluiuSetor) {
      messageReturn += 'Setor criado! ';
    }

    if (socReturn.incluiuUnidade) {
      messageReturn += 'Unidade criada! ';
    }

    return messageReturn;
  }

}