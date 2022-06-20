import { RmIrmsServer } from "../ports/RmIrmsServer";
import { RmIwsBase } from "../ports/RmIwsBase";
import { RmIwsDataServer } from "../ports/RmIwsDataServer";

export interface WsDataServer {
    readonly RmIrmsServer: RmIrmsServer;
    readonly RmIwsBase: RmIwsBase;
    readonly RmIwsDataServer: RmIwsDataServer;
}
