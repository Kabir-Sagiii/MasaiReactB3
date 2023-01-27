import { useState, useEffect } from "react";
var style = {
  width: "300px",
  margin: "30px auto",
  padding: "10px",
  boxShadow: "0 0 10px black",
};
function Profile2(props) {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch("https://randomuer.me/api/?results=1")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setState(data.results);
      });
  }, []);

  console.log("Component Rendered");
  return (
    <>
      {state.length > 0 ? (
        <div style={style}>
          <img src="" width="300" height={300} />
          <h3></h3>
          <p></p>
          <button>Change User</button>
        </div>
      ) : (
        <h2 style={{ color: "red", marginTop: "100px" }}>Loading</h2>
      )}
    </>
  );
}

export default Profile2;
