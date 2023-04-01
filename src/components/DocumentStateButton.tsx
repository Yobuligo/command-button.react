import Button from "./Button";
import { IDocumentStateButtonProps } from "./IDocumentStateButtonProps";

const DocumentStateButton: React.FC<IDocumentStateButtonProps> = (props) => {
  return (
    <Button
      caption={props.type}
      disabled={props.document.state.type === props.type}
      onClick={() => {
        props.callable();
        props.onStateChanged(props.document.state.type);
      }}
    />
  );
};

export default DocumentStateButton;
