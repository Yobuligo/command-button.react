import { ReactNode, useEffect, useMemo, useState } from "react";
import "./App.css";
import { DeleteCommand } from "./commands/DeleteCommand";
import { StartCommand } from "./commands/StartCommand";
import { StopCommand } from "./commands/StopCommand";
import CommandButton from "./components/CommandButton";
import DocumentStateButton from "./components/DocumentStateButton";
import Info from "./components/Info";
import { Document } from "./model/document/Document";
import { IDocument } from "./model/document/IDocument";
import { DocumentState } from "./model/documentState/DocumentState";
import { MessageProvider } from "./services/MessageProvider";

function App() {
  const document: IDocument = useMemo(() => new Document(), []);
  const [, setDocumentState] = useState(document.state.type);
  const updateDocumentState = (newState: DocumentState) => {
    setDocumentState(newState);
  };

  const [message, setMessage] = useState(MessageProvider.message);
  useEffect(() => {
    MessageProvider.onChange((message) => setMessage(message));
  }, []);

  const items: ReactNode[] = [];
  for (let propName in DocumentState) {
    const prop = (DocumentState as any)[propName];
    items.push(
      <DocumentStateButton
        key={prop}
        type={prop}
        document={document}
        onStateChanged={updateDocumentState}
        callable={(document.state as any)[prop].bind(document.state)}
      />
    );
  }

  return (
    <>
      <section>{items}</section>
      <section>
        <CommandButton command={new StartCommand({ document })} />
        <CommandButton command={new StopCommand({ document })} />
        <CommandButton command={new DeleteCommand({ document })} />
      </section>
      <section>
        <Info message={message} />
      </section>
    </>
  );
}

export default App;
