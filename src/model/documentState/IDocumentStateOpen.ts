import { DocumentState } from "./DocumentState";
import { IDocumentStateBase } from "./IDocumentStateBase";

export interface IDocumentStateOpen extends IDocumentStateBase {
  type: DocumentState.Open;
}
