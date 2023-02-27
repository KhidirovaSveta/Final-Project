import React from "react";
import { NavLink } from "react-router-dom";
import "./index.scss"

const SideBar = () => {
  return (
    <div id="SideBar">
      <ul>
        <li>
          {" "}
          <NavLink to={"/products"}> Products </NavLink>
        </li>

        <li>
          {" "}
          <NavLink to={"/products"}> Category </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
