import React from "react";
import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import RegisterSchema from "./schema/index";
import { Formik, Form, Field } from "formik";
import registerUser from "../../../apiColls/register";
import axios from "axios";


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
              onSubmit={async (values) => {
                const response = await axios.post(
                  "http://localhost:8080/user/signup",
                  values
                );
                console.log(response);
                if (response.status === 201) {
                  console.log(response.data);
                  localStorage.setItem("token", response.data.token);
                  message.success(response.message);
                  window.location.href = "/";
                } else {
                  message.error(response.message);
                }
                // await registerUser({
                //   firstName: values.firstName,
                //   lastName: values.lastName,
                //   email: values.email,
                //   password: values.password,
                // });
                // // window.location.href = "/login"
                // localStorage.setItem("token", values.data)
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="registInputs">
                    <Field name="firstName" placeholder="First Name" />
                    {errors.firstName && touched.firstName ? (
                      <div>
                        <p className="red-txt">{errors.firstName}</p>
                      </div>
                    ) : null}
                  </div>

                  <div className="registInputs">
                    <Field name="lastName" placeholder="Last Name" />
                    {errors.lastName && touched.lastName ? (
                      <div>
                        <p className="red-txt">{errors.lastName}</p>
                      </div>
                    ) : null}
                  </div>

                  <div className="registInputs">
                    <Field name="email" type="email" placeholder="Email" />
                    {errors.email && touched.email ? (
                      <div>
                        <p className="red-txt">{errors.email}</p>
                      </div>
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
                    <button className="regBtn btn">REGISTER</button>
                  </div>
                </Form>
              )}
            </Formik>

            <p className="signUpParag">
              Sign up for early Sale access plus tailored new arrivals, trends
              and promotions. To opt out, click unsubscribe in our emails.
            </p>

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
