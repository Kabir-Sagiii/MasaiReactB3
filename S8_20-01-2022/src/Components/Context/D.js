import { useContext } from "react";
import myContext from "./myContext";

function D(props) {
  const data = useContext(myContext);
  return (
    <div>
      <h2>D Component</h2>
      <p>
        A component Data : <b>{data.title}</b>{" "}
      </p>
    </div>
  );
}

export default D;
