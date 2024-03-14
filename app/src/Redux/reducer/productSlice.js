import { createSlice } from "@reduxjs/toolkit";
import { signUpAction } from "../action/signUpAction";
import { productDetails } from "../action/registerAction";

const initialState = {
  isLoading: false,
  listdata: [],
  error: "",
};
const Product = createSlice({
  name: "Product",
  initialState,

  extraReducers: (bulider) => {
    bulider.addCase(productDetails.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    bulider.addCase(productDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.listdata = action?.payload;
      state.error = "";
    });
    bulider.addCase(productDetails.rejected, (state, action) => {
      state.error = "";
      state.isLoading = false;
    });
  },
});

export default Product.reducer;
