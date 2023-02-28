import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./index.scss";
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import { deleteData } from "../../../redux-toolkit/slice/wishlistSlice";
import { addToCart } from "../../../redux-toolkit/slice/cartSlice";
import { CiStar } from "react-icons/ci";
import {Helmet} from "react-helmet";

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlistReducer);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  // const handleCard = (obj) => {
  //   dispatch(cardAction(obj));
  // };

  return (
    <div className="wishList">
       <Helmet>
        <meta charSet="utf-8" />
        <title>Wishlist</title>
      </Helmet>
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
          {wishlist?.data?.map((product) => {
            return (
              <div className="wish-card" key={product._id}>
                <Link to={`/details/${product._id}`}>
                  <img src={product.image2} alt={product.name} className="wishImg" />
                </Link>
                <div className="wish-info">
                  <div className="w-i">
                    <h3> {product.name}</h3>
                    {/* <button
                      className="delBtn"
                      onClick={() => handleDelete(product)}
                    >
                      <IoTrashOutline />
                    </button> */}

                    {wishlist.data.find((e) => e._id === product._id) ? (
                      <div
                        onClick={() => dispatch(deleteData(product._id))}
                        className="icon"
                      >
                        <CiStar className="wishlist action-icon  wishlist-added" />
                      </div>
                    ) : (
                      <div
                        onClick={() => dispatch(addData(product))}
                        className="icon"
                      >
                        <CiStar className="wishlist action-icon" />
                      </div>
                    )}
                  </div>
                  <p>${product.price}.00</p>
                </div>
                <button
                  className="add-to-cardBtn"
                  onClick={() => handleAddToCart(product)}
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
