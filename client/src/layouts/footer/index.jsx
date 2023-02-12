import React from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div id="Footer">
      <div className="container">
        <div className="footer">
          <div className="footer-input">
            <h2 className="footer-header">Dont't miss a thing</h2>
            <p className="footer-parag">
              Enter your email below to be the first to know about new
              collections and product launches.
            </p>
            <input type="email" placeholder="Enter your email" className="footerInput"/>
          </div>

          <div className="footer-list">
            <ul>
              <li className="serv-info">SERVICES</li>
              <li><NavLink to={"/"}> Privacy policy </NavLink></li>
              <li> <NavLink to={"/"}> Refund policy </NavLink></li>
              <li> <NavLink to={"/"}> Shipping & Return  </NavLink></li>
              <li> <NavLink to={"/"}> Term & conditions  </NavLink></li>
            </ul>

            <ul>
              <li className="serv-info">INFORMATION</li>
              <li><NavLink to={"/"}>  My account </NavLink></li>
              <li><NavLink to={"/"}> Cart </NavLink></li>
              <li> <NavLink to={"/"}> Wishlist  </NavLink></li>
              <li> <NavLink to={"/"}> Product Compare </NavLink></li>
            </ul>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
