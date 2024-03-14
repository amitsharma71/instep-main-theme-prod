import { createSlice } from "@reduxjs/toolkit";
import { signUpAction } from "../action/signUpAction";

const initialState = {
  isLoading: false,
  listdata: [],
  error: "",
};
const registrationData = createSlice({
  name: "joblisting",
  initialState,

  extraReducers: (bulider) => {
    bulider.addCase(signUpAction.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    bulider.addCase(signUpAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.listdata = action?.payload;
      state.error = "";
    });
    bulider.addCase(signUpAction.rejected, (state, action) => {
      state.error = "";
      state.isLoading = false;
    });
  },
});

export default registrationData.reducer;
