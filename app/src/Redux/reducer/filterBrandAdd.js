import { createSlice } from "@reduxjs/toolkit";
import { findbrandfilter } from "../action/typesubcatpost";

const initialState = {
  isLoading: false,
  listdata: [],
  error: "",
};
const findBrandFilterById = createSlice({
  name: "BrandData",
  initialState,

  extraReducers: (bulider) => {
    bulider.addCase(findbrandfilter.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    bulider.addCase(findbrandfilter.fulfilled, (state, action) => {
      state.isLoading = false;
      state.listdata = action?.payload;
      state.error = "";
    });
    bulider.addCase(findbrandfilter.rejected, (state, action) => {
      state.error = "";
      state.isLoading = false;
    });
  },
});

export default findBrandFilterById.reducer;
