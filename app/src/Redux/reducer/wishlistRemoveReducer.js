import { createSlice } from "@reduxjs/toolkit";
import { wishlistremove } from "../action/wishlistAction";

const initialState = {
  isLoading: false,
  listdata: [],
  error: "",
};
const removeWishlistData = createSlice({
  name: "joblisting",
  initialState,

  extraReducers: (bulider) => {
    bulider.addCase(wishlistremove.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    bulider.addCase(wishlistremove.fulfilled, (state, action) => {
      state.isLoading = false;
      state.listdata = action?.payload?.data?.data;
      state.error = "";
    });
    bulider.addCase(wishlistremove.rejected, (state, action) => {
      state.error = "";
      state.isLoading = false;
    });
  },
});

export default removeWishlistData.reducer;
