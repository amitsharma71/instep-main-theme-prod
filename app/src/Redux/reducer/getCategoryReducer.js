import { createSlice } from "@reduxjs/toolkit";
import { filterByCategory } from "../action/getFilterCategoryAction";

const initialState = {
  isLoading: false,
  listdata: [],
  error: "",
};
const FilterDataByCategory = createSlice({
  name: "Productdata",
  initialState,

  extraReducers: (bulider) => {
    bulider.addCase(filterByCategory.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    bulider.addCase(filterByCategory.fulfilled, (state, action) => {
      state.isLoading = false;
      state.listdata = action?.payload;
      state.error = "";
    });
    bulider.addCase(filterByCategory.rejected, (state, action) => {
      state.error = "";
      state.isLoading = false;
    });
  },
});

export default FilterDataByCategory.reducer;
