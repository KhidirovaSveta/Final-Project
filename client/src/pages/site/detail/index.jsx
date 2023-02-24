import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import "./index.scss";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { CiStar } from "react-icons/ci";
// import {
//   cardAction,
//   delwishlistAction,
//   productsAction,
//   wishlistAction,
// } from "../../../redux/action/products.action";
import { addData, deleteData } from "../../../redux-toolkit/slice/wishlistSlice";

const Details = () => {
  const [product, setProduct] = useState([]);
  const { _id } = useParams();

  const wishlist = useSelector((state) => state.wishlistReducer);
  const dispatch = useDispatch();

  // const data = () => {
  //   dispatch(getData());
  // };

  // useEffect(() => {
  //   data();
  // }, []);

  // const handleCard = (obj) => {
  //   dispatch(cardAction(obj));
  // };

  const getData = async () => {
    let response = await axios.get(`http://localhost:8080/sweeties/${_id}`);
    setProduct(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div id="Details">
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
            <div className="rest-img">
              <img src={product.image1} alt="" width={"100px"} />
              <img src={product.image2} alt="" width={"100px"} />
              <img src={product.image3} alt="" width={"100px"} />
              <img src={product.image4} alt="" width={"100px"} />
            </div>
            <img src={product.image1} alt="" width={"550px"} />
          </div>
          <div className="details-info">
            <div className="detail-title">
              <h1 className="detailsHeader">{product.name}</h1>

              {wishlist.data.find((e) => e._id === product._id) ? (
                <div
                  onClick={() => dispatch(deleteData(product._id))}
                >
                  <CiStar className="wishlist action-icon  wishlist-added" />
                </div>
              ) : (
                <div
                  onClick={() => dispatch(addData(product))}
                >
                  <CiStar className="wishlist action-icon" />
                </div>
              )}
            </div>
            <p className="price">${product.price}.00</p>
          </div>
        </div>

        {/* Info section */}

        <Tabs>
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
