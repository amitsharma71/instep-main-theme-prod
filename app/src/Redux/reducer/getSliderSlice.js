import { createSlice } from "@reduxjs/toolkit";
import { adminGetSlider } from "../action/getSliderAction";

const initialState = {
  isLoading: false,
  listdata: [],
  error: "",
};
const GetSliderData = createSlice({
  name: "Sliderdata",
  initialState,

  extraReducers: (bulider) => {
    bulider.addCase(adminGetSlider.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    bulider.addCase(adminGetSlider.fulfilled, (state, action) => {
      state.isLoading = false;
      state.listdata = action?.payload;
      state.error = "";
    });
    bulider.addCase(adminGetSlider.rejected, (state, action) => {
      state.error = "";
      state.isLoading = false;
    });
  },
});

export default GetSliderData.reducer;
