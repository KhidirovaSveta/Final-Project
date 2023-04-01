import React from "react";
import { Routes, Route } from "react-router-dom";
import Details from "../pages/site/detail";
import Home from "../pages/site/home";
import LogIn from "../pages/admin/log-in";
import Register from "../pages/admin/register";
import AboutUs from "../pages/site/about-us";
import Wishlist from "../pages/site/wishlist";
import CartProducts from "../pages/site/cart";
import AllProducts from "../pages/site/products";
import NotFound from "../pages/site/notFound";
import Recipes from "../pages/site/recipes";
import CheckOut from "../pages/site/check-out";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/details/:_id" element={<Details />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<CartProducts />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/check-out" element={<CheckOut />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Routing;
