import { useState } from "react";
import Child from "./Child";

function PArent(props) {
  const [state, setState] = useState("");
  const [data, setData] = useState("");
  const [newdata, setNewData] = useState("No Data");
  const sendDataToChild = () => {
    setData(state);
  };

  return (
    <div
      style={{
        border: "4px solid black",
        padding: "50px",
        width: "500px",
        margin: "50px auto",
      }}
    >
      <h2>Parent Component</h2>
      <input
        type="text"
        placeholder="Enter Some Text"
        onChange={(e) => {
          setState(e.target.value);
        }}
      />
      <button onClick={sendDataToChild}>Send Data To Child</button>
      <h4 style={{ color: "green" }}>{newdata} </h4>
      <Child data={data} sendDataToParent={setNewData} />
    </div>
  );
}

export default PArent;
