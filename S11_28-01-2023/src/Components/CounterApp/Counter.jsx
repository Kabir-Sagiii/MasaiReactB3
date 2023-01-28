import { useState, useEffect } from "react";

function Counter(props) {
  const [state, setState] = useState(0);

  const [name, setName] = useState("Kabir");

  useEffect(() => {
    //sideEffect
    // console.log("Callback fn is cAlled");
    // localStorage.setItem("myname", "Kabir Sagar");
    console.log("Callback called");
    document.title = name;

    // return () => {
    //   //cleanup
    //   localStorage.removeItem("myname");
    //   //   alert("Component Will Unmount");
    // };
  }, [name]);

  return (
    <div>
      <h2>Count Value : {state}</h2>
      <button
        onClick={() => {
          setState(state + 1);
        }}
      >
        Count
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          setName("Kabir");
        }}
      >
        Kabir
      </button>
      <button
        onClick={() => {
          setName("MASAI");
        }}
      >
        MASAI
      </button>
      <button
        onClick={() => {
          setName("SAGAR");
        }}
      >
        SAGAR
      </button>
    </div>
  );
}

export default Counter;
