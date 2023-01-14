import logo from "./logo.svg";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import Counter from "./Components/Counter/Counter";
import AddTodo from "./Components/Todo/AddTodo";

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <Counter /> */}
      <AddTodo />
    </div>
  );
}

export default App;
