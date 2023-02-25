import React from "react";
import { Routes, Route } from "react-router-dom";
import Details from "../pages/site/detail";
import Home from "../pages/site/home";
import LogIn from "../pages/admin/log-in";
import Register from "../pages/admin/register";
import AboutUs from "../pages/site/about-us";
import Wishlist from "../pages/site/wishlist";
import Cart from "../pages/site/cart";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/details/:_id" element={<Details />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </div>
  );
};

export default Routing;
