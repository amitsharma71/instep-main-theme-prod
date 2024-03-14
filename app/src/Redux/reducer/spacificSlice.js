import { createSlice } from "@reduxjs/toolkit";
import { spacificAction } from "../action/productAction";

const initialState = {
  isLoading: false,
  listdata: [],
  error: "",
};
const Spacification = createSlice({
  name: "Product",
  initialState,

  extraReducers: (bulider) => {
    bulider.addCase(spacificAction.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    bulider.addCase(spacificAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.listdata = action?.payload;
      state.error = "";
    });
    bulider.addCase(spacificAction.rejected, (state, action) => {
      state.error = "";
      state.isLoading = false;
    });
  },
});

export default Spacification.reducer;
