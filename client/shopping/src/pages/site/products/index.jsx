import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../../redux-toolkit/slice/dataSlice";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./index.scss";
import { CiStar } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";

const AllProducts = () => {
  const products = useSelector((state) => state.getDataReducer);
  const wishlist = useSelector((state) => state.wishlistReducer);
  const dispatch = useDispatch();
  const [sort, setSort] = useState(true);

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

  return (
    <div id="Products">
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
          <form action="">
            <label htmlFor="sort"></label>
            <select name="sort" id="sort">
              <option value="lowest">
                {" "}
                <button onClick={() => handleSort()}>Price(lowest)</button>{" "}
              </option>
              <option value="lowest"> Price(highest) </option>
            </select>
          </form>

          <input
            onChange={(e) => dispatch(getData(e.target.value))}
            type="text"
            placeholder="Search products..."
            className="product-search"
          />
        </div>

        <div className="productCards">
          {products.data?.map((product) => {
            return (
              <>
                <div className="cards">
                  <div className="images">
                    <Link to={`/details/${product._id}`}>
                      <img src={product.image1} alt="" className="cardImg immg"/>
                      <img src={product.image3} alt="" className="img-top immg" />
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
                      onClick={() => {
                        return onOpen(), findId(product);
                      }}
                      className="chakraBtn"
                    >
                      <FaRegEye className="view action-icon" />
                    </button>

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
    </div>
  );
};

export default AllProducts;
