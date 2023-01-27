import "./App.css";
// import A from "./Components/Context/A";
import Nav from "./Components/Nav/Nav";
import Main from "./Components/Context/Main";
import { useState } from "react";
import { ctx } from "./Components/Context/myContext";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      <ctx.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        {isLoggedIn && <Nav />}
        {/* <Nav /> */}
        <Main />
      </ctx.Provider>
      {/* <A /> */}
    </div>
  );
}

export default App;
