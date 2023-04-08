import Person from "./components/Person";
import Toolbar from "./components/Toolbar";
import "./App.css";

export default function App() {
  return (
    <Toolbar
      onPlayMovie={() => alert("Playing")}
      onUploadImage={() => alert("Uploading")}
    ></Toolbar>
  );
}
