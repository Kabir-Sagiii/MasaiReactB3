import "./App.css";
import { useState } from "react";
import Nav from "./Components/Nav/Nav";
import Profile from "./Components/LifeCycle/Profile";
import Profile2 from "./Components/LifeCycle/Profile2";

function App() {
  const [showProfile, setShowProfile] = useState(true);
  return (
    <div className="App">
      <Nav />

      <Profile2 />

      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        {/* <Profile
          image="https://th.bing.com/th/id/OIP.KndzFm8qCrAikcfH0RBFXAHaE7?pid=ImgDet&rs=1"
          name="Sneha Reddy"
          gender="Male"
        /> */}
        {/* <Profile
          image="https://th.bing.com/th/id/OIP.-8v1B3AmqbhdJzt1nHvYPgHaE8?pid=ImgDet&rs=1"
          name="Chris John"
          gender="Female"
        /> */}
      </div>

      {/* {showProfile ? <Profile /> : <div> </div>} */}
      {/* <button
        onClick={() => {
          setShowProfile(true);
        }}
      >
        Show Profile Component
      </button>
      &nbsp;
      <button
        onClick={() => {
          setShowProfile(false);
        }}
      >
        Remove Profile Component
      </button> */}
    </div>
  );
}

export default App;
