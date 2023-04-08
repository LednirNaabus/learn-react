import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  let headingText = "Button Alert Notification";

  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      <h1>{headingText}</h1>
      {alertVisible && (
        <Alert color="primary" onClose={() => setAlertVisibility(false)}>
          Alert Message: The message displays here.
        </Alert>
      )}
      <Button
        color="primary"
        onClick={() => setAlertVisibility(true)}
        text="Click Me"
      />
    </div>
  );
}

export default App;
