import React from "react";
import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import Button from "../../components/button";

const LogIn = () => {
  return (
    <div id="LogIn">
      <div className="container">
        <div className="login-section">
          <h1 className="logInHeader">Log In</h1>
          <div className="navlink">
            <Link to={"/"}> Home </Link>
            <FiChevronRight className="right" />
            <p>Account</p>
          </div>

          <div className="login-container">
            <div className="login">
              <h3 className="loginTxt">Log In</h3>
              <input type="email" placeholder="Email" className="loginInput" />
              <br />
              <input
                type="password"
                placeholder="Password"
                className="loginInput"
              />
              <br />
              <NavLink to={"/"}> Forgot your password? </NavLink>
              <button className="signinBtn"> SIGN IN </button>
            </div>

            <div className="newCus">
              <h3 className="newCusHeader">New Customer</h3>
              <p className="newCusParag">
                Sign up for early Sale access plus tailored new arrivals, trends
                and promotions. To opt out, click unsubscribe in our emails.
              </p>
             <NavLink to={"/register"}> <Button btnName={"REGISTER"} /></NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
