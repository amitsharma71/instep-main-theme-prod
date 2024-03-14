import { createSlice } from "@reduxjs/toolkit";

import { singleproduct } from "../action/getsingleProduct";

const initialState = {
  isLoading: false,
  listdata: [],
  error: "",
};
const singleProductData = createSlice({
  name: "Productdata",
  initialState,

  extraReducers: (bulider) => {
    bulider
      .addCase(singleproduct.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(singleproduct.fulfilled, (state, action) => {
       

        state.isLoading = false;
        state.listdata = action?.payload;
        state.error = "";
      })
      .addCase(singleproduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Error updating product.";
        console.error("Error updating product:", state.error);
      });
  },
});

export default singleProductData.reducer;
