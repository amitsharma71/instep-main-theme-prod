import { createSlice } from "@reduxjs/toolkit";
import { getProductAction } from "../action/getProductDetailAction";

const initialState = {
  isLoading: false,
  listdata: [],
  error: "",
};
const getProductDetail = createSlice({
  name: "Productdata",
  initialState,

  extraReducers: (bulider) => {
    bulider.addCase(getProductAction.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    bulider.addCase(getProductAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.listdata = action?.payload;
      state.error = "";
    });
    bulider.addCase(getProductAction.rejected, (state, action) => {
      state.error = "";
      state.isLoading = false;
    });
  },
});

export default getProductDetail.reducer;
