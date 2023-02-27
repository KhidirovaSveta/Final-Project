import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import "./index.scss"

import {
  FaPinterestP,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

import { BsArrowRight } from "react-icons/bs";
import { HiOutlineEnvelope } from "react-icons/hi2";
import masterCard from "../../images/icons8-mastercard-30.svg";
import visaCard from "../../images/icons8-visa-30.svg";
import americanExp from "../../images/icons8-american-express-30.svg";
import paypal from "../../images/icons8-paypal-30.svg";
import discover from "../../images/icons8-discover-card.svg";

const ResponsAccordion = () => {
  return (
    <div id="accordion">
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem className="accor-item">
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                DON'T MISS A THING
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <div className="footer-input">
              <p className="footParag">
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
                <BsArrowRight className="inputNav" />
              </div>
            </div>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                SERVICES
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <ul>
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
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                INFORMATION
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <ul>
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
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

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
  );
};

export default ResponsAccordion;
