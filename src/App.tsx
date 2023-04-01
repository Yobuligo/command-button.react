import { useMemo, useState } from "react";
import "./App.css";
import { DeleteCommand } from "./commands/DeleteCommand";
import { StartCommand } from "./commands/StartCommand";
import { StopCommand } from "./commands/StopCommand";
import Button from "./components/Button";
import CommandButton from "./components/CommandButton";
import { Document } from "./model/Document";
import { DocumentState } from "./model/DocumentState";

function App() {
  console.log("rerender");
  const document = useMemo(() => new Document(), []);
  const [documentState, setDocumentState] = useState(document.state);

  const updateDocumentState = (newDocumentState: DocumentState) => {
    document.state = newDocumentState;
    setDocumentState(newDocumentState);
  };

  return (
    <>
      <section>
        <Button
          caption="Open"
          disabled={documentState === DocumentState.Open ? true : false}
          onClick={() => updateDocumentState(DocumentState.Open)}
        />
        <Button
          caption="In Progress"
          disabled={documentState === DocumentState.InProgress ? true : false}
          onClick={() => updateDocumentState(DocumentState.InProgress)}
        />
        <Button
          caption="Closed"
          disabled={documentState === DocumentState.Closed ? true : false}
          onClick={() => updateDocumentState(DocumentState.Closed)}
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
