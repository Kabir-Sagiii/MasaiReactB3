import { Link } from "react-router-dom";
function Nav(props) {
  var routes = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Users",
      path: "/users",
    },
    {
      title: "Profile",
      path: "/profile",
    },
    {
      title: "Products",
      path: "/products",
    },
    {
      title: "ContactUs",
      path: "/contact",
    },
    {
      title: "Login",
      path: "/login",
    },
  ];

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
      {/* <Link style={aStyle} to="/">
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
      </Link> */}

      {routes.map((route, index) => {
        return (
          <Link style={aStyle} key={index + 1} to={route.path}>
            {route.title}
          </Link>
        );
      })}
    </div>
  );
}

export default Nav;
