import { CommandExecutor } from "../services/CommandExecutor";
import Button from "./Button";
import { ICommandProps } from "./ICommandProps";

const CommandButton: React.FC<ICommandProps> = (props) => {
  const onExecuteCommand = () => {
    new CommandExecutor().execute(props.command);
  };
  return (
    <Button
      {...props}
      caption={props.caption ?? props.command.title}
      disabled={props.disabled ?? !props.command.isExecutable}
      onClick={onExecuteCommand}
    />
  );
};

export default CommandButton;
