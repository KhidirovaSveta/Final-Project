import React, { useEffect, useState } from "react";
import Logo from "../../imagas/cake_logo.avif"
import { NavLink } from "react-router-dom";
import {RxHamburgerMenu} from 'react-icons/rx'
import "./index.scss"

const Header = () => {
    const [sticky, setSticky] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
    const scrollTop = window.scrollY;
    const stickyClass = scrollTop >= 100 ? "is-sticky" : "";
    setSticky(stickyClass);
  };

  const classes = `header-section d-none d-xl-block ${sticky}`;

  const [toggle, setToggle] = useState(true)

  const handletoggle=()=>{
    setToggle(!toggle)
  }
  
  return (
    <div id="Header">
    <header className={classes}>
      <div className="container">
        <div className="navbar">

          <RxHamburgerMenu className='burger'onClick={()=>handletoggle()}/>

         {
           (toggle)
           ?
           null
           :
           <ul className='table'>
          <li> <NavLink to={"/"}> Home </NavLink> </li>

          <li> <NavLink to={"/"}> Products </NavLink> </li>

          <li> <NavLink to={"/"}> Recipes </NavLink> </li>

          <li> <NavLink to={"/"}> About Us </NavLink> </li>

          <li> <NavLink to={"/"}> Cookbooks </NavLink> </li>
       
         </ul>
         }
          <img src={Logo} alt="" className="logo"/>

          <ul>
            <li> <NavLink to={"/"}> Home </NavLink> </li>

            <li> <NavLink to={"/"}> Products </NavLink> </li>

            <li> <NavLink to={"/"}> Recipes </NavLink> </li>

            <li> <NavLink to={"/"}> About Us </NavLink> </li>
 
            <li> <NavLink to={"/"}> Cookbooks </NavLink> </li>

          </ul>

          <div className="action-icons">
            <NavLink to={"/login"}> <i className="fa-regular fa-user"></i> </NavLink>

            <NavLink to={"/"}> <i className="fa-regular fa-star"></i> </NavLink>

            <NavLink to={"/"}> <i className="fa-solid fa-bag-shopping"></i> </NavLink>

          </div>
           
        </div>
      </div>
    </header>
    </div>
  );
};

export default Header;
