import { createSlice } from "@reduxjs/toolkit";
import { selectSubCategoryFilter } from "../action/filterBySubcategory";

const initialState = {
  isLoading: false,
  listdata: [],
  error: "",
};
const findSubcategoryFilterById = createSlice({
  name: "Productdata",
  initialState,

  extraReducers: (bulider) => {
    bulider.addCase(selectSubCategoryFilter.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    bulider.addCase(selectSubCategoryFilter.fulfilled, (state, action) => {
      state.isLoading = false;
      state.listdata = action?.payload;
      state.error = "";
    });
    bulider.addCase(selectSubCategoryFilter.rejected, (state, action) => {
      state.error = "";
      state.isLoading = false;
    });
  },
});

export default findSubcategoryFilterById.reducer;
