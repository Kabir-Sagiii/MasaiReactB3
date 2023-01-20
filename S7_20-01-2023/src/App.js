import "./App.css";
import { useState } from "react";
import Nav from "./Components/Nav/Nav";
import Profile from "./Components/LifeCycle/Profile";
import Profile2 from "./Components/LifeCycle/Profile2";
import Counter from "./Components/CounterApp/Counter";
import Timer from "./Components/Timer/Timer";
import DOM from "./Components/Timer/DOM";

function App() {
  const [showCounter, setShowCounter] = useState(true);
  return (
    <div className="App">
      <Nav />
      <DOM />
      {/* <Timer /> */}

      {/* {showCounter ? <Counter /> : <div> </div>}
      <br />
      <button
        onClick={() => {
          setShowCounter(true);
        }}
      >
        Show Counter
      </button>

      <button
        onClick={() => {
          setShowCounter(false);
        }}
      >
        Remove Counter
      </button> */}

      {/* <Profile2 /> */}

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
