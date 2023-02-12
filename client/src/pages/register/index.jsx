import React from "react";
import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";

const Register = () => {
  return (
    <div id="Register">
      <div className="container">
        <div className="register-section">
          <h1 className="registerHeader"> Register </h1>
          <div className="navlink">
            <Link to={"/"}> Home </Link>
            <FiChevronRight className="right" />
            <p>Account</p>
          </div>

            <div className="register">

          <h3>Register</h3>
          <div className="registInputs">
          <input type="text" placeholder="First Name"/>
          </div>
          <div className="registInputs">
          <input type="text" placeholder="Last Name"/>
          </div>
          <div className="registInputs">
          <input type="email" placeholder="Email"/>
          </div>
          <div className="registInputs">
          <input type="password" placeholder="Password"/>
          </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Register;
