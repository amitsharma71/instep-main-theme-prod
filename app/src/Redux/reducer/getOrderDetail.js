import { createSlice } from "@reduxjs/toolkit";
import { Getorderdetail } from "../action/orderSummary";

const initialState = {
  isLoading: false,
  listdata: [],
  error: "",
};
const Getallorderdetail = createSlice({
  name: "orderdetail",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(Getorderdetail.pending, (state, action) => {
      state.isLoading = true;
      state.error = "";
    });
    builder.addCase(Getorderdetail.fulfilled, (state, action) => {
      state.isLoading = false;
      state.listdata = action?.payload;
      state.error = "";
    });
    builder.addCase(Getorderdetail.rejected, (state, action) => {
      state.isLoading = false;
      state.error = "";
    });
  },
});

export default Getallorderdetail.reducer;
