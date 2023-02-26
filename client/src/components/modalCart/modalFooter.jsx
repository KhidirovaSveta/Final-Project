import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getTotals } from '../../redux-toolkit/slice/cartSlice';
import { Link } from "react-router-dom";
import "./modalCartFooter.scss"

const ModalCartFooter = () => {
    const cart = useSelector((state) => state.cartSliceReducer);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getTotals());
    }, [cart, dispatch]);
    return (
          <>
            {cart.cartItem?.length === 0 ? (
              <div className="cart-empty">
                <p>Your cart is currently empty</p>
              </div>
            ) : (
              <div>
                <div className="cart-summary">
                  <div className="cart-checkout">
                    <div className="subtotal">
                      <span>Subtotal</span>
                      <span className="amount">${cart.cartTotalAmount}.00</span>
                    </div>
                    <button className="modalCheckBtn">Check out</button>
                    <div className="continue-shopping">
                      <Link to="/cart">
                        <span className="viewCart">View cart</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
      );
}

export default ModalCartFooter