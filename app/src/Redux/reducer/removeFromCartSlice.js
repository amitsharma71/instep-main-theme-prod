import { createSlice } from "@reduxjs/toolkit";
import { removeFromCart } from "../action/addToCartAction";

const initialState = {
  isLoading: false,
  listdata: [],
  error: "",
};
const removeFromCartSlice = createSlice({
  name: "joblisting",
  initialState,

  extraReducers: (bulider) => {
    bulider.addCase(removeFromCart.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    bulider.addCase(removeFromCart.fulfilled, (state, action) => {
      state.isLoading = false;
      state.listdata = action?.payload;
      state.error = "";
    });
    bulider.addCase(removeFromCart.rejected, (state, action) => {
      state.error = "";
      state.isLoading = false;
    });
  },
});

export default removeFromCartSlice.reducer;
