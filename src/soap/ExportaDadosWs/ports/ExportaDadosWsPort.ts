import {TnsexportaDadosWs} from '../definitions/TnsexportaDadosWs';
import {TnsexportaDadosWsResponse} from '../definitions/TnsexportaDadosWsResponse';

export interface ExportaDadosWsPort {
    exportaDadosWs(exportaDadosWs: TnsexportaDadosWs, callback: (err: any, result: TnsexportaDadosWsResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
