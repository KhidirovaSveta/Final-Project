import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./styles.scss";

import { Link } from "react-router-dom";
import { Navigation } from "swiper";
import { useDispatch, useSelector } from "react-redux";
import { productsAction } from "../../redux/action/products.action";

const Carousel = () => {
  const productCard = useSelector((state) => state.productsReducer);
  const dispatch = useDispatch();

  const getData = () => {
    dispatch(productsAction());
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="container">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          loop={"true"}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {productCard?.data?.map((product) => {
            return (
              <SwiperSlide key={product._id}>
                <div className="card">
                  <Link to={"/"}>
                    <img src={product.image1} alt="" className="cardImg" />
                    <p className="productName">{product.name}</p>
                    <span className="price">${product.price}.00</span>
                  </Link>
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
