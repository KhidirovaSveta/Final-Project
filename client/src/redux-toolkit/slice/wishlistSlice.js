import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.data.push(action.payload);
    },
    deleteData: (state, action) => {
      state.data = state.data.filter((elem) => elem._id !== action.payload);
    },
  },
});

export const { addData, deleteData } = wishlistSlice.actions;

export default wishlistSlice.reducer;