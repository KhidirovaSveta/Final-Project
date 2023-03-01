import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../../redux-toolkit/slice/dataSlice";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./index.scss";
import { CiStar } from "react-icons/ci";
import {
  addData,
  deleteData,
} from "../../../redux-toolkit/slice/wishlistSlice";
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
import ModalCart from "../../../components/modalCart";
import ModalCartFooter from "../../../components/modalCart/modalFooter";
import {Helmet} from "react-helmet";

const AllProducts = () => {
  const products = useSelector((state) => state.getDataReducer);
  const wishlist = useSelector((state) => state.wishlistReducer);
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [sort, setSort] = useState(true);
  const btnRef = React.useRef();
  const [load, setLoad] = useState(8);

  useEffect(() => {
    dispatch(getData());
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  // const handleSortByPrice = () => {
  //   setSort(!sort);
  //   sort ? dispatch(getData(1)) : dispatch(getData(""));
  // };

  const handleSort = () => {
    let sort = products.sort((a, b) => (a.price > b.price ? 1 : -1));
    setSort([...sort]);
  };

  const loadMore = () => {
    setLoad(load + load);
  };

  const slice = products?.data?.slice(0, load);

  return (
    <div id="Products">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Products</title>
      </Helmet>
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
              <ModalCart />
            </DrawerBody>

            <DrawerFooter>
              <ModalCartFooter />
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
      <div className="allProductsHeader">
        <h1 className="all-products"> Products</h1>
        <div className="navlink">
          <Link to={"/"}> Home </Link>
          <FiChevronRight className="right" />
          <p>Products</p>
        </div>
      </div>
      <div className="container">
        <div className="sortSear">
          <input
            onChange={(e) => dispatch(getData(e.target.value))}
            type="text"
            placeholder="Search products..."
            className="product-search"
          />

        </div>

        <div className="productCards">
          {slice.map((product) => {
            return (
              <>
                <div className="cards" key={product._id}>
                  <div className="images">
                    <Link to={`/details/${product._id}`}>
                      <img
                        src={product.image1}
                        alt={product.name}
                        className="cardImg immg"
                      />
                      <img
                        src={product.image3}
                        alt={product.name}
                        className="img-top immg"
                      />
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

                    <br />

                    <button
                      className="quick-add-btn"
                      onClick={() => {
                        onOpen(), handleAddToCart(product);
                      }}
                    >
                      QUICK ADD
                    </button>

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
              </>
            );
          })}
        </div>
      </div>
      <button className="loadBtn" onClick={() => loadMore()}>
        {" "}
        LOAD MORE{" "}
      </button>
    </div>
  );
};

export default AllProducts;
