import { useState } from "react";
import myStore from "../ReduxStore/Store";
import { useSelector } from "react-redux";

var style = {
  width: "300px",
  padding: "30px",
  margin: " auto",
  boxShadow: "0 0 10px green",
};
function Result(props) {
  let data = useSelector((store) => {
    // { myReducer:{name:"",city:""},productReducer:{}}
    return store.myReducer;
  });

  // const [state, setState] = useState("");

  // myStore.subscribe(() => {
  //   setState(myStore.getState().name);
  // });

  return (
    <div style={style}>
      <h3>Result Component</h3>
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
