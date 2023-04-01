import { ICommand } from "../core/ICommand";

export interface ICommandExecutor {
  execute(command: ICommand): void;
}
