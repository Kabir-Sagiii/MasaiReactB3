import { useState } from "react";
var style = {
  width: "300px",
  margin: "30px auto",
  padding: "10px",
  boxShadow: "0 0 10px black",
};
function Profile(props) {
  const [state, setState] = useState({
    image:
      "https://th.bing.com/th/id/OIP.KndzFm8qCrAikcfH0RBFXAHaE7?pid=ImgDet&rs=1",
    name: "Chris John",
    gender: "Male",
  });

  // const changeUser = () => {
  //   setState({
  //     image:
  //       "https://th.bing.com/th/id/OIP.-8v1B3AmqbhdJzt1nHvYPgHaE8?pid=ImgDet&rs=1",
  //     name: "Sneha Verma",
  //     gender: "Female",
  //   });
  // };
  return (
    <div style={style}>
      <img src={props.image} width="300" height={300} />
      <h3>{props.name}</h3>
      <p>{props.gender}</p>
      <button>Change User</button>
    </div>
  );
}

export default Profile;
