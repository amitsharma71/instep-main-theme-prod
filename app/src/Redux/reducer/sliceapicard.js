import { createSlice } from "@reduxjs/toolkit";
import { addcartapi } from "../action/extraAction";

const initialState = {
  isLoading: false,
  datain: [],
  error: "",
};

const sliceview = createSlice({
  name: "joblisting",
  initialState,

  extraReducers: (bulider) => {
    bulider.addCase(addcartapi.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    bulider.addCase(addcartapi.fulfilled, (state, action) => {
      state.listdata = action?.payload;
      state.isLoading = false;
    });
    bulider.addCase(addcartapi.rejected, (state, action) => {
      state.error = "";
      state.isLoading = false;
    });
  },
});

export default sliceview.reducer;
