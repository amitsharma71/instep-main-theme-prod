import { createSlice } from "@reduxjs/toolkit";

import { searchAction } from "../action/searchProductAction";

const initialState = {
  isLoading: false,
  listdata: [],
  error: "",
};
const Searchproduct = createSlice({
  name: "Product",
  initialState,

  extraReducers: (bulider) => {
    bulider.addCase(searchAction.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    bulider.addCase(searchAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.listdata = action?.payload;
      state.error = "";
    });
    bulider.addCase(searchAction.rejected, (state, action) => {
      state.error = "";
      state.isLoading = false;
    });
  },
});

export default Searchproduct.reducer;
