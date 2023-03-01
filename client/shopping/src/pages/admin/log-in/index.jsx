import React from "react";
import "./index.scss";
import { Formik, Form, Field } from "formik";
import { Link, NavLink } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import Button from "../../../components/button";
import LogInSchema from "./schema";
import logInUser from "../../../apiColls/user";

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
              <Formik
                initialValues={{
                  password: "",
                  email: "",
                }}
                validationSchema={LogInSchema}
                onSubmit={async (values) => {
                  await logInUser({
                    email: values.email,
                    password: values.password,
                  });
                  window.location.href = "/"
                  localStorage.setItem("token", values.data)
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <Field
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      className="loginInput"
                    />
                    {errors.email && touched.email ? (
                      <div>
                        <p className="red-txt">{errors.email}</p>
                      </div>
                    ) : null}
                    <Field
                      name="password"
                      placeholder="Password"
                      className="loginInput"
                    />
                    {errors.password && touched.password ? (
                      <div>
                        <p className="red-txt">{errors.password}</p>
                      </div>
                    ) : null}{" "}
                    <br />
                    <NavLink to={"/login"}>Forgot your password?</NavLink>
                    <button type="submit" className="signinBtn">
                      {" "}
                      LOG IN{" "}
                    </button>
                  </Form>
                )}
              </Formik>
            </div>

            <div className="newCus">
              <h3 className="newCusHeader">New Customer</h3>
              <p className="newCusParag">
                Sign up for early Sale access plus tailored new arrivals, trends
                and promotions. To opt out, click unsubscribe in our emails.
              </p>
              <NavLink to={"/register"}>
                {" "}
                <Button btnName={"REGISTER"} />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
