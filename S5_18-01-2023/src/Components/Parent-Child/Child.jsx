import { useState } from "react";

function Child({ data, sendDataToParent }) {
  const [childData, setChildData] = useState("");
  return (
    <div
      style={{
        border: "2px solid red",
        padding: "30px",
        margin: "30px",
      }}
    >
      <h2>Child Component</h2>
      <input
        type="text"
        placeholder="Enter Some Text"
        onChange={(e) => {
          setChildData(e.target.value);
        }}
      />
      <button
        onClick={() => {
          sendDataToParent(childData);
        }}
      >
        Send Data To Parent
      </button>
      <p style={{ color: "red" }}>{data}</p>
    </div>
  );
}

export default Child;
