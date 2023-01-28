import { useContext } from "react";
import { Link } from "react-router-dom";
import { ctx } from "../Context/myContext";

function Nav(props) {
  const { isLoggedIn, setIsLoggedIn } = useContext(ctx);
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
      <Link style={aStyle} to="/">
        Home
      </Link>
      <Link style={aStyle} to="/private">
        Private
      </Link>
      <Link style={aStyle} to="/todo">
        Todo
      </Link>
      <Link style={aStyle} to="/profile">
        Profile
      </Link>
      <Link style={aStyle} to="/contact">
        Contact Us
      </Link>
      {isLoggedIn && (
        <button
          onClick={() => {
            setIsLoggedIn(false);
          }}
        >
          Logout
        </button>
      )}
    </div>
  );
}

export default Nav;
