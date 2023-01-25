import { Link } from "react-router-dom";
function Nav(props) {
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
      <Link style={aStyle} to="/products">
        Products
      </Link>
      <Link style={aStyle} to="/profile">
        Profile
      </Link>
      <Link style={aStyle} to="/contact">
        Contact Us
      </Link>
    </div>
  );
}

export default Nav;
