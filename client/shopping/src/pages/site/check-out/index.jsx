import React, { useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import "./index.scss";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "../../../redux-toolkit/slice/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const PaymentSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  address: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  apartment: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  postal: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  city: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const CheckOut = () => {
  const cart = useSelector((state) => state.cartSliceReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  return (
    <div id="CheckOut">
      <div className="check-out-container">
        <div className="left">
          <h2 className="checkOutHeader"> Sweeties Payment </h2>
          <div className="navlink">
            <Link to={"/cart"}> Cart </Link>
            <FiChevronRight className="right" />
            <Link to={"/check-out"}> Information </Link>
            <FiChevronRight className="right" />
            <p>Shipping</p>
            <FiChevronRight className="right" />
            <p>Payment</p>
          </div>
          <p className="contactİnfo">Contact information</p>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
            }}
            validationSchema={PaymentSchema}
            onSubmit={(values) => {
              // same shape as initial values
              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="allInputs">
                  <Field
                    name="email"
                    type="email"
                    placeholder="Email or mobile phone number"
                    className="wInput"
                  />
                  {errors.email && touched.email ? (
                    <div>{errors.email}</div>
                  ) : null}
                </div>

                <h3 className="contactİnfo">Shipping address</h3>

                <div className="allInputs">
                  <Field name="firstName" placeholder="First Name" />
                  {errors.firstName && touched.firstName ? (
                    <div>{errors.firstName}</div>
                  ) : null}
                  <Field name="lastName" placeholder="Last Name" />
                  {errors.lastName && touched.lastName ? (
                    <div>{errors.lastName}</div>
                  ) : null}
                </div>
                <div className="allInputs">
                  <Field
                    name="address"
                    placeholder="Address"
                    className="wInput"
                  />
                  {errors.address && touched.address ? (
                    <div>{errors.address}</div>
                  ) : null}
                </div>
                <div className="allInputs">
                  <Field
                    name="apartment"
                    placeholder="Apartment, suite, etc, (optional)"
                    className="wInput"
                  />
                  {errors.apartment && touched.apartment ? (
                    <div>{errors.apartment}</div>
                  ) : null}
                </div>
                <div className="allInputs">
                  <Field name="postal" placeholder="Postal code" />
                  {errors.postal && touched.postal ? (
                    <div>{errors.postal}</div>
                  ) : null}
                  <Field name="city" placeholder="City" />
                  {errors.city && touched.city ? (
                    <div>{errors.city}</div>
                  ) : null}
                </div>
                <div className="continue-shopping">
                  <Link to="/cart">
                    <span className="spanBtn">
                      <FiChevronLeft />
                      Return to Cart
                    </span>
                  </Link>
                    <button type="submit" className="shipping">
                      Continue to shipping
                    </button>
                </div>
              </Form>
            )}
          </Formik>{" "}
        </div>

        <div className="right-section">
          {cart.cartItem?.length === 0 ? (
            <div className="cart-empty">
              <p>Your cart is currently empty</p>
              <div className="start-shopping">
                <Link to="/">
                  <span>Start Shopping</span>
                </Link>
              </div>
            </div>
          ) : (
            <div>
              <div className="cart-items">
                {cart.cartItems &&
                  cart.cartItems.map((cartItem) => (
                    <div className="cart-item" key={cartItem.id}>
                      <div className="cart-product">
                        <img
                          src={cartItem.image1}
                          alt={cartItem.name}
                          className="product-check"
                        />
                        <div>
                          <h3 className="card-product-name">{cartItem.name}</h3>
                        </div>
                      </div>
                      <div className="cart-product-total-price">
                        ${cartItem.price * cartItem.cartQuantity}
                      </div>
                    </div>
                  ))}
              </div>
              <div className="cart-summary">
                <div className="cart-checkout">
                  <div className="subtotal">
                    <span>Subtotal</span>
                    <span className="amount">${cart.cartTotalAmount}</span>
                  </div>
                  <div className="subtotal">
                    <span>Shipping</span>
                    <span className="amount">Free</span>
                  </div>
                  <div className="subtotal">
                    <span>Total</span>
                    <span className="amount">${cart.cartTotalAmount}</span>
                  </div>
                </div>
              </div>

            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
