import "./App.css";

import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import Contact from "./Components/ContactUs/Contact";
import Products from "./Components/Products/Products";
import Profile from "./Components/Profile/Profile";
import ProductDetails from "./Components/Products/ProductDetails";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
