import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import "./index.scss";
import { Link } from "react-router-dom";
import { delwishlistBasketAction } from "../../redux/action/products.action";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlistBasketReducer);
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    dispatch(delwishlistBasketAction(e));
  };

  return (
    <div className="wishList">
      {wishlist.map((sweeties) => {
        return (
          <div className="wish">
            <div className="items">
              <div className="item">
                <div className="image">
                  <img src={sweeties?.image1} alt="" width={'250px'}/>
                </div>
                <div className="wishlist-info">
                  <h2>{sweeties?.name}</h2>
                  <p>${sweeties?.price}</p>
                  <Link to={`/details/${sweeties._id}`}> View details </Link>
                  <button
                    onClick={() => {
                      handleDelete(sweeties);
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Wishlist;
