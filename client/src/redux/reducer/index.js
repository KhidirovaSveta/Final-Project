import { combineReducers } from "redux";
import productsReducer from "./products.reducer";
import wishlistReducer from "./wishlist.reducer";
import cardReducer from "./card.reducer"

export const rootReducer = combineReducers({
  productsReducer,
  wishlistReducer,
  cardReducer,
});
