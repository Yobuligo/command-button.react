import { IDocumentStateClosed } from "./IDocumentStateClosed";
import { IDocumentStateInProgress } from "./IDocumentStateInProgress";
import { IDocumentStateOpen } from "./IDocumentStateOpen";

export type IDocumentState =
  | IDocumentStateOpen
  | IDocumentStateInProgress
  | IDocumentStateClosed;
