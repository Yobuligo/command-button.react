import { Command } from "../core/Command";
import { ICommandExecutableResult } from "../core/ICommandExecutableResult";
import { DocumentStateInProgress } from "../model/documentState/DocumentStateInProgress";
import { DocumentStateOpen } from "../model/documentState/DocumentStateOpen";
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

  protected isExecutableInternal(): ICommandExecutableResult {
    const document = checkNotNull(this.commandData).document;
    return {
      isExecutable:
        document.state.constructor.name === DocumentStateOpen.name ||
        document.state.constructor.name === DocumentStateInProgress.name,
      rejectReason: !this.executableResult
        ? "State must be open or in progress."
        : "",
    };
  }
}
