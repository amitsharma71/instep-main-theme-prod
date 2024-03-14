import { createSlice } from "@reduxjs/toolkit";
import { selectBrandFilter } from "../action/filterByCategory";

const initialState = {
  isLoading: false,
  listdata: [],
  error: "",
};
const SelectBrandFilterById = createSlice({
  name: "Productdata",
  initialState,

  extraReducers: (bulider) => {
    bulider.addCase(selectBrandFilter.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    bulider.addCase(selectBrandFilter.fulfilled, (state, action) => {
      state.isLoading = false;
      state.listdata = action?.payload;
      state.error = "";
    });
    bulider.addCase(selectBrandFilter.rejected, (state, action) => {
      state.error = "";
      state.isLoading = false;
    });
  },
});

export default SelectBrandFilterById.reducer;
