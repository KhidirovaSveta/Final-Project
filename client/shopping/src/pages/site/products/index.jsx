import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../../redux-toolkit/slice/dataSlice";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./index.scss";

const AllProducts = () => {
  const products = useSelector((state) => state.getDataReducer);
  const dispatch = useDispatch();
  const [sort, setSort] = useState(true);

  useEffect(() => {
    dispatch(getData());
  }, []);

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
                <div className="productCard">
                  <img
                    src={product.image1}
                    alt={product.name}
                    className="products-img"
                  />
                  <div className="productCardinfo">
                    <h2>{product.name}</h2>
                    <p>${product.price}.00</p>
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
