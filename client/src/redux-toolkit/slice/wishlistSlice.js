import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: localStorage.getItem("data")
  ? JSON.parse(localStorage.getItem("data"))
  : [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.data.push(action.payload);
      localStorage.setItem("data", JSON.stringify(state.data));
    },
    deleteData: (state, action) => {
      state.data = state.data.filter((e) => e._id !== action.payload);
      localStorage.setItem("data", JSON.stringify(state.data));
      return state;
    },
  },
});

export const { addData, deleteData } = wishlistSlice.actions;

export default wishlistSlice.reducer;