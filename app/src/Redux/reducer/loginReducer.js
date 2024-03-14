import { createSlice } from "@reduxjs/toolkit";
import { loginAction } from "../action/loginAction";

const initialState = {
  isLoading: false,
  listdata: [],
  error: "",
};

const loginData = createSlice({
  name: "joblisting",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(loginAction.pending, (state, action) => {
      state.isLoading = true;
      state.error = "";
    });
    builder.addCase(loginAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.listdata = action?.payload;
      state.error = "";
    });
    builder.addCase(loginAction.rejected, (state, action) => {
      state.isLoading = false;
      state.error = "";
    });
  },
});

export default loginData.reducer;
