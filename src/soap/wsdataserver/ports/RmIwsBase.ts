import { Implements } from "../definitions/Implements";
import { ImplementsResponse } from "../definitions/ImplementsResponse";
import { CheckServiceActivity } from "../definitions/CheckServiceActivity";
import { CheckServiceActivityResponse } from "../definitions/CheckServiceActivityResponse";
import { AutenticaAcesso } from "../definitions/AutenticaAcesso";
import { AutenticaAcessoResponse } from "../definitions/AutenticaAcessoResponse";

export interface RmIwsBase {
    Implements(teste: Implements, callback: (err: any, result: ImplementsResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    CheckServiceActivity(checkServiceActivity: CheckServiceActivity, callback: (err: any, result: CheckServiceActivityResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    AutenticaAcesso(autenticaAcesso: AutenticaAcesso, callback: (err: any, result: AutenticaAcessoResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
