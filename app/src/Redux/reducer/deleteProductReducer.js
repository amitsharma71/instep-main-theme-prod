import { createSlice } from "@reduxjs/toolkit";

import { adminPostProduct } from "../action/adminPostProductAction";
import { deleteProduct } from "../action/deleteProductAction";

const initialState = {
  isLoading: false,
  listdata: [],
  error: "",
};
const Deleteproduct = createSlice({
  name: "Productdata",
  initialState,

  extraReducers: (bulider) => {
    bulider.addCase(deleteProduct.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    bulider.addCase(deleteProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      const deletedProductId = action.payload;
      state.listdata = state.listdata.filter(
        (product) => product._id !== deletedProductId
      );
      state.error = "";
    });
    // bulider.addCase(deleteProduct.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.listdata = action?.payload;
    //   state.error = "";
    // });
    bulider.addCase(deleteProduct.rejected, (state, action) => {
      state.error = "";
      state.isLoading = false;
    });
  },
});

export default Deleteproduct.reducer;
