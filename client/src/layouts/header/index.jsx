import React, { useEffect, useState } from "react";
import Logo from "../../images/cake_logo.avif";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import "./index.scss";
import { IoBagOutline } from "react-icons/io5";
import { CiStar, CiUser } from "react-icons/ci";
import { useSelector } from "react-redux";

const Header = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cartSliceReducer);
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

  const [toggle, setToggle] = useState(true);

  const handletoggle = () => {
    setToggle(!toggle);
  };

  return (
    <div id="Header">
      <header className={classes}>
        <div className="container">
          <div className="navbar">
            <RxHamburgerMenu
              className="burger"
              onClick={() => handletoggle()}
            />

            {toggle ? null : (
              <ul className="table">
                <li>
                  {" "}
                  <NavLink to={"/"}> Home </NavLink>{" "}
                </li>

                <li>
                  {" "}
                  <NavLink to={"/"}> Products </NavLink>{" "}
                </li>

                <li>
                  {" "}
                  <NavLink to={"/"}> Recipes </NavLink>{" "}
                </li>

                <li>
                  {" "}
                  <NavLink to={"/"}> About Us </NavLink>{" "}
                </li>

                <li>
                  {" "}
                  <NavLink to={"/"}> Cookbooks </NavLink>{" "}
                </li>
              </ul>
            )}
            <img src={Logo} alt="" className="logo" />

            <ul>
              <li>
                {" "}
                <NavLink to={"/"}> Home </NavLink>{" "}
              </li>

              <li>
                {" "}
                <NavLink to={"/"}> Products </NavLink>{" "}
              </li>

              <li>
                {" "}
                <NavLink to={"/"}> Recipes </NavLink>{" "}
              </li>

              <li>
                {" "}
                <NavLink to={"/about-us"}> About Us </NavLink>{" "}
              </li>

              <li>
                {" "}
                <NavLink to={"/"}> Cookbooks </NavLink>{" "}
              </li>
            </ul>

            <div className="action-icons">
              <NavLink to={"/login"}>
                {" "}
                <CiUser className="action-icon d-non" />{" "}
              </NavLink>

              <NavLink to={"/wishlist"}>
                {" "}
                <CiStar className="action-icon  d-non" />{" "}
              </NavLink>

              <NavLink to={"/cart"}>
                {" "}
                <span className="cartQuantity">{cartTotalQuantity}</span>
                <IoBagOutline className="action-icon" />{" "}
              </NavLink>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
