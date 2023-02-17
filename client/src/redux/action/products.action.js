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

export const wishlistAction = (obj) => {
  return async (dispatch) => {
    dispatch({
      type: "WISHLIST",
      payload: obj,
    });
  };
};
export const delwishlistAction = (obj) => {
  return async (dispatch) => {
    dispatch({
      type: "DELETE_WISHLIST",
      payload: obj,
    });
  };
};

export const cardAction = (obj) => {
  return async (dispatch) => {
    dispatch({
      type: "CARD",
      payload: obj,
    });
  };
};