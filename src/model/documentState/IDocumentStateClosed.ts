import { DocumentState } from "./DocumentState";
import { IDocumentStateBase } from "./IDocumentStateBase";

export interface IDocumentStateClosed extends IDocumentStateBase {
  type: DocumentState.Closed;
}
