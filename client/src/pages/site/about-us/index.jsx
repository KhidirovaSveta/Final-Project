import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

import Cookie from "../../../images/Cookie_about.webp";

import FunImg from "../../../images/fun.webp";
import PartyPacks from "../../../images/party_packs.webp";
import AboutCarousel from "../../../components/about-carousel";

const AboutUs = () => {
  return (
    <div id="AboutUs">
      <div className="aboutHeader">
        <h1 className="aboutHeaderTag">About Us </h1>
        <div className="navlink">
          <Link to={"/"}> Home </Link>
          <FiChevronRight className="right" />
          <p>About us</p>
        </div>
      </div>
      <div className="container">
        <div className="first-about-section">
          <img src={Cookie} alt="Cookie" className="cookieimg" />
          <div className="accordion-side">
            <Accordion>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      What's Sweeties?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  We are an award-winning bakery founded in 2008 by chef
                  Christina Tosi, known for harnessing familiar flavors and
                  ingredients with mind-blowing results — think potato chips in
                  a cookie, or an updated riff on the box cake you grew up with.
                  We’ve got stores across the country and we ship our treats
                  nationwide. Go ahead, grab yourself a treat. Maybe you’ll see
                  things our way.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Why is Sweeties coming to the grocery store?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  We think the aisles are missing something — a little thing
                  called fun. We’re all about treating yourself every day.
                  That’s why we made these snackable goodies to bring you a
                  little joy wherever, whenever.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      I love Sweeties! Are these the cookies and Cake Truffles I
                      know?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  You’ve got great taste. Our supermarket treats are inspired by
                  the cookies and Cake Truffles you know and love, but are
                  reimagined for the grocery aisles. Now available in convenient
                  2-packs for anytime snacking, these treats can be enjoyed
                  anytime, anywhere.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Why is Sweeties coming to the grocery store?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>Where can I get them?</AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      <img src={FunImg} alt="" className="middleImg" />
      <div className="community-section">
        <h2 className="ourCommunity">Our Community</h2>
        <p className="followUs">
          Follow us on Instagram <span className="ig">@Sweeties</span> & tag us
          in your pics to get featured!
        </p>
        <AboutCarousel />
      </div>

      <div className="container">
        <div className="second-about-section">
          <div className="second-about-section-text">
            <h2 className="second-about-section-header">The Perfect Gift</h2>
            <p className="second-about-section-parag">
              Know someone with a birthday, anniversary, or just a great reason
              to celebrate? Send them an extra tasty surprise shipped straight
              to their door. We’re talking iconic cakes, pies, cookies, cake
              truffles, and more. Our treats ship with cold-packs and insulated
              packaging so they arrive fresh and ready to devour.
            </p>
          </div>
          <img src={PartyPacks} alt="" className="cakeImg" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
