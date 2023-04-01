import { DocumentStateOpen } from "../documentState/DocumentStateOpen";
import { IDocumentState } from "../documentState/IDocumentState";
import { IDocument } from "./IDocument";

export class Document implements IDocument {
  state: IDocumentState = new DocumentStateOpen(this);
}
