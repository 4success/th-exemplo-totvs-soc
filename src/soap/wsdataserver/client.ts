import { Client as SoapClient, createClientAsync as soapCreateClientAsync } from "soap";
import { Implements } from "./definitions/Implements";
import { ImplementsResponse } from "./definitions/ImplementsResponse";
import { CheckServiceActivity } from "./definitions/CheckServiceActivity";
import { CheckServiceActivityResponse } from "./definitions/CheckServiceActivityResponse";
import { AutenticaAcesso } from "./definitions/AutenticaAcesso";
import { AutenticaAcessoResponse } from "./definitions/AutenticaAcessoResponse";
import { GetSchema } from "./definitions/GetSchema";
import { GetSchemaResponse } from "./definitions/GetSchemaResponse";
import { IsValidDataServer } from "./definitions/IsValidDataServer";
import { IsValidDataServerResponse } from "./definitions/IsValidDataServerResponse";
import { GetSchemaEmail } from "./definitions/GetSchemaEmail";
import { GetSchemaEmailResponse } from "./definitions/GetSchemaEmailResponse";
import { ReadView } from "./definitions/ReadView";
import { ReadViewResponse } from "./definitions/ReadViewResponse";
import { ReadViewEmail } from "./definitions/ReadViewEmail";
import { ReadViewEmailResponse } from "./definitions/ReadViewEmailResponse";
import { ReadRecord } from "./definitions/ReadRecord";
import { ReadRecordResponse } from "./definitions/ReadRecordResponse";
import { ReadRecordEmail } from "./definitions/ReadRecordEmail";
import { ReadRecordEmailResponse } from "./definitions/ReadRecordEmailResponse";
import { SaveRecord } from "./definitions/SaveRecord";
import { SaveRecordResponse } from "./definitions/SaveRecordResponse";
import { SaveRecordEmail } from "./definitions/SaveRecordEmail";
import { SaveRecordEmailResponse } from "./definitions/SaveRecordEmailResponse";
import { DeleteRecord } from "./definitions/DeleteRecord";
import { DeleteRecordResponse } from "./definitions/DeleteRecordResponse";
import { DeleteRecordEmail } from "./definitions/DeleteRecordEmail";
import { DeleteRecordEmailResponse } from "./definitions/DeleteRecordEmailResponse";
import { DeleteRecordByKey } from "./definitions/DeleteRecordByKey";
import { DeleteRecordByKeyResponse } from "./definitions/DeleteRecordByKeyResponse";
import { ReadLookupView } from "./definitions/ReadLookupView";
import { ReadLookupViewResponse } from "./definitions/ReadLookupViewResponse";
import { ReadLookupViewEmail } from "./definitions/ReadLookupViewEmail";
import { ReadLookupViewEmailResponse } from "./definitions/ReadLookupViewEmailResponse";
import { WsDataServer } from "./services/WsDataServer";

export interface WsDataServerClient extends SoapClient {
    WsDataServer: WsDataServer;
    ImplementsAsync(teste: Implements): Promise<[ImplementsResponse, string, any, string]>;
    CheckServiceActivityAsync(checkServiceActivity: CheckServiceActivity): Promise<[CheckServiceActivityResponse, string, any, string]>;
    ImplementsAsync(teste: Implements): Promise<[ImplementsResponse, string, any, string]>;
    CheckServiceActivityAsync(checkServiceActivity: CheckServiceActivity): Promise<[CheckServiceActivityResponse, string, any, string]>;
    AutenticaAcessoAsync(autenticaAcesso: AutenticaAcesso): Promise<[AutenticaAcessoResponse, string, any, string]>;
    ImplementsAsync(teste: Implements): Promise<[ImplementsResponse, string, any, string]>;
    CheckServiceActivityAsync(checkServiceActivity: CheckServiceActivity): Promise<[CheckServiceActivityResponse, string, any, string]>;
    GetSchemaAsync(getSchema: GetSchema): Promise<[GetSchemaResponse, string, any, string]>;
    IsValidDataServerAsync(isValidDataServer: IsValidDataServer): Promise<[IsValidDataServerResponse, string, any, string]>;
    GetSchemaEmailAsync(getSchemaEmail: GetSchemaEmail): Promise<[GetSchemaEmailResponse, string, any, string]>;
    ReadViewAsync(readView: ReadView): Promise<[ReadViewResponse, string, any, string]>;
    ReadViewEmailAsync(readViewEmail: ReadViewEmail): Promise<[ReadViewEmailResponse, string, any, string]>;
    ReadRecordAsync(readRecord: ReadRecord): Promise<[ReadRecordResponse, string, any, string]>;
    ReadRecordEmailAsync(readRecordEmail: ReadRecordEmail): Promise<[ReadRecordEmailResponse, string, any, string]>;
    SaveRecordAsync(saveRecord: SaveRecord): Promise<[SaveRecordResponse, string, any, string]>;
    SaveRecordEmailAsync(saveRecordEmail: SaveRecordEmail): Promise<[SaveRecordEmailResponse, string, any, string]>;
    DeleteRecordAsync(deleteRecord: DeleteRecord): Promise<[DeleteRecordResponse, string, any, string]>;
    DeleteRecordEmailAsync(deleteRecordEmail: DeleteRecordEmail): Promise<[DeleteRecordEmailResponse, string, any, string]>;
    DeleteRecordByKeyAsync(deleteRecordByKey: DeleteRecordByKey): Promise<[DeleteRecordByKeyResponse, string, any, string]>;
    ReadLookupViewAsync(readLookupView: ReadLookupView): Promise<[ReadLookupViewResponse, string, any, string]>;
    ReadLookupViewEmailAsync(readLookupViewEmail: ReadLookupViewEmail): Promise<[ReadLookupViewEmailResponse, string, any, string]>;
}

/** Create WsDataServerClient */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<WsDataServerClient> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
