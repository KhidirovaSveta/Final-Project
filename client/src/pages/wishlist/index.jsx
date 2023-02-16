import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./index.scss";
import { Link } from "react-router-dom";
import { delwishlistBasketAction } from "../../redux/action/products.action";
import { IoTrashOutline } from "react-icons/io5";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlistBasketReducer);
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    dispatch(delwishlistBasketAction(e));
  };

  return (
    <div className="wishList">
      <div className="container">
        <table>
          <thead>
            <th> </th>
            <th></th>
            <th> Product name </th>
            <th> Unit price </th>
            <th> Stock status </th>
            <th> Brand</th>
            <th> Detail </th>
          </thead>

          <tbody>
            {wishlist?.map((products, id) => {
              return (
                <tr key={id}>
                  <td>
                    <button
                      className="delBtn"
                      onClick={() => handleDelete(products)}
                    >
                      {" "}
                      <IoTrashOutline />{" "}
                    </button>
                  </td>

                  <td>
                    {" "}
                    <img src={products.image1} alt="" className="wishImg" />
                  </td>
                  <td> {products.name}</td>
                  <td>
                   ${products?.price}
                  </td>
                  <td className="product-availability">
                    {" "}
                    {products.availability}
                  </td>
                  <td>{products.brand}</td>
                  <td>
                    <Link to={`/details/${products._id}`}>
                      {" "}
                      Product Detail{" "}
                    </Link>
                  </td>
                  <td>
                  {" "}
                  <button>
                    {" "}
                    Add to Card{" "}
                  </button>
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
