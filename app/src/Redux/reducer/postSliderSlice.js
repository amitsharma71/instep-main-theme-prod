import { createSlice } from "@reduxjs/toolkit";
import { adminPostslider } from "../action/postSliderAction";

const initialState = {
  isLoading: false,
  listdata: [],
  error: "",
};
const PostSliderData = createSlice({
  name: "Productslider",
  initialState,

  extraReducers: (bulider) => {
    bulider.addCase(adminPostslider.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    bulider.addCase(adminPostslider.fulfilled, (state, action) => {
      state.isLoading = false;
      state.listdata = action?.payload;
      state.error = "";
    });
    bulider.addCase(adminPostslider.rejected, (state, action) => {
      state.error = "";
      state.isLoading = false;
    });
  },
});

export default PostSliderData.reducer;
