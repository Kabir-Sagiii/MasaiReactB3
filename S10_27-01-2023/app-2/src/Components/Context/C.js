import { useContext } from "react";
import myContext from "./myContext";
import D from "./D";

function C(props) {
  const { title } = useContext(myContext);
  return (
    <div>
      <h2>C Component</h2>
      <h4>{title}</h4>
      <D />
    </div>
  );
}

export default C;
