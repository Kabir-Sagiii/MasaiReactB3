import "./App.css";

import Nav from "./Components/Nav/Nav";
import RoutesComp from "./Components/Routes/Routes";
// import Home from "./Components/Home/Home";
// import Contact from "./Components/ContactUs/Contact";
// import Products from "./Components/Products/Products";
// import Profile from "./Components/Profile/Profile";
// import ProductDetails from "./Components/Products/ProductDetails";
// import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <RoutesComp />
    </div>
  );
}

export default App;
