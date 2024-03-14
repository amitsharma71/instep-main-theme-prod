import { createSlice } from "@reduxjs/toolkit";
import { wishlistadd } from "../action/wishlistAction";

const initialState = {
  isLoading: false,
  listdatas: [],
  error: "",
};
const addWishlistData = createSlice({
  name: "joblisting",
  initialState,

  extraReducers: (bulider) => {
    bulider.addCase(wishlistadd.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    bulider.addCase(wishlistadd.fulfilled, (state, action) => {
      state.isLoading = false;
      state.listdatas = action?.payload;
      state.error = "";
    });
    bulider.addCase(wishlistadd.rejected, (state, action) => {
      state.error = "";
      state.isLoading = false;
    });
  },
});

export default addWishlistData.reducer;
