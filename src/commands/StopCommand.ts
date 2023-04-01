import { Command } from "../core/Command";
import { DocumentState } from "../model/DocumentState";
import { checkNotNull } from "../services/Functions";
import { IDocumentCommandData } from "./IDocumentCommandData";

export class StopCommand extends Command<IDocumentCommandData> {
  title: string = "Stop";

  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(commandData: IDocumentCommandData) {
    super(commandData);
  }

  execute(): void {
    console.log(`Stop command was executed`);
  }

  protected isExecutableInternal(): boolean {
    const document = checkNotNull(this.commandData).document;
    return (
      document.state === DocumentState.Open ||
      document.state === DocumentState.InProgress
    );
  }
}
