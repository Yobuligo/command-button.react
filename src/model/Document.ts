import { DocumentState } from "./DocumentState";
import { IDocument } from "./IDocument";

export class Document implements IDocument {
  state: DocumentState = DocumentState.Open;
}
