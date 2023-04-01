export interface IDocumentStateBase {
  onOpen(): void;
  onInProgress(): void;
  onClose(): void;
}
