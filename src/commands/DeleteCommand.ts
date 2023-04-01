import { Command } from "../core/Command";
import { DocumentState } from "../model/DocumentState";
import { checkNotNull } from "../services/Functions";
import { IDocumentCommandData } from "./IDocumentCommandData";

export class DeleteCommand extends Command<IDocumentCommandData> {
  title: string = "Delete";

  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(commandData: IDocumentCommandData) {
    super(commandData);
  }

  execute(): void {
    console.log(`Delete command was executed`);
  }

  protected isExecutableInternal(): boolean {
    const document = checkNotNull(this.commandData).document;
    return (
      document.state === DocumentState.Open ||
      document.state === DocumentState.Closed
    );
  }
}
