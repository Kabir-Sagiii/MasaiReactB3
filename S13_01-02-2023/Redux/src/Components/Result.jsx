import { useState } from "react";
import myStore from "../ReduxStore/Store";
import { useSelector } from "react-redux";

function Result(props) {
  let data = useSelector((store) => {
    return store;
  });

  // const [state, setState] = useState("");

  // myStore.subscribe(() => {
  //   setState(myStore.getState().name);
  // });

  return (
    <div>
      <h1>Result Component</h1>
      <dl>
        <dt>
          <b>Name</b>
        </dt>
        <dd style={{ color: "green" }}>{data.name}</dd>
        <dt>
          {" "}
          <b>City</b>
        </dt>
        <dd style={{ color: "green" }}>{data.city}</dd>
      </dl>
    </div>
  );
}

export default Result;
