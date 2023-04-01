import { IBaseButtonProps } from "./IBaseButtonProps";

export interface IButtonProps extends IBaseButtonProps {
  onClick?: () => void;
}
