import { ICommand } from "./ICommand";
import { ICommandData } from "./ICommandData";
import { ICommandExecutableResult } from "./ICommandExecutableResult";

export abstract class Command<T extends ICommandData = {}> implements ICommand {
  title?: string | undefined = undefined;
  constructor(protected readonly commandData?: T) {}
  abstract execute(): void;
  protected abstract isExecutableInternal(): ICommandExecutableResult;
  readonly executableResult: ICommandExecutableResult = this.isExecutableInternal();
}
