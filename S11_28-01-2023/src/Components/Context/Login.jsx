import { useState, useContext } from "react";
import { ctx } from "./myContext";

const usersDetails = [
  {
    name: "Kabir",
    password: "kabir@123",
  },
  {
    name: "Masai",
    password: "masai@123",
  },
  {
    name: "Aman",
    password: "aman@123",
  },
];

function Login(props) {
  const { setIsLoggedIn } = useContext(ctx);
  const [user, setUser] = useState({
    name: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    // alert(process.env.REACT_APP_USERNAME);
    if (
      user.name === process.env.REACT_APP_USERNAME &&
      user.password === process.env.REACT_APP_PASSWORD
    ) {
      // logic
      setIsLoggedIn(true);
    } else {
      alert("Enter Proper Credentials");
    }
  };
  return (
    <div
      style={{
        margin: "100px auto",
        width: "300px",
        boxShadow: "0 0 10px black",
        padding: "30px",
      }}
    >
      <h2>Login Form</h2>
      <form>
        <div>
          <input
            type="text"
            placeholder="User Name"
            value={user.name}
            onChange={(e) => {
              setUser({
                ...user,
                name: e.target.value,
              });
            }}
          />
        </div>
        <br />
        <div>
          <input
            type="password"
            placeholder="Password"
            value={user.password}
            onChange={(e) => {
              setUser({
                ...user,
                password: e.target.value,
              });
            }}
          />
        </div>
        <br />
        <div>
          <button onClick={handleLogin}>Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
