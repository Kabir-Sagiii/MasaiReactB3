import "./App.css";
import Nav from "./Components/Nav/Nav";
import TotalAmount from "./Components/Accounts/Account";
import Post from "./Components/Users/Post";

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <TotalAmount /> */}
      <Post />
    </div>
  );
}

export default App;
