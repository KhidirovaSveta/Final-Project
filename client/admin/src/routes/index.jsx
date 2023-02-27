import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import AllProducts from "../pages/products";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllProducts />} />
      </Routes>
    </div>
  );
};

export default Routing;
