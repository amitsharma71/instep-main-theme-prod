import { createSlice } from "@reduxjs/toolkit";

import { adminPostProduct } from "../action/adminPostProductAction";

const initialState = {
  isLoading: false,
  listdata: [],
  error: "",
};
const PostProductData = createSlice({
  name: "Productdata",
  initialState,

  extraReducers: (bulider) => {
    bulider.addCase(adminPostProduct.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    bulider.addCase(adminPostProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.listdata = action?.payload;
      state.error = "";
    });
    bulider.addCase(adminPostProduct.rejected, (state, action) => {
      state.error = "";
      state.isLoading = false;
    });
  },
});

export default PostProductData.reducer;
