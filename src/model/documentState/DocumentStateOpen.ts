import { DocumentState } from "./DocumentState";
import { DocumentStateBase } from "./DocumentStateBase";
import { DocumentStateClosed } from "./DocumentStateClosed";
import { DocumentStateInProgress } from "./DocumentStateInProgress";

export class DocumentStateOpen extends DocumentStateBase {
  type = DocumentState.Open;

  onOpen(): void {
    console.log(`Already in open state`);
  }

  onInProgress(): void {
    this.document.state = new DocumentStateInProgress(this.document);
  }

  onClose(): void {
    this.document.state = new DocumentStateClosed(this.document);
  }
}
