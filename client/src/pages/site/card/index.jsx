import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.scss";
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import { deleteCardAction } from "../../../redux/action/products.action";

const Card = () => {
  const card = useSelector((state) => state.cardReducer);

  const dispatch = useDispatch();

  const handleDelete = (e) => {
    dispatch(deleteCardAction(e));
  };

  return (
    <div className="card">
      <div className="cardHeader">
        <h1 className="shopCard">Shopping Cart</h1>
        <div className="navlink">
          <Link to={"/"}> Home </Link>
          <FiChevronRight className="right" />
          <p>Your Shopping Cart</p>
        </div>
      </div>

      <div className="container">
        <table>
          <thead>
            <th> Product </th>
            <th> Price </th>
            <th> Quantity</th>
            <th> Total </th>
          </thead>

          <tbody>
            {card?.map((products, id) => {
              return (
                <tr key={id}>
                  <td className="card-frst-section">
                    {" "}
                    <img src={products.image1} alt="" className="cardImg" />
                    <div className="card-info">
                    <h3>{products.name}</h3>
                      <button
                        className="delBtn"
                        onClick={() => handleDelete(products)}
                      >
                        Remove
                      </button>
                    </div>
                  </td>
                  <td>${products?.price}</td>
                  <td className="product">Quantity</td>
                  <td>total</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Card;
