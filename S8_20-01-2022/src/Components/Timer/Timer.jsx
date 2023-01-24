import { useState, useRef } from "react";

function Timer(props) {
  //   var timerId; //undefined  // timerId //undefined
  //   const [id, setId] = useState(null);
  const ref1 = useRef(0);

  const [timer, setTimer] = useState(0);

  const startTimer = () => {
    ref1.current = setInterval(() => {
      setTimer((prevState) => {
        return prevState + 1;
      });
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(ref1.current); //undefined
  };

  return (
    <div
      style={{
        width: "500px",
        padding: "30px",
        margin: "100px auto",
        boxShadow: "0 0 10px black",
      }}
    >
      <h2>Timer value is {timer} </h2>
      <button onClick={startTimer}>Start</button>&nbsp;&nbsp;
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}

export default Timer;
