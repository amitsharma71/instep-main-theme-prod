import { createSlice } from "@reduxjs/toolkit";
import { selectCategoryFilter } from "../action/filterByCategory";

const initialState = {
  isLoading: false,
  listdata: [],
  error: "",
};
const SelectCategoryFilterById = createSlice({
  name: "Productdata",
  initialState,

  extraReducers: (bulider) => {
    bulider.addCase(selectCategoryFilter.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    bulider.addCase(selectCategoryFilter.fulfilled, (state, action) => {
      state.isLoading = false;
      state.listdata = action?.payload;
      state.error = "";
    });
    bulider.addCase(selectCategoryFilter.rejected, (state, action) => {
      state.error = "";
      state.isLoading = false;
    });
  },
});

export default SelectCategoryFilterById.reducer;
