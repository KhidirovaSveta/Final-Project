import React from "react";
import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import RegisterSchema from "./schema/index";
import { Formik, Form, Field } from "formik";

const Register = () => {
  return (
    <div id="Register">
      <div className="container">
        <div className="register-section">
          <h1 className="registerHeader"> Register </h1>
          <div className="navlink">
            <Link to={"/"}> Home </Link>
            <FiChevronRight className="right" />
            <p>Create Account</p>
          </div>

          <div className="register">
            <h3 className="registrHeader">Register</h3>
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                password: "",
              }}
              validationSchema={RegisterSchema}
              onSubmit={(values) => {
                // same shape as initial values
                console.log(values);
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="registInputs">
                    <Field name="firstName"  placeholder="First Name"/>
                    {errors.firstName && touched.firstName ? (
                      <div><p className="red-txt">{errors.firstName}</p></div>
                    ) : null}
                  </div>

                  <div className="registInputs">
                    <Field name="lastName" placeholder="Last Name" />
                    {errors.lastName && touched.lastName ? (
                      <div><p className="red-txt">{errors.lastName}</p></div>
                    ) : null}
                  </div>

                  <div className="registInputs">
                    <Field name="email" type="email" placeholder="Email" />
                    {errors.email && touched.email ? (
                      <div><p className="red-txt">{errors.email}</p></div>
                    ) : null}
                  </div>

                  <div className="registInputs">
                    <Field
                      name="password"
                      placeholder="Password"
                      className="loginInput"
                    />
                    {errors.password && touched.password ? (
                      <div>
                        <p className="red-txt">{errors.password}</p>
                      </div>
                    ) : null}
                  </div>
                </Form>
              )}
            </Formik>

            <p className="signUpParag">
              Sign up for early Sale access plus tailored new arrivals, trends
              and promotions. To opt out, click unsubscribe in our emails.
            </p>

            <button className="regBtn btn">REGISTER</button>
            <br />
            <NavLink to={"/login"}>
              {" "}
              <button className="loginBtn btn"> LOG IN </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
