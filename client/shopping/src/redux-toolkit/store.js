import { configureStore } from "@reduxjs/toolkit";
import getDataReducer from "./slice/dataSlice";
import wishlistReducer from "./slice/wishlistSlice";
import cartSliceReducer from "./slice/cartSlice";
import userSlice from "./slice/userSlice";
import  authSlice from "./slice/authSlice";
import getRecipesDataSliceReducer from "./slice/recipes"

export const store = configureStore({
  reducer: {
    getDataReducer,
    wishlistReducer,
    cartSliceReducer,
    users: userSlice,
    login: authSlice,
    getRecipesDataSliceReducer
  },
});
