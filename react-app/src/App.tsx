import Button from "./components/Button";
import ButtonSolution from "./components/ButtonSolution";

function App() {
  let headingText = "Button Component";
  return (
    <div>
      <h1>{headingText}</h1>
      <ButtonSolution color="primary" onClick={() => console.log("Clicked")}>
        Some Text Here
      </ButtonSolution>
    </div>
  );
}

export default App;
