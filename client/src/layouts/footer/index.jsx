import React from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";
import {
  FaPinterestP,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaArrowRight,
} from "react-icons/fa";
import { HiOutlineEnvelope } from "react-icons/hi2";
import masterCard from "../../images/icons8-mastercard-30.svg";
import visaCard from "../../images/icons8-visa-30.svg";
import americanExp from "../../images/icons8-american-express-30.svg";
import paypal from "../../images/icons8-paypal-30.svg";
import discover from "../../images/icons8-discover-card.svg";
import ResponsAccordion from "../../components/accordion";

const Footer = () => {
  return (
    <div className="accordion">
      <ResponsAccordion />
      <div id="Footer">
        <div className="container">
          <div className="footer">
            <div className="footer-input">
              <h2 className="footer-header">Don't miss a thing</h2>
              <p className="footer-parag">
                Enter your email below to be the first to know about new
                collections and product launches.
              </p>
              <div className="input">
                <HiOutlineEnvelope className="inputMessage" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="footerInput"
                />
                <FaArrowRight className="inputNav" />
              </div>
            </div>

            <div className="footer-list">
              <ul>
                <li className="serv-info">SERVICES</li>
                <li>
                  <NavLink to={"/"}> Privacy policy </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink to={"/"}> Refund policy </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink to={"/"}> Shipping & Return </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink to={"/"}> Term & conditions </NavLink>
                </li>
              </ul>

              <ul>
                <li className="serv-info">INFORMATION</li>
                <li>
                  <NavLink to={"/"}> My account </NavLink>
                </li>
                <li>
                  <NavLink to={"/"}> Cart </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink to={"/"}> Wishlist </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink to={"/"}> Product Compare </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-down">
            <p className="footer-txt">© Minimog 2022</p>

            <div className="icons">
              <a href="https://www.pinterest.com/" target={"_blank"}>
                {" "}
                <FaPinterestP className="social-media" />{" "}
              </a>
              <a href="https://www.facebook.com/" target={"_blank"}>
                <FaFacebookF className="social-media" />
              </a>
              <a href="https://www.instagram.com/" target={"_blank"}>
                <FaInstagram className="social-media" />
              </a>
              <a href="https://twitter.com/" target={"_blank"}>
                <FaTwitter className="social-media" />
              </a>
              <img src={visaCard} alt="" title="Visa" />
              <img
                src={masterCard}
                alt=""
                width={"35px"}
                height={"30px"}
                title="Mastercard"
              />
              <img src={americanExp} alt="" title="American Express" />
              <img src={paypal} alt="" title="PayPal" />
              <img src={discover} alt="" title="Discover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
