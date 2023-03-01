import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  loading: false,
  data: [],
  error: "",
};

export const getRecipesData = createAsyncThunk("getRecipesData", async (value) => {
  const response = await axios.get("http://localhost:8080/recipes", value);
  return response;
});

export const postData = createAsyncThunk("postData", async (values) => {
  await axios.post("http://localhost:8080/recipes", values);
});

export const deleteData = createAsyncThunk("deleteData", async (_id) => {
  await axios.delete(`http://localhost:8080/recipes/${_id}`);
});

export const getRecipesDataSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRecipesData.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getRecipesData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(getRecipesData.rejected, (state, action) => {
      state.loading = false;
      state.error = "data not found";
    });
  },
});

export default getRecipesDataSlice.reducer;
