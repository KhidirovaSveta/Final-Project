import React from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";
import { BiCart, BiCategory, BiUser } from "react-icons/bi";

const SideBar = () => {
  return (
    <div id="SideBar">
      <ul>

        <li>
          <BiCart />
          <NavLink to={"/products"}> Products </NavLink>
        </li>
        {/* <li>
          <BiUser />
          <NavLink to={"/recipes"}> Recipes </NavLink>
        </li> */}

        {/* <li>
          <BiCategory />
          <NavLink to={"/"}> Category </NavLink>
        </li> */}
      </ul>
    </div>
  );
};

export default SideBar;
