import { useContext } from "react";
import { ctx } from "../Context/myContext";

function Nav(props) {
  const { setIsLoggedIn } = useContext(ctx);
  var divStyle = {
    padding: "20px",
    backgroundColor: "black",
    textAlign: "right",
  };
  var aStyle = {
    color: "white",
    marginRight: "50px",
    textDecoration: "none",
  };
  return (
    <div style={divStyle}>
      <a style={aStyle} href="#">
        Home
      </a>
      <a style={aStyle} href="#">
        Todo
      </a>
      <a style={aStyle} href="#">
        Profile
      </a>
      <a style={aStyle} href="#">
        Contact Us
      </a>
      <button
        onClick={() => {
          setIsLoggedIn(false);
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Nav;
