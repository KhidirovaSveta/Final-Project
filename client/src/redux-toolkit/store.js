import { configureStore } from "@reduxjs/toolkit";
import getDataReducer from "./slice/dataSlice";
import wishlistReducer from "./slice/wishlistSlice";

export const store = configureStore({
  reducer: {
    getDataReducer,
    wishlistReducer
  },
});