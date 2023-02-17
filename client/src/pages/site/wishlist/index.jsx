import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./index.scss";
import { Link } from "react-router-dom";
import {
  cardAction,
  delwishlistAction,
} from "../../../redux/action/products.action";
import { IoTrashOutline } from "react-icons/io5";
import { FiChevronRight } from "react-icons/fi";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlistReducer);
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    dispatch(delwishlistAction(e));
  };

  const handleCard = (obj) => {
    dispatch(cardAction(obj));
  };

  return (
    <div className="wishList">
      <div className="wishHeader">
        <h1 className="wishlist">Wishlist</h1>
        <div className="navlink">
          <Link to={"/"}> Home </Link>
          <FiChevronRight className="right" />
          <p>Your Shopping Cart</p>
        </div>
      </div>

      <div className="container">
        <div className="wish-cards">
          {wishlist?.map((product) => {
            return (
              <div className="wish-card">
                <Link to={`/details/${product._id}`}>
                  <img src={product.image1} alt="" className="wishImg" />
                  <div className="wish-info">
                    <div className="w-i">
                      <h3> {product.name}</h3>
                      <button
                        className="delBtn"
                        onClick={() => handleDelete(product)}
                      >
                        <IoTrashOutline />
                      </button>
                    </div>
                      <p>${product.price}.00</p>
                  </div>
                </Link>
                <button
                  className="add-to-cardBtn"
                  onClick={() => handleCard(product)}
                >
                  {" "}
                  Add to Card{" "}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
