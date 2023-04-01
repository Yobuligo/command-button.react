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
      disabled={props.disabled ?? !props.command.executableResult.isExecutable}
      onClick={onExecuteCommand}
      tooltip={
        !props.command.executableResult.isExecutable
          ? props.command.executableResult.rejectReason
          : ""
      }
    />
  );
};

export default CommandButton;
