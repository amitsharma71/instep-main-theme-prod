import { createSlice } from "@reduxjs/toolkit";
import { Afterorder } from "../action/orderSummary";

const initialState = {
  isLoading: false,
  listdata: [],
  error: "",
};
const Orderdetail = createSlice({
  name: "orderdetail",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(Afterorder.pending, (state, action) => {
      state.isLoading = true;
      state.error = "";
    });
    builder.addCase(Afterorder.fulfilled, (state, action) => {
      state.isLoading = false;
      state.listdata = action?.payload;
      state.error = "";
    });
    builder.addCase(Afterorder.rejected, (state, action) => {
      state.isLoading = false;
      state.error = "";
    });
  },
});

export default Orderdetail.reducer;
