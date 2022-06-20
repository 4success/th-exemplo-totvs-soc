import { Implements } from "../definitions/Implements";
import { ImplementsResponse } from "../definitions/ImplementsResponse";
import { CheckServiceActivity } from "../definitions/CheckServiceActivity";
import { CheckServiceActivityResponse } from "../definitions/CheckServiceActivityResponse";

export interface RmIrmsServer {
    Implements(teste: Implements, callback: (err: any, result: ImplementsResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    CheckServiceActivity(checkServiceActivity: CheckServiceActivity, callback: (err: any, result: CheckServiceActivityResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
