import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./index.scss";
import { Link } from "react-router-dom";
import { delwishlistAction } from "../../redux/action/products.action";
import { IoTrashOutline } from "react-icons/io5";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlistReducer);
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    dispatch(delwishlistAction(e));
  };

  return (
    <div className="wishList">
      <div className="container">
        <table>
          <thead>
            <th> Product </th>
            <th> </th>
            <th> Price </th>
            <th> Stock status </th>
            <th> Brand</th>
          </thead>

          <tbody>
            {wishlist?.map((products, id) => {
              return (
                <tr key={id}>
                  <td>
                    {" "}
                    <Link to={`/details/${products._id}`}>
                      <img src={products.image1} alt="" className="wishImg" />
                    </Link>
                  </td>
                  <td>
                    {" "}
                    {products.name} <br />
                    <button
                      className="delBtn"
                      onClick={() => handleDelete(products)}
                    >
                      Remove
                    </button>
                  </td>
                  <td>${products?.price}</td>
                  <td className="product-availability">
                    {" "}
                    {products.availability}
                  </td>
                  <td>{products.brand}</td>
                  <td>
                    {" "}
                    <button> Add to Card </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Wishlist;
