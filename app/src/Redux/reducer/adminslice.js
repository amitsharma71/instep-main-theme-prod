import { createSlice } from "@reduxjs/toolkit";
import { adminPostheading, admingetheading, headingDelete } from "../action/adminheader";



const initialState = {
  isLoading: false,
  listdata: [],
  error: "",
};
const Postadminheading = createSlice({
  name: "heading",
  initialState,

  extraReducers: (bulider) => {
    bulider.addCase(adminPostheading.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    bulider.addCase(adminPostheading.fulfilled, (state, action) => {
      state.isLoading = false;
      state.listdata = action?.payload;
      state.error = "";
    });
    bulider.addCase(adminPostheading.rejected, (state, action) => {
      state.error = "";
      state.isLoading = false;
    });


    bulider.addCase(admingetheading.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    bulider.addCase(admingetheading.fulfilled, (state, action) => {
      state.isLoading = false;
      state.listdata = action?.payload;
      state.error = "";
    });
    bulider.addCase(admingetheading.rejected, (state, action) => {
      state.error = "";
      state.isLoading = false;
    });
    

    bulider.addCase(headingDelete.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    bulider.addCase(headingDelete.fulfilled, (state, action) => {
      state.isLoading = false;
      state.listdata = action?.payload;
      state.error = "";
    });
    bulider.addCase(headingDelete.rejected, (state, action) => {
      state.error = "";
      state.isLoading = false;
    });
  },
});

export default Postadminheading.reducer;
