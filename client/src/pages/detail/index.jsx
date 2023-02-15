import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import "./index.scss";

const Details = () => {
  const [product, setProduct] = useState([]);
  const { _id } = useParams();

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
            <img src={product.image1} alt="" width={"320px"} />
            <img src={product.image2} alt="" width={"320px"} />
            <img src={product.image3} alt="" width={"320px"} />
            <img src={product.image4} alt="" width={"320px"} />
          </div>
          <div className="details-info">
            <h1 className="detailsHeader">{product.name}</h1>
            <p className="price">${product.price}.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
