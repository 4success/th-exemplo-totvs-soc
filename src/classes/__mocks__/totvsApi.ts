import * as fs from 'fs';
import { XMLParser } from 'fast-xml-parser';
import {
  FopFuncDataReadRecordResponse,
  FopFuncDataReadViewResponse,
  FopSecaoDataReadViewResponse,
  GlbColigadaDataReadViewResponse,
} from '../../data';

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
    const xmlMockedResponse = fs.readFileSync(`${__dirname}/../../../__tests__/data/buscaDetalheFuncionarioResponse.xml`).toString();
    const xml = parser.parse(xmlMockedResponse);

    return xml as FopFuncDataReadRecordResponse.RootObject;
  }

  /**
   * Método que busca todos os funcionários ativos em uma coligada, com modificação a partir de uma determinada data
   */
  async buscaFuncionariosAtivos(codColigada: number, dataModificacao: string) {
    const xmlMockedResponse = fs.readFileSync(`${__dirname}/../../../__tests__/data/buscaFuncionariosAtivos.xml`).toString();
    const xml = parser.parse(xmlMockedResponse) as FopFuncDataReadViewResponse.RootObject;

    // @ts-ignore
    if (xml.NewDataSet === '') {
      return [];
    }
    if (!Array.isArray(xml.NewDataSet.PFunc)) {
      xml.NewDataSet.PFunc = [xml.NewDataSet.PFunc];
    }
    return xml.NewDataSet.PFunc;
  }

  /**
   * Método que determina quais serão as coligadas participantes da integração
   */
  async buscaUnidades() {
    const xmlMockedResponse = fs.readFileSync(`${__dirname}/../../../__tests__/data/buscaUnidades.xml`).toString();
    const xml = parser.parse(xmlMockedResponse) as GlbColigadaDataReadViewResponse.RootObject;

    const dadosUnidade = xml.NewDataSet.GColigada;
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
    const xmlMockedResponse = fs.readFileSync(`${__dirname}/../../../__tests__/data/buscaSetores.xml`).toString();
    const xml = parser.parse(xmlMockedResponse) as FopSecaoDataReadViewResponse.RootObject;
    if (!Array.isArray(xml.NewDataSet.PSecao)) {
      xml.NewDataSet.PSecao = [xml.NewDataSet.PSecao];
    }
    return xml.NewDataSet.PSecao;
  }

  /**
   * Método que busca todos os cargos de uma determinada coligada
   */
  async buscaCargos(codColigada: number) {
    const xmlMockedResponse = fs.readFileSync(`${__dirname}/../../../__tests__/data/buscaCargos.xml`).toString();
    const xml = parser.parse(xmlMockedResponse);
    if (!Array.isArray(xml.NewDataSet.PFuncao)) {
      xml.NewDataSet.PFuncao = [xml.NewDataSet.PFuncao];
    }
    return xml.NewDataSet.PFuncao;
  }
}