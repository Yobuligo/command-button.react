import { ICommand } from "../core/ICommand";
import { ICommandExecutor } from "./ICommandExecutor";

export class CommandExecutor implements ICommandExecutor {
  execute(command: ICommand): void {
    if (command.isExecutable) {
      command.execute();
    } else {
      console.log(`Command '${command.constructor.name}' must not be executed`);
    }
  }
}
