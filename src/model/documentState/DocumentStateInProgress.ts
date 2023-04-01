import { DocumentState } from "./DocumentState";
import { DocumentStateBase } from "./DocumentStateBase";
import { DocumentStateClosed } from "./DocumentStateClosed";
import { DocumentStateOpen } from "./DocumentStateOpen";

export class DocumentStateInProgress extends DocumentStateBase {
  type = DocumentState.InProgress
  
  onOpen(): void {
    this.document.state = new DocumentStateOpen(this.document);
  }

  onInProgress(): void {
    console.log(`Already in progress state`);
  }

  onClose(): void {
    this.document.state = new DocumentStateClosed(this.document);
  }
}
