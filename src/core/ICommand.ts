import { ICommandDetails } from "./ICommandDetails";
import { ICommandExecutableResult } from "./ICommandExecutableResult";

export interface ICommand extends ICommandDetails {
  execute(): void;
  readonly executableResult: ICommandExecutableResult;
}
