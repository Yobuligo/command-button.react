import { IButtonProps } from "./IButtonProps";

const Button: React.FC<IButtonProps> = (props) => {
  return <button {...props}>{props.caption}</button>;
};

export default Button;
