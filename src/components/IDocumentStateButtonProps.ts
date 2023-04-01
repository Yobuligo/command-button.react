import { IDocument } from "../model/document/IDocument";
import { DocumentState } from "../model/documentState/DocumentState";
import { IButtonProps } from "./IButtonProps";

export interface IDocumentStateButtonProps extends IButtonProps {
  type: DocumentState;
  document: IDocument;
  onStateChanged: (newState: DocumentState) => void;
}
