import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.scss";
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
// import { deleteCardAction } from "../../../redux/action/products.action";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "../../../redux-toolkit/slice/cartSlice";

const Cart = () => {
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
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // const handleDelete = (e) => {
  //   dispatch(deleteCardAction(e));
  // };

  return (
    <div id="Card">
      <div className="container">
        <div className="cardHeader">
          <h1 className="shopCard">Shopping Cart</h1>
          <div className="navlink">
            <Link to={"/"}> Home </Link>
            <FiChevronRight className="right" />
            <p>Your Shopping Cart</p>
          </div>
        </div>
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
            <div className="titles">
              <h3 className="product-title">Product</h3>
              <h3 className="price">Price</h3>
              <h3 className="quantity">Quantity</h3>
              <h3 className="total">Total</h3>
            </div>
            <div className="cart-items">
              {cart.cartItems &&
                cart.cartItems.map((cartItem) => (
                  <div className="cart-item" key={cartItem.id}>
                    <div className="cart-product">
                      <img src={cartItem.image1} alt={cartItem.name} />
                      <div>
                        <h3 className="card-product-name">{cartItem.name}</h3>
                        <button className="cartRemoveBtn" onClick={() => handleRemoveFromCart(cartItem)}>
                          Remove
                        </button>
                      </div>
                    </div>
                    <div className="cart-product-price">${cartItem.price}</div>
                    <div className="cart-product-quantity">
                      <button onClick={() => handleDecreaseCart(cartItem)}>
                        -
                      </button>
                      <div className="count">{cartItem.cartQuantity}</div>
                      <button onClick={() => handleAddToCart(cartItem)}>
                        +
                      </button>
                    </div>
                    <div className="cart-product-total-price">
                      ${cartItem.price * cartItem.cartQuantity}
                    </div>
                  </div>
                ))}
            </div>
            <div className="cart-summary">
              <button className="clear-btn" onClick={() => handleClearCart()}>
                Clear Cart
              </button>
              <div className="cart-checkout">
                <div className="subtotal">
                  <span>Subtotal</span>
                  <span className="amount">${cart.cartTotalAmount}</span>
                </div>
                <p className="sub-parag">Taxes and shipping calculated at checkout</p>
                <button>Check out</button>
                <div className="continue-shopping">
                  <Link to="/">
                    <span>Continue Shopping</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
