import { createSlice } from "@reduxjs/toolkit";
import { productAction } from "../action/productAction";

const initialState = {
  isLoading: false,
  listdata: [],
  error: "",
};
const ProductDetail = createSlice({
  name: "Product",
  initialState,

  extraReducers: (bulider) => {
    bulider.addCase(productAction.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    bulider.addCase(productAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.listdata = action?.payload;
      state.error = "";
    });
    bulider.addCase(productAction.rejected, (state, action) => {
      state.error = "";
      state.isLoading = false;
    });
  },
});

export default ProductDetail.reducer;
