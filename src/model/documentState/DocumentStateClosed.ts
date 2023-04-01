import { DocumentState } from "./DocumentState";
import { DocumentStateBase } from "./DocumentStateBase";
import { DocumentStateInProgress } from "./DocumentStateInProgress";
import { DocumentStateOpen } from "./DocumentStateOpen";

export class DocumentStateClosed extends DocumentStateBase {
  type = DocumentState.Closed;

  onOpen(): void {
    this.document.state = new DocumentStateOpen(this.document);
  }

  onInProgress(): void {
    this.document.state = new DocumentStateInProgress(this.document);
  }

  onClose(): void {
    console.log(`Already in closed state`);
  }
}
