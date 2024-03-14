import { createSlice } from "@reduxjs/toolkit";
import { selectTypesubcategoryFilter } from "../action/filterByTypeSubcategory";

const initialState = {
  isLoading: false,
  listdata: [],
  error: "",
};
const findTypeSubcategoryFilterById = createSlice({
  name: "Productdata",
  initialState,

  extraReducers: (bulider) => {
    bulider.addCase(selectTypesubcategoryFilter.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    bulider.addCase(selectTypesubcategoryFilter.fulfilled, (state, action) => {
      state.isLoading = false;
      state.listdata = action?.payload;
      state.error = "";
    });
    bulider.addCase(selectTypesubcategoryFilter.rejected, (state, action) => {
      state.error = "";
      state.isLoading = false;
    });
  },
});

export default findTypeSubcategoryFilterById.reducer;
