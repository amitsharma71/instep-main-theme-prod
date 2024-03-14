import { createSlice } from "@reduxjs/toolkit";
import { homecategory } from "../action/categoryWiseAction";

const initialState = {
  isLoading: false,
  listdata: [],
  error: "",
};
const Homecategory = createSlice({
  name: "Product",
  initialState,

  extraReducers: (bulider) => {
    bulider.addCase(homecategory.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    bulider.addCase(homecategory.fulfilled, (state, action) => {
      state.isLoading = false;
      state.listdata = action?.payload;
      state.error = "";
    });
    bulider.addCase(homecategory.rejected, (state, action) => {
      state.error = "";
      state.isLoading = false;
    });
  },
});

export default Homecategory.reducer;