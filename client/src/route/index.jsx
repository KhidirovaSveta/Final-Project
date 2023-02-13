import React from "react";
import { Routes, Route } from "react-router-dom";
import Details from "../pages/detail";
import Home from "../pages/home"
import LogIn from "../pages/log-in";
import Register from "../pages/register";
const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/details/:_id" element={<Details />} />
        
      </Routes>
    </div>
  );
};

export default Routing;
