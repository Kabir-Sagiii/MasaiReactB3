import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import ProductDetails from "../Products/ProductDetails";
import Profile from "../Profile/Profile";
import Contact from "../ContactUs/Contact";
import Products from "../Products/Products";
import PageNotFound from "../PageNotFound/PageNotFound";
import Users from "../Users/Users";

function RoutesComp(props) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/products" element={<Products />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/users" element={<Users />} />
      <Route path="/productdetails/:id" element={<ProductDetails />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default RoutesComp;
