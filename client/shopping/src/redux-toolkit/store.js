import { configureStore } from "@reduxjs/toolkit";
import getDataReducer from "./slice/dataSlice";
import wishlistReducer from "./slice/wishlistSlice";
import cartSliceReducer from "./slice/cartSlice";

export const store = configureStore({
  reducer: {
    getDataReducer,
    wishlistReducer,
    cartSliceReducer, 
  },
});
