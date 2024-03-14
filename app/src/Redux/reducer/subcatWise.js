import { createSlice } from "@reduxjs/toolkit";
import { homesubcategory } from "../action/categoryWiseAction";

const initialState = {
  isLoading: false,
  listdata: [],
  error: "",
};
const Homesubcategory = createSlice({
  name: "Product",
  initialState,

  extraReducers: (bulider) => {
    bulider.addCase(homesubcategory.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    bulider.addCase(homesubcategory.fulfilled, (state, action) => {
      state.isLoading = false;
      state.listdata = action?.payload;
      state.error = "";
    });
    bulider.addCase(homesubcategory.rejected, (state, action) => {
      state.error = "";
      state.isLoading = false;
    });
  },
});

export default Homesubcategory.reducer;
