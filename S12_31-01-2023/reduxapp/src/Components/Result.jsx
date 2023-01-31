import React from "react";
import myStore from "../ReduxStore/Store";

function Result(props) {
  const reduxData = myStore.getState();
  console.log(reduxData);
  return (
    <div>
      <h1>Result Component</h1>
      <h4>{myStore.getState().name}</h4>
    </div>
  );
}

export default Result;
