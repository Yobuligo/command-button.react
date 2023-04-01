import { ICommandDetails } from "./ICommandDetails";
import { ICommandExecutableResult } from "./ICommandExecutableResults";

export interface ICommand extends ICommandDetails {
  execute(): void;
  readonly executableResult: ICommandExecutableResult;
}
