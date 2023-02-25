import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./styles.scss";

import { Link } from "react-router-dom";
import { Navigation } from "swiper";
import { useDispatch, useSelector } from "react-redux";
import { CiStar } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";

// import {
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
//   useDisclosure,
//   Button,
// } from "@chakra-ui/react";

// import ModalViewCarousel from "../quick-view";

import { getData } from "../../redux-toolkit/slice/dataSlice";
import { addData, deleteData } from "../../redux-toolkit/slice/wishlistSlice";
import { addToCart } from "../../redux-toolkit/slice/cartSlice";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import ModalCart from "../modalCart";
import ModalCartFooter from "../modalCart/modalFooter";

const Carousel = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.getDataReducer);
  const wishlist = useSelector((state) => state.wishlistReducer);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  useEffect(() => {
    dispatch(getData());
  }, []);

  const findId = (obj) => {
    console.log(obj);
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      {/* <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ModalViewCarousel />
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal> */}

      <>
        
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Shopping Cart</DrawerHeader>

            <DrawerBody>
              <ModalCart/>
            </DrawerBody>

            <DrawerFooter>
              <ModalCartFooter/>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>

      <div className="container">
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          loop={"true"}
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
          {products?.data?.map((product) => {
            return (
              <SwiperSlide key={product._id}>
                <div className="cards">
                  <div className="images">
                    <Link to={`/details/${product._id}`}>
                      <img src={product.image1} alt="" className="cardImg" />
                      <img src={product.image2} alt="" className="img-top" />
                    </Link>

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
                    {/* {wishlist.find((e) => e._id === product._id) ? (
                      <div
                        onClick={() => dispatch(delwishlistAction(product._id))}
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
                    )} */}

                    <br />
                    <Button
                      onClick={() => {
                        return onOpen(), findId(product);
                      }}
                      className="chakraBtn"
                    >
                      <FaRegEye className="view action-icon" />
                    </Button>

                    <Button
                      className="quick-add-btn"
                      onClick={() => {
                        onOpen(), handleAddToCart(product);
                      }}
                    >
                      QUICK ADD
                    </Button>

                    {/* <button
                      className="quick-add-btn"
                      onClick={() => {
                        onClick = { onOpen };
                        handleAddToCart(product);
                      }}
                    >
                      {" "}
                      QUICK ADD
                    </button> */}
                    
                  </div>
                  <div className="product-info">
                    <p className="productName">{product.name}</p>
                    <span className="price">${product.price}.00</span>
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
