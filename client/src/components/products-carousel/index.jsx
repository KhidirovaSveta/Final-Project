import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./styles.scss";

import { Link } from "react-router-dom";
import { Navigation } from "swiper";
import { useDispatch, useSelector } from "react-redux";
import { productsAction, wishlistBasketAction } from "../../redux/action/products.action";
// import "swiper/css/navigation";
import { CiStar } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
// import ModalView from "../quick-view";

const Carousel = () => {
  const productCard = useSelector((state) => state.productsReducer);
  const dispatch = useDispatch();

  const getData = () => {
    dispatch(productsAction());
  };

  useEffect(() => {
    getData();
  }, []);

  const handleWishList = (obj) => {
    dispatch(wishlistBasketAction(obj));
  };

  return (
    <div>
      <div className="container">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          loop={"true"}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {productCard?.data?.map((product) => {
            return (
              <SwiperSlide key={product._id}>
                <div className="card">
                  <div className="images">
                    <Link to={`/details/${product._id}`}>
                      <img src={product.image1} alt="" className="cardImg" />
                      <img src={product.image2} alt="" className="img-top" />
                    </Link>
                    <button className="action-btn" onClick={() => handleWishList(product)}>
                      <CiStar className="wishlist action-icon" />
                    </button>
                    <br />
                    <FaRegEye className="view action-icon" />
                    <button className="quick-add-btn"> QUICK ADD</button>
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
