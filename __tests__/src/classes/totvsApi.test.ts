import {
  createClientAsync,
  ReadRecord,
  ReadRecordResponse,
  ReadViewResponse,
  WsDataServerClient,
} from '../../../src/soap/wsdataserver';
import { mocked } from 'ts-jest/utils';
import { ISecurity } from 'soap';
import * as fs from 'fs';
import TotvsApi from '../../../src/classes/totvsApi';
import { DateTime } from 'luxon';

jest.mock('../../../src/soap/wsdataserver');
const mockedcreateClientAsync = mocked(createClientAsync, true);


describe('test src/totvsApi class', () => {

  test('buscaDetalheFuncionario', async () => {
    const xmlMockedResponse = fs.readFileSync(`${__dirname}/../../data/buscaDetalheFuncionarioResponse.xml`).toString();

    const mocks = {
      setSecuritySpy: jest.fn((security: ISecurity) => {
      }),
      readRecordAsyncSpy: jest.fn(async (readRecord: ReadRecord): Promise<[ReadRecordResponse, string, any, string]> => {
        return [{ ReadRecordResult: xmlMockedResponse }, '', '', ''] as [ReadRecordResponse, string, any, string];
      }),
    };

    mockedcreateClientAsync.mockImplementation(async () => {
      return {
        setSecurity: (security: ISecurity) => {
          return mocks.setSecuritySpy(security);
        },
        ReadRecordAsync: async (readRecord: ReadRecord): Promise<[ReadRecordResponse, string, any, string]> => {
          return mocks.readRecordAsyncSpy(readRecord);
        },
      } as WsDataServerClient;
    });

    const totvsApi = new TotvsApi('https://somehost.totvs.com.br:123', 'user', 'password');
    const promiseResult = totvsApi.buscaDetalheFuncionario(1, '000082');
    await expect(promiseResult)
      .resolves
      .not
      .toThrow();

    await promiseResult.then(response => {
      expect(mocks.setSecuritySpy).toBeCalled();
      expect(mocks.readRecordAsyncSpy).toBeCalled();
      expect(response.FopFunc).toBeDefined();
      expect(response.FopFunc.PFunc.NOME).toBe('João da Silva');
    });
  });

  test('buscaFuncionariosAtivos com resultado', async () => {
    const xmlMockedResponse = fs.readFileSync(`${__dirname}/../../data/buscaFuncionariosAtivos.xml`).toString();

    const mocks = {
      setSecuritySpy: jest.fn((security: ISecurity) => {
      }),
      readViewAsyncSpy: jest.fn(async (readRecord: ReadRecord): Promise<[ReadViewResponse, string, any, string]> => {
        return [{ ReadViewResult: xmlMockedResponse }, '', '', ''] as [ReadViewResponse, string, any, string];
      }),
    };

    mockedcreateClientAsync.mockImplementation(async () => {
      return {
        setSecurity: (security: ISecurity) => {
          return mocks.setSecuritySpy(security);
        },
        ReadViewAsync: async (readRecord: ReadRecord): Promise<[ReadViewResponse, string, any, string]> => {
          return mocks.readViewAsyncSpy(readRecord);
        },
      } as WsDataServerClient;
    });

    const totvsApi = new TotvsApi('https://somehost.totvs.com.br:123', 'user', 'password');
    const promiseResult = totvsApi.buscaFuncionariosAtivos(1, DateTime.now().toISO());
    await expect(promiseResult)
      .resolves
      .not
      .toThrow();

    await promiseResult.then(response => {
      expect(mocks.setSecuritySpy).toBeCalled();
      expect(mocks.readViewAsyncSpy).toBeCalled();
      expect(Array.isArray(response)).toBeTruthy();
      expect(response.length).toBeGreaterThan(0);
    });
  });

  test('buscaFuncionariosAtivos sem resultado', async () => {
    const xmlMockedResponse = '<NewDataSet />';

    const mocks = {
      setSecuritySpy: jest.fn((security: ISecurity) => {
      }),
      readViewAsyncSpy: jest.fn(async (readRecord: ReadRecord): Promise<[ReadViewResponse, string, any, string]> => {
        return [{ ReadViewResult: xmlMockedResponse }, '', '', ''] as [ReadViewResponse, string, any, string];
      }),
    };

    mockedcreateClientAsync.mockImplementation(async () => {
      return {
        setSecurity: (security: ISecurity) => {
          return mocks.setSecuritySpy(security);
        },
        ReadViewAsync: async (readRecord: ReadRecord): Promise<[ReadViewResponse, string, any, string]> => {
          return mocks.readViewAsyncSpy(readRecord);
        },
      } as WsDataServerClient;
    });

    const totvsApi = new TotvsApi('https://somehost.totvs.com.br:123', 'user', 'password');
    const promiseResult = totvsApi.buscaFuncionariosAtivos(1, DateTime.now().toISO());
    await expect(promiseResult)
      .resolves
      .not
      .toThrow();

    await  promiseResult.then(response => {
      expect(mocks.setSecuritySpy).toBeCalled();
      expect(mocks.readViewAsyncSpy).toBeCalled();
      expect(Array.isArray(response)).toBeTruthy();
      expect(response.length).toBe(0);
    });
  });

  test('buscaUnidades', async () => {
    const xmlMockedResponse = fs.readFileSync(`${__dirname}/../../data/buscaUnidades.xml`).toString();

    const mocks = {
      setSecuritySpy: jest.fn((security: ISecurity) => {
      }),
      readViewAsyncSpy: jest.fn(async (readRecord: ReadRecord): Promise<[ReadViewResponse, string, any, string]> => {
        return [{ ReadViewResult: xmlMockedResponse }, '', '', ''] as [ReadViewResponse, string, any, string];
      }),
    };

    mockedcreateClientAsync.mockImplementation(async () => {
      return {
        setSecurity: (security: ISecurity) => {
          return mocks.setSecuritySpy(security);
        },
        ReadViewAsync: async (readRecord: ReadRecord): Promise<[ReadViewResponse, string, any, string]> => {
          return mocks.readViewAsyncSpy(readRecord);
        },
      } as WsDataServerClient;
    });

    const totvsApi = new TotvsApi('https://somehost.totvs.com.br:123', 'user', 'password');
    const promiseResult = totvsApi.buscaUnidades();
    await expect(promiseResult)
      .resolves
      .not
      .toThrow();

    await promiseResult.then(response => {
      expect(mocks.setSecuritySpy).toBeCalled();
      expect(mocks.readViewAsyncSpy).toBeCalled();
      expect(Array.isArray(response)).toBeTruthy();
      expect(response.length).toBe(1);
    });
  });

  test('buscaSetores', async () => {
    const xmlMockedResponse = fs.readFileSync(`${__dirname}/../../data/buscaSetores.xml`).toString();

    const mocks = {
      setSecuritySpy: jest.fn((security: ISecurity) => {
      }),
      readViewAsyncSpy: jest.fn(async (readRecord: ReadRecord): Promise<[ReadViewResponse, string, any, string]> => {
        return [{ ReadViewResult: xmlMockedResponse }, '', '', ''] as [ReadViewResponse, string, any, string];
      }),
    };

    mockedcreateClientAsync.mockImplementation(async () => {
      return {
        setSecurity: (security: ISecurity) => {
          return mocks.setSecuritySpy(security);
        },
        ReadViewAsync: async (readRecord: ReadRecord): Promise<[ReadViewResponse, string, any, string]> => {
          return mocks.readViewAsyncSpy(readRecord);
        },
      } as WsDataServerClient;
    });

    const totvsApi = new TotvsApi('https://somehost.totvs.com.br:123', 'user', 'password');
    const promiseResult = totvsApi.buscaSetores(1);
    await expect(promiseResult)
      .resolves
      .not
      .toThrow();

    await promiseResult.then(response => {
      expect(mocks.setSecuritySpy).toBeCalled();
      expect(mocks.readViewAsyncSpy).toBeCalled();
      expect(Array.isArray(response)).toBeTruthy();
      expect(response.length).toBe(1);
    });
  });

  test('buscaCargos', async () => {
    const xmlMockedResponse = fs.readFileSync(`${__dirname}/../../data/buscaCargos.xml`).toString();

    const mocks = {
      setSecuritySpy: jest.fn((security: ISecurity) => {
      }),
      readViewAsyncSpy: jest.fn(async (readRecord: ReadRecord): Promise<[ReadViewResponse, string, any, string]> => {
        return [{ ReadViewResult: xmlMockedResponse }, '', '', ''] as [ReadViewResponse, string, any, string];
      }),
    };

    mockedcreateClientAsync.mockImplementation(async () => {
      return {
        setSecurity: (security: ISecurity) => {
          return mocks.setSecuritySpy(security);
        },
        ReadViewAsync: async (readRecord: ReadRecord): Promise<[ReadViewResponse, string, any, string]> => {
          return mocks.readViewAsyncSpy(readRecord);
        },
      } as WsDataServerClient;
    });

    const totvsApi = new TotvsApi('https://somehost.totvs.com.br:123', 'user', 'password');
    const promiseResult = totvsApi.buscaCargos(1);
    await expect(promiseResult)
      .resolves
      .not
      .toThrow();

    await promiseResult.then(response => {
      expect(mocks.setSecuritySpy).toBeCalled();
      expect(mocks.readViewAsyncSpy).toBeCalled();
      expect(Array.isArray(response)).toBeTruthy();
      expect(response.length).toBe(1);
    });
  });

});