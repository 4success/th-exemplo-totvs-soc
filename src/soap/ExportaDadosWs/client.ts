import {Client as SoapClient, createClientAsync as soapCreateClientAsync} from 'soap';
import {TnsexportaDadosWs} from './definitions/TnsexportaDadosWs';
import {TnsexportaDadosWsResponse} from './definitions/TnsexportaDadosWsResponse';
import {ExportaDadosWsService} from './services/ExportaDadosWsService';

export interface ExportaDadosWsClient extends SoapClient {
  ExportaDadosWsService: ExportaDadosWsService;

  exportaDadosWsAsync(exportaDadosWs: TnsexportaDadosWs): Promise<[TnsexportaDadosWsResponse, string, any, string]>;
}

/** Create ExportaDadosWsClient */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<ExportaDadosWsClient> {
  return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
