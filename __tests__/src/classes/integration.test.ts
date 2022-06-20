import Integration from '../../../src/classes/integration';
import { AutomationExecution } from '@4success/tunnelhub-sdk';
import AutomationLog from '@4success/tunnelhub-sdk/src/classes/logs/automationLog';
import { NoDeltaIntegrationFlow } from '@4success/tunnelhub-sdk/src/classes/flows/noDeltaIntegrationFlow';
import { mocked } from 'ts-jest/utils';
import * as soap from 'soap';
import { ISecurity } from 'soap';
import { IFuncionarioModelo2WsPortSoap } from '../../../src/wsdl/FuncionarioModelo2WsService/FuncionarioModelo2WsPort';

jest.mock('../../../src/classes/totvsApi');
jest.mock('soap');

const soapMocked = mocked(soap, true);

describe('test src/integration', () => {
  beforeAll(() => {
    const persistLambdaContextFunc = jest.spyOn(AutomationExecution as any, 'persistLambdaContext');
    persistLambdaContextFunc.mockImplementation(() => {
    });

    const persistLogsFunc = jest.spyOn(AutomationLog.prototype as any, 'save');
    persistLogsFunc.mockImplementation(() => {
    });

    const updateExecutionStatisticsFunc = jest.spyOn(NoDeltaIntegrationFlow.prototype as any, 'updateExecutionStatistics');
    updateExecutionStatisticsFunc.mockImplementation(() => {
    });

    const updateMetadata = jest.spyOn(NoDeltaIntegrationFlow.prototype as any, 'updateMetadata');
    updateMetadata.mockImplementation(() => {
    });
  });

  beforeEach(() => {
  });

  test('teste sem erros', async () => {
    soapMocked.createClientAsync.mockImplementationOnce(jest.fn(async () => {
      return {
        setSecurity: (security: ISecurity) => {
        },
        importacaoFuncionarioAsync: async () => {
          return [{
            FuncionarioRetorno: {
              encontrouErro: false,
              atualizouFuncionario: true,
              atualizouCargo: true,
              atualizouCentroCusto: true,
              atualizouSetor: true,
              atualizouUnidade: true,
              incluiuCargo: true,
              incluiuCentroCusto: true,
              incluiuSetor: true,
              incluiuUnidade: true,
            },
          }, '', '', ''];
        },
      } as unknown as IFuncionarioModelo2WsPortSoap;
    }));

    const integration = new Integration({
      systems: [
        {
          'name': 'TOTVS API',
          'internalName': 'TOTVS_API',
          'parameters': {
            'password': 'topsecret',
            'authType': 'BASIC',
            'wsdlUrl': 'https://acme.rm.cloudtotvs.com.br:8059/wsDataServer/MEX?wsdl',
            'user': 'secret',
          },
          'type': 'SOAP',
        },
        {
          'name': 'SOC',
          'internalName': 'SOC_FUNCIONARIOS',
          'parameters': {
            'password': '123123131231',
            'authType': 'BASIC',
            'wsdlUrl': 'https://ws1.soc.com.br/WSSoc/FuncionarioModelo2Ws?wsdl',
            'user': '1231231',
            'custom': [
              { 'name': 'mainCompany', 'value': '111111' },
              { 'name': 'responsibleCode', 'value': '11111' },
              { 'name': 'testingEnvironment', 'value': 'false' },
            ],
          },
          'type': 'SOAP',
        },
      ],
    }, {});

    await expect(integration.doIntegration(undefined)).resolves.not.toThrow();
    expect(integration.hasAnyErrors()).toBeFalsy();
  });

  test('teste sem os sistemas atribuídos ', async () => {
    try {
      new Integration({
        systems: [
          {
            'name': 'SOC',
            'internalName': 'SOC_FUNCIONARIOS',
            'parameters': {
              'password': '123123131231',
              'authType': 'BASIC',
              'wsdlUrl': 'https://ws1.soc.com.br/WSSoc/FuncionarioModelo2Ws?wsdl',
              'user': '1231231',
              'custom': [
                { 'name': 'mainCompany', 'value': '111111' },
                { 'name': 'responsibleCode', 'value': '11111' },
                { 'name': 'testingEnvironment', 'value': 'false' },
              ],
            },
            'type': 'SOAP',
          },
        ],
      }, {});
      expect(false).toBeTruthy();
    } catch (e) {
      expect(e.message).toBe('O sistema TOTVS_API precisa ser do tipo HTTP com autorização Basic');
    }

    try {
      new Integration({
        systems: [
          {
            'name': 'TOTVS API',
            'internalName': 'TOTVS_API',
            'parameters': {
              'password': 'topsecret',
              'authType': 'BASIC',
              'wsdlUrl': 'https://acme.rm.cloudtotvs.com.br:8059/wsDataServer/MEX?wsdl',
              'user': 'secret',
            },
            'type': 'SOAP',
          },
        ],
      }, {});
      expect(false).toBeTruthy();
    } catch (e) {
      expect(e.message).toBe('O sistema SOC_FUNCIONARIOS precisa ser do tipo SOAP com autenticação Basic');
    }
  });

});