import React from "react";
import "./index.scss";
import NotCake from "../../../images/Velver.jpg";
import {Helmet} from "react-helmet";

const NotFound = () => {
  return (
    <div id="NotFound">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Not Found</title>
      </Helmet>
      <div className="container">
        <div className="not">
          <h1 className="num4">4</h1>
          <img src={NotCake} alt="Red Velvet" className="velvetImg" />
          <h1 className="num4">4</h1>
        </div>
        <h2 className="not-text">You've found a page that doesn't exist</h2>
      </div>
    </div>
  );
};

export default NotFound;
