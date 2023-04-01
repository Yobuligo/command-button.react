import { DocumentState } from "./DocumentState";
import { IDocumentStateBase } from "./IDocumentStateBase";

export interface IDocumentStateInProgress extends IDocumentStateBase {
  type: DocumentState.InProgress;
}
