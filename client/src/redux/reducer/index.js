import { combineReducers } from "redux";
import productsReducer from "./products.reducer";
import wishlistBasketReducer from "./wishlist-basket.reducer";

export const rootReducer = combineReducers({
  productsReducer,
  wishlistBasketReducer,
});
