import axios from "axios";

export const productsAction = () => {
  return async (dispatch) => {
    dispatch({
      type: "PENDING",
    });

    try {
      let response = await axios.get("http://localhost:8080/sweeties");
      dispatch({
        type: "FULFILLED",
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: "REJECTED",
        payload: error,
      });
    }
  };
};

export const wishlistBasketAction = (obj) => {
  return async (dispatch) => {
    dispatch({
      type: "WISHLIST_BASKET",
      payload: obj,
    });
  };
};
export const delwishlistBasketAction = (obj) => {
  return async (dispatch) => {
    dispatch({
      type: "DELETE_WISHLIST_BASKET",
      payload: obj,
    });
  };
};
