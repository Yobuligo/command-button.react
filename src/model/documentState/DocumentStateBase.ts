import { IDocument } from "../document/IDocument";
import { IDocumentStateBase } from "./IDocumentStateBase";

export abstract class DocumentStateBase implements IDocumentStateBase {
  constructor(protected document: IDocument) {}
  abstract onOpen(): void;
  abstract onInProgress(): void;
  abstract onClose(): void;
}
