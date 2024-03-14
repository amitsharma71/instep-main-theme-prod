import { createSlice } from "@reduxjs/toolkit";
import { createprofile, deleteProfileImage, getProfileImage } from "../action/profileaction";

const initialState = {
  isLoading: false,
  listdata: [],
  imageData: [],
  error: "",
};
const profileslice = createSlice({
  name: "profile",
  initialState,

  extraReducers: (bulider) => {
    bulider.addCase(createprofile.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    bulider.addCase(createprofile.fulfilled, (state, action) => {
      state.isLoading = false;
      state.listdata = action?.payload;
      state.error = "";
    });
    bulider.addCase(createprofile.rejected, (state, action) => {
      state.error = "";
      state.isLoading = false;
    });

    // getprofile image
    bulider.addCase(getProfileImage.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    bulider.addCase(getProfileImage.fulfilled, (state, action) => {
      state.isLoading = false;
      state.imageData = action?.payload;
      state.error = "";
    });
    bulider.addCase(getProfileImage.rejected, (state, action) => {
      state.error = "";
      state.isLoading = false;
    });
    // deleteProfileImage
    bulider.addCase(deleteProfileImage.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    bulider.addCase(deleteProfileImage.fulfilled, (state, action) => {
      state.isLoading = false;
      state.imageData = action?.payload;
      state.error = "";
    });
    bulider.addCase(deleteProfileImage.rejected, (state, action) => {
      state.error = "";
      state.isLoading = false;
    });

  },
});

export default profileslice.reducer;
