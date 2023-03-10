import React, { useEffect, useState } from "react";
import Logo from "../../images/cake_logo.avif";
import { Link, NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import "./index.scss";
import { IoBagOutline } from "react-icons/io5";
import { CiStar, CiUser } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { CiLogin } from "react-icons/ci";
// import { logout } from "../../redux-toolkit/slice/authSlice";
import { getData } from "../../redux-toolkit/slice/dataSlice";

const Header = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cartSliceReducer);
  const [sticky, setSticky] = useState("");
  const dispatch = useDispatch();
  const customers = useSelector((state) => state.getDataReducer);
  const [user, setUser] = useState("");

  useEffect(() => {
    dispatch(getData());
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  // const handleLogout = () => {
  //   dispatch(logout)
  // }

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
                  <NavLink to={"/products"}> Products </NavLink>{" "}
                </li>

                <li>
                  {" "}
                  <NavLink to={"/recipes"}> Recipes </NavLink>{" "}
                </li>

                <li>
                  {" "}
                  <NavLink to={"/about-us"}> About Us </NavLink>{" "}
                </li>

                <li>
                  {" "}
                  <NavLink to={"/cookbooks"}> Cookbooks </NavLink>{" "}
                </li>
              </ul>
            )}

            <Link to={"/"}>
              <img src={Logo} alt="" className="logo" />
            </Link>

            <ul>
              <li>
                {" "}
                <NavLink to={"/"}> Home </NavLink>{" "}
              </li>

              <li>
                {" "}
                <NavLink to={"/products"}> Products </NavLink>{" "}
              </li>

              <li>
                {" "}
                <NavLink to={"/recipes"}> Recipes </NavLink>{" "}
              </li>

              <li>
                {" "}
                <NavLink to={"/about-us"}> About Us </NavLink>{" "}
              </li>

              <li>
                {" "}
                <NavLink to={"/cookbooks"}> Cookbooks </NavLink>{" "}
              </li>
            </ul>

            <div className="action-icons">
              {/* <NavLink to={"/"}>
                {" "}
                <CiLogin className="action-icon  d-non logIn" />{" "}
              </NavLink> */}

              {/* <div className="customers">
                {customers?.customers?.firstName ? (
                  <div onClick={() => setUser(!user)} className="user">
                    <p>{customers.customers.firstName}</p>
                  </div>
                ) : (
                  <div onClick={() => setUser(!user)} className="user">
                    <CiUser className="action-icon d-non" />{" "}
                  </div>
                )}
              </div>

              {customers?.customers?.firstName &&  <Button onClick={() => {
                localStorage.removeItem("token")
                navigate("/signin");
              }}> Log out </Button>} */}

              

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
