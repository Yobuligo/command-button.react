import { DocumentState } from "../model/documentState/DocumentState";
import Button from "./Button";
import { IDocumentStateButtonProps } from "./IDocumentStateButtonProps";

const DocumentStateButton: React.FC<IDocumentStateButtonProps> = (props) => {
  return (
    <Button
      caption={DocumentState[props.type]}
      disabled={props.document.state.type === props.type}
      onClick={() => {
        switch (props.type) {
          case DocumentState.Open: {
            props.document.state.onOpen();
            props.onStateChanged(DocumentState.Open);
            break;
          }
          case DocumentState.InProgress: {
            props.document.state.onInProgress();
            props.onStateChanged(DocumentState.InProgress);
            break;
          }
          case DocumentState.Closed: {
            props.document.state.onClose();
            props.onStateChanged(DocumentState.Closed);
            break;
          }
        }
      }}
    />
  );
};

export default DocumentStateButton;
