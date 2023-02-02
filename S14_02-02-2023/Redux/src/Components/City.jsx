import { useState } from "react";
import { cityAction } from "../Action/cityAction";
import { useDispatch } from "react-redux";
var myStyle = {
  width: "500px",
  margin: "50px auto",
  padding: "30px",
  boxShadow: "0 0 10px black",
};
function City(props) {
  const dispatch = useDispatch();

  const [city, setCity] = useState("");
  const sendDataToCityAction = () => {
    cityAction(city, dispatch);
  };
  return (
    <div style={myStyle}>
      <h2>City Component</h2>
      <input
        type="text"
        placeholder="Enter City"
        onChange={(e) => {
          setCity(e.target.value);
        }}
      />
      <button onClick={sendDataToCityAction}>Store City</button>
    </div>
  );
}

export default City;
