import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  msg: "",
  email: "",
  password: "",
};

export const signUpUser = createAsyncThunk("postData", async (body) => {
  const res = await fetch("http://localhost:8080/sweeties", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
});

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addToken: (state, action) => {
      state.token = localStorage.getItem("token");
    },
    addUser: (state, action) => {
      state.token = localStorage.getItem("user");
    },
    logout: (state, action) => {
      state.token = null;
      localStorage.clear("token");
    },
  },
  extraReducers: {
    // --- login ----
    [signUpUser.pending]: (state, action) => {
      state.loading = false;
      if (error) {
        state.error = error;
      } else {
        state.msg = msg;
      }
    },
    [signUpUser.fulfilled]: (
      state,
      { payload: { error, msg, token, user } }
    ) => {
      state.loading = false;
      if (error) {
        state.error = error;
      } else {
        state.msg = msg;
        state.token = token;
        state.user = user;

        localStorage.setItem("msg", msg);
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token);
      }
    },
    [signUpUser.rejected]: (state, action) => {
      state.loading = true;
    },

    // --- signin ---
    [signUpUser.pending]: (state, action) => {
      state.loading = false;
      if (error) {
        state.error = error;
      } else {
        state.msg = msg;
      }
    },
    [signUpUser.fulfilled]: (state, { payload: { error, msg } }) => {
      state.loading = false;
      if (error) {
        state.error = error;
      } else {
        state.msg = msg;
      }
    },
    [signUpUser.rejected]: (state, action) => {
      state.loading = true;
    },
  },
});

export const { addTokens, addUser, logout } = authSlice.actions;
export default authSlice.reducer;
 