import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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

  return <div id="Details">
    <div className="container">
        <img src={product.image1} alt="" width={"350px"} />
    </div>
  </div>;
};

export default Details;
