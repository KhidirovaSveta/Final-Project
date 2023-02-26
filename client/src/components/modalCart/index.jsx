import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./index.scss";

import {
  addToCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "../../redux-toolkit/slice/cartSlice";

const ModalCart = () => {
  const cart = useSelector((state) => state.cartSliceReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  return (
    <div id="ModalCard">
      <div className="container">
        {cart.cartItem?.length === 0 ? (
          <div className="cart-empty">
            <p>Your cart is currently empty</p>
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
                        className="modalCartImg"
                      />
                      <div>
                        <h3 className="card-product-name">{cartItem.name}</h3>

                        <div className="cart-product-price">
                          ${cartItem.price}.00
                        </div>
                        <div className="cart-product-quantity">
                          <button
                            className="quantityBtn"
                            onClick={() => handleDecreaseCart(cartItem)}
                          >
                            -
                          </button>
                          <div className="count">{cartItem.cartQuantity}</div>
                          <button
                            className="quantityBtn"
                            onClick={() => handleAddToCart(cartItem)}
                          >
                            +
                          </button>
                        <button
                          className="cartRemoveBtn"
                          onClick={() => handleRemoveFromCart(cartItem)}
                        >
                          Remove
                        </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalCart;
