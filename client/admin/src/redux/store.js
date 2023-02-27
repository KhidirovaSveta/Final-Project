import { configureStore } from "@reduxjs/toolkit";
import getDataReducer from "./slice/getProductsSlice";


export const store = configureStore({
  reducer: {
    getDataReducer,
  },
});