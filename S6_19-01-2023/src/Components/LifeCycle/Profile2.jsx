import { useState, useEffect } from "react";
var style = {
  width: "300px",
  margin: "30px auto",
  padding: "10px",
  boxShadow: "0 0 10px black",
};
function Profile2(props) {
  const [state, setState] = useState([]);

  return (
    <>
      <div style={style}>
        <img src="" width="300" height={300} />
        <h3></h3>
        <p></p>
        <button>Change User</button>
      </div>
    </>
  );
}

export default Profile2;
