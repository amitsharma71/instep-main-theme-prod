import { createSlice } from "@reduxjs/toolkit";
import { registerAction } from "../action/registerAction";

const initialState = {
  isLoading: false,
  listdata: [],
  error: "",
};
const registerData = createSlice({
  name: "joblisting",
  initialState,

  extraReducers: (bulider) => {
    bulider.addCase(registerAction.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    bulider.addCase(registerAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.listdata = action?.payload;
      state.error = "email error exist";
    });
    bulider.addCase(registerAction.rejected, (state, action) => {
      state.error = "";
      state.isLoading = false;
    });
  },
});

export default registerData.reducer;
