import { createSlice } from "@reduxjs/toolkit";
import { deliveryGetAction } from "../action/deliveryAddress";

const initialState = {
  isLoading: false,
  listdata: [],
  error: "",
};
const deliveryaddressGet = createSlice({
  name: "deliveryAddress",
  initialState,

  extraReducers: (bulider) => {
    bulider.addCase(deliveryGetAction.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    bulider.addCase(deliveryGetAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.listdata = action?.payload;
      state.error = "";
    });
    bulider.addCase(deliveryGetAction.rejected, (state, action) => {
      state.error = "";
      state.isLoading = false;
    });
  },
});

export default deliveryaddressGet.reducer;
