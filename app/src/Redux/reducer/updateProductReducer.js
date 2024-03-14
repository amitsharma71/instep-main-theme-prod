import { createSlice } from "@reduxjs/toolkit";

import { updateProduct } from "../action/updateProductAction";

const initialState = {
  isLoading: false,
  listdata: [],
  error: "",
};
const updateProductData = createSlice({
  name: "Productdata",
  initialState,

  extraReducers: (bulider) => {
    bulider
      .addCase(updateProduct.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        // state.isLoading = false;
        // const updatedProduct = action.payload;
        // state.listdata = state.listdata.map((product) =>
        //   product._id === updatedProduct._id ? updatedProduct : product
        // );

        state.isLoading = false;
        state.listdata = action?.payload;
        state.error = "";
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Error updating product.";
        console.error("Error updating product:", state.error);
      });
  },
});

export default updateProductData.reducer;
