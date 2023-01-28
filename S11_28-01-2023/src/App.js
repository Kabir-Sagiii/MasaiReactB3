import "./App.css";
// import A from "./Components/Context/A";
import Nav from "./Components/Nav/Nav";
import Main from "./Components/Context/Main";
import { useState } from "react";
import { ctx } from "./Components/Context/myContext";
import { Routes, Route } from "react-router-dom";
import Todo from "./Components/Todo/AddTodo";
import Profile from "./Components/Profile/Profile";
import PrivateComp from "./Components/PrivateComp/PrivateComp";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      <ctx.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/todo"
            element={
              <PrivateComp>
                {/* <Todo /> */}
                <ul>
                  <li>React</li>
                  <li>Angular</li>
                </ul>
              </PrivateComp>
            }
          />
          <Route
            path="/private"
            element={
              <PrivateComp>
                {" "}
                <h2>Masai</h2>
              </PrivateComp>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateComp>
                <Profile />
              </PrivateComp>
            }
          />
        </Routes>
      </ctx.Provider>
    </div>
  );
}

export default App;
