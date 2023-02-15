import React, { Component, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { productsAction } from "../../redux/action/products.action";
import "./index.scss";
import { FiArrowLeft } from "react-icons/fi";

const ProdCarous = () => {
  const productCard = useSelector((state) => state.productsReducer);
  const dispatch = useDispatch();

  const getData = () => {
    dispatch(productsAction());
  };

  useEffect(() => {
    getData();
  }, []);

  const settings = {
    className: "margin-left: -15px",
    infinite: true,
    centerPadding: "150px",
    slidesToShow: 4,
    swipeToSlide: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };
  return (
    <div className="container">
      <Slider {...settings}>
        {productCard?.data?.map((product) => {
          return (
            <div className="carousel">
              <img src={product.image1} alt="" width={"100%"} />
              <div className="product-info">
                <p className="productName">{product.name}</p>
                <span className="price">${product.price}.00</span>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ProdCarous;
