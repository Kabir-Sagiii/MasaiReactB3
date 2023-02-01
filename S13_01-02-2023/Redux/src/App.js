import logo from "./logo.svg";
import "./App.css";
import Input from "./Components/Input";
import Result from "./Components/Result";
import City from "./Components/City";

function App() {
  return (
    <div className="App">
      <div style={{ display: "flex" }}>
        <Input />
        <City />
      </div>
      <Result />
    </div>
  );
}

export default App;
