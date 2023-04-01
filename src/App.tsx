import { useMemo, useState } from "react";
import "./App.css";
import { DeleteCommand } from "./commands/DeleteCommand";
import { StartCommand } from "./commands/StartCommand";
import { StopCommand } from "./commands/StopCommand";
import CommandButton from "./components/CommandButton";
import DocumentStateButton from "./components/DocumentStateButton";
import { Document } from "./model/document/Document";
import { IDocument } from "./model/document/IDocument";
import { DocumentState } from "./model/documentState/DocumentState";

function App() {
  const document: IDocument = useMemo(() => new Document(), []);
  const [, setDocumentState] = useState(document.state.type);
  const updateDocumentState = (newState: DocumentState) => {
    setDocumentState(newState);
  };

  return (
    <>
      <section>
        <DocumentStateButton
          type={DocumentState.Open}
          document={document}
          onStateChanged={updateDocumentState}
        />
        <DocumentStateButton
          type={DocumentState.InProgress}
          document={document}
          onStateChanged={updateDocumentState}
        />
        <DocumentStateButton
          type={DocumentState.Closed}
          document={document}
          onStateChanged={updateDocumentState}
        />
      </section>
      <section>
        <CommandButton command={new StartCommand({ document })} />
        <CommandButton command={new StopCommand({ document })} />
        <CommandButton command={new DeleteCommand({ document })} />
      </section>
    </>
  );
}

export default App;
