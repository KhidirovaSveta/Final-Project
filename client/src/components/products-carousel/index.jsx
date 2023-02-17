import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./styles.scss";

import { Link } from "react-router-dom";
import { Navigation } from "swiper";
import { useDispatch, useSelector } from "react-redux";
import {
  cardAction,
  delwishlistAction,
  productsAction,
  wishlistAction,
} from "../../redux/action/products.action";
// import "swiper/css/navigation";
import { CiStar } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
// import ModalView from "../quick-view";

const Carousel = () => {
  const productCard = useSelector((state) => state.productsReducer);
  const wishlist = useSelector((state) => state.wishlistReducer);
  const card = useSelector((state) => state.cardReducer);
  const dispatch = useDispatch();

  const getData = () => {
    dispatch(productsAction());
  };

  useEffect(() => {
    getData();
  }, []);

    const handleCard = (obj) => {
     dispatch(cardAction(obj));
   };

  // const handleWishList = (obj) => {
  //   dispatch(wishlistBasketAction(obj));
  // };
  // const handleDelete = (e) => {
  //   dispatch(delwishlistBasketAction(e));
  // };

  return (
    <div>
      <div className="container">
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          loop={"true"}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          breakpoints={{
            250: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            375: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
            992: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
          {productCard?.data?.map((product) => {
            return (
              <SwiperSlide key={product._id}>
                <div className="cards">
                  <div className="images">
                    <Link to={`/details/${product._id}`}>
                      <img src={product.image1} alt="" className="cardImg" />
                      <img src={product.image2} alt="" className="img-top" />
                    </Link>

                    {wishlist.find((e) => e._id === product._id) ? (
                      <div
                        onClick={() =>
                          dispatch(delwishlistAction(product._id))
                        }
                        className="icon"
                      >
                        <CiStar className="wishlist action-icon  wishlist-added" />
                      </div>
                    ) : (
                      <div
                        onClick={() => dispatch(wishlistAction(product))}
                        className="icon"
                      >
                        <CiStar className="wishlist action-icon" />
                      </div>
                    )}

                    <br />
                    <FaRegEye className="view action-icon" />
                    <button className="quick-add-btn" onClick={() => handleCard(product)}> QUICK ADD</button>
                  </div>
                  <div className="product-info">
                    <p className="productName">{product.name}</p>
                    <span className="price">${product.price}.00</span>
                    {/* <ModalView/> */}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
