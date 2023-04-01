import { ICommand } from "../core/ICommand";
import { IBaseButtonProps } from "./IBaseButtonProps";

export interface ICommandProps extends IBaseButtonProps {
  command: ICommand;
}
