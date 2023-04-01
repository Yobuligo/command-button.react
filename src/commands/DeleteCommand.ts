import { Command } from "../core/Command";
import { ICommandExecutableResult } from "../core/ICommandExecutableResult";
import { DocumentStateClosed } from "../model/documentState/DocumentStateClosed";
import { DocumentStateOpen } from "../model/documentState/DocumentStateOpen";
import { checkNotNull } from "../services/Functions";
import { MessageProvider } from "../services/MessageProvider";
import { IDocumentCommandData } from "./IDocumentCommandData";

export class DeleteCommand extends Command<IDocumentCommandData> {
  title: string = "Delete";

  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(commandData: IDocumentCommandData) {
    super(commandData);
  }

  execute(): void {
    MessageProvider.message = `Delete command was executed`;
  }

  protected isExecutableInternal(): ICommandExecutableResult {
    const document = checkNotNull(this.commandData).document;
    return {
      isExecutable:
        document.state.constructor.name === DocumentStateClosed.name ||
        document.state.constructor.name === DocumentStateOpen.name,
      rejectReason: !this.executableResult
        ? "State must be open or closed."
        : "",
    };
  }
}
