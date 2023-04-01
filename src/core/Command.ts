import { ICommand } from "./ICommand";
import { ICommandData } from "./ICommandData";

export abstract class Command<T extends ICommandData = {}> implements ICommand {
  title?: string | undefined = undefined;
  constructor(protected readonly commandData?: T) {}
  abstract execute(): void;
  protected abstract isExecutableInternal(): boolean;
  readonly isExecutable: boolean = this.isExecutableInternal();
}
