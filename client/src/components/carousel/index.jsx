import React, { Component, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { productsAction } from "../../redux/action/products.action";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green"}}
      onClick={onClick}
    />
  );
}

const Carusel = () => {
  const productCard = useSelector((state) => state.productsReducer);
  const dispatch = useDispatch();

  const getData = () => {
    dispatch(productsAction());
  };

  useEffect(() => {
    getData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };


  return (
    <div>
      <h2>Custom Arrows</h2>
      <Slider {...settings}>
        {productCard?.data?.map((product) => {
          return (
            <div>
              <img src={product.image1} alt="" width={"100%"} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carusel;
