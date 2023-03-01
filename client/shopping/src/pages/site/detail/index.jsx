import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import "./index.scss";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { CiStar } from "react-icons/ci";
import {
  addData,
  deleteData,
} from "../../../redux-toolkit/slice/wishlistSlice";
import {
  addToCart,
  decreaseCart,
  getTotals,
} from "../../../redux-toolkit/slice/cartSlice";
import { Helmet } from "react-helmet";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import "./styles.scss";

import { FreeMode, Pagination, Navigation } from "swiper";

const Details = () => {
  const [product, setProduct] = useState([]);
  const { _id } = useParams();

  const wishlist = useSelector((state) => state.wishlistReducer);
  const cart = useSelector((state) => state.cartSliceReducer);
  const dispatch = useDispatch();

  const getData = async () => {
    let response = await axios.get(`http://localhost:8080/sweeties/${_id}`);
    setProduct(response.data);
  };

  useEffect(() => {
    getData();
    dispatch(getTotals());
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };

  // const data = () => {
  //   dispatch(getData());
  // };

  // useEffect(() => {
  //   data();
  // }, []);

  // const handleCard = (obj) => {
  //   dispatch(cardAction(obj));
  // };

  return (
    <div id="Details">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{product.name}</title>
      </Helmet>
      <div className="container">
        <div className="navlink">
          <Link to={"/"}> Home </Link>
          <FiChevronRight className="right" />
          <Link to={"/"}> Cake </Link>
          <FiChevronRight className="right" />
          <p className="product-name">{product.name}</p>
        </div>

        <div className="detail">
          <div className="details-img">
            <>
              <Swiper
                slidesPerView={1}
                spaceBetween={0}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                modules={[FreeMode, Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img src={product.image1} alt="" width={"150"} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={product.image2} alt="" width={"150"} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={product.image3} alt="" width={"150"} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={product.image4} alt="" width={"150"} />
                </SwiperSlide>
              </Swiper>
            </>
          </div>

          <div className="details-info">
            <div className="detail-title">
              <h1 className="detailsHeader">{product.name}</h1>

              {wishlist.data.find((e) => e._id === product._id) ? (
                <div onClick={() => dispatch(deleteData(product._id))}>
                  <CiStar className="wishlist action-icon  wishlist-added" />
                </div>
              ) : (
                <div onClick={() => dispatch(addData(product))}>
                  <CiStar className="wishlist action-icon" />
                </div>
              )}
            </div>
            <p className="price">${product.price}.00</p>

            <p className="quantityParag">Quantity</p>
            <div className="add-to-cart">
              <div className="cart-product-quantity">
                <button onClick={() => handleDecreaseCart(product)}>-</button>
                <div className="count">{product.cartQuantity}</div>
                <button onClick={() => handleAddToCart(product)}>+</button>
              </div>

              <button
                onClick={() => handleAddToCart(product)}
                className="detailAddBtn"
              >
                {" "}
                ADD TO CART{" "}
              </button>
            </div>
          </div>
        </div>

        {/* Info section */}

        <Tabs className="productstabs">
          <TabList>
            <div className="tabsHeaders">
              <Tab className="tabHeader">Product description</Tab>
              <Tab className="tabHeader">Shipping & Return</Tab>
              <Tab className="tabHeader">Product reviews</Tab>
            </div>
          </TabList>
          <TabPanels>
            <TabPanel className="tabtxt">{product.description}</TabPanel>
            <TabPanel className="tabtxt">
              Shipping cost is based on weight. Just add products to your cart
              and use the Shipping Calculator to see the shipping price. We want
              you to be 100% satisfied with your purchase. Items can be returned
              or exchanged within 30 days of delivery.
            </TabPanel>
            <TabPanel className="tabtxt">
              <h1>Customer Reviews</h1>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
};

export default Details;
