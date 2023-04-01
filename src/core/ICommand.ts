import { ICommandDetails } from "./ICommandDetails";

export interface ICommand extends ICommandDetails {
  execute(): void;
  readonly isExecutable: boolean;
}
