import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  loading: false,
  data: [],
  error: "",
};

export const getData = createAsyncThunk("getData", async () => {
  const response = await axios.get(`http://localhost:8080/sweeties`);
  return response.data;
});


export const postData = createAsyncThunk("postData", async (values) => {
    await axios.post("http://localhost:8080/sweeties", values);
  });
  
  export const deleteData = createAsyncThunk("deleteData", async (_id) => {
    await axios.delete(`http://localhost:8080/sweeties/${_id}`);
  });
  
export const getDataSlice = createSlice({
  name: "sweeties",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getData.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(getData.rejected, (state, action) => {
      state.loading = false;
      state.error = "data not found";
    });
  },
});

export default getDataSlice.reducer;