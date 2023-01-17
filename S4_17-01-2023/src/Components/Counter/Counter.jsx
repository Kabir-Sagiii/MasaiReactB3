import { useState } from "react";
var counterStyle = {
  width: "300px",
  margin: "100px auto",
  padding: "50px",
  boxShadow: "0 0 10px black",
};

function Counter() {
  let [count, setCount] = useState(0);
  const [name, setName] = useState("Kabir");

  var countValue = 0;
  const increaseCount = () => {
    // countValue++;
    // console.log(countValue);
    setCount(count + 1);
  };

  return (
    <div style={counterStyle}>
      <h3>Count Value is {count}</h3>
      <button onClick={increaseCount}>Add Count</button>
    </div>
  );
}

export default Counter;
