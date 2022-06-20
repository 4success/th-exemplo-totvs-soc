import * as main from '../src';
import { NoDeltaIntegrationFlow } from '@4success/tunnelhub-sdk/src/classes/flows/noDeltaIntegrationFlow';
import AutomationLog from '@4success/tunnelhub-sdk/src/classes/logs/automationLog';
import { AutomationExecution } from '@4success/tunnelhub-sdk';


beforeAll(() => {
  jest.setTimeout(18000000);

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

test.skip('teste para debug, fazendo chamadas externas', async () => {
  await main.handler({
    systems: [
      {
        'name': 'API TOTVS',
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
});
