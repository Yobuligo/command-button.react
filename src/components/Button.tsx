import { IButtonProps } from "./IButtonProps";

const Button: React.FC<IButtonProps> = (props) => {
  return (
    <button {...props} title={props.tooltip}>
      {props.caption}
    </button>
  );
};

export default Button;
