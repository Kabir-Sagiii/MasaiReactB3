import { useState } from "react";
import { myAction } from "../Action/myAction";

var myStyle = {
  width: "500px",
  margin: "50px auto",
  padding: "30px",
  boxShadow: "0 0 10px black",
};
function Input(props) {
  const [state, setState] = useState("");

  const SendDataToAction = () => {
    myAction(state);
  };
  return (
    <div style={myStyle}>
      <h3>Input Component</h3>
      <input
        type="text"
        placeholder="Enter Name"
        onChange={(e) => {
          setState(e.target.value);
        }}
      />
      <button onClick={SendDataToAction}>Send Data to Redux</button>
    </div>
  );
}

export default Input;
