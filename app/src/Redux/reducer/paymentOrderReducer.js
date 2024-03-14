import { createSlice } from "@reduxjs/toolkit";
import { paymentOrder } from "../action/paymentOrderAction";

const initialState = {
  isLoading: false,
  listdata: [],
  error: "",
};
const Paymentorderdata = createSlice({
  name: "paymentorderdetail",
  initialState,

  extraReducers: (bulider) => {
    bulider.addCase(paymentOrder.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    bulider.addCase(paymentOrder.fulfilled, (state, action) => {
      state.isLoading = false;
      state.listdata = action?.payload;
      state.error = "";
    });

    bulider.addCase(paymentOrder.rejected, (state, action) => {
      state.error = "";
      state.isLoading = false;
    });
  },
});

export default Paymentorderdata.reducer;
