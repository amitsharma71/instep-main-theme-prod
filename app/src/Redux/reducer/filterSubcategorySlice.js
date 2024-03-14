import { createSlice } from "@reduxjs/toolkit";
import {
  selectSubcategoryFilter,
} from "../action/filterByCategory";

const initialState = {
  isLoading: false,
  listdata: [],
  error: "",
};
const SelectSubcategoryFilterById = createSlice({
  name: "Productdata",
  initialState,

  extraReducers: (bulider) => {
    bulider.addCase(selectSubcategoryFilter.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    bulider.addCase(selectSubcategoryFilter.fulfilled, (state, action) => {
      state.isLoading = false;
      state.listdata = action?.payload;
      state.error = "";
    });
    bulider.addCase(selectSubcategoryFilter.rejected, (state, action) => {
      state.error = "";
      state.isLoading = false;
    });
  },
});

export default SelectSubcategoryFilterById.reducer;
