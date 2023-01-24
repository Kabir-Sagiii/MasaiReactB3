import { useContext } from "react";
import Login from "./Login";
import Home from "./Home";
import { ctx } from "./myContext";

function Main(props) {
  const { isLoggedIn } = useContext(ctx);
  return <div>{isLoggedIn ? <Home /> : <Login />}</div>;
}

export default Main;
