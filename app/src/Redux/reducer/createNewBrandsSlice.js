import { createSlice } from "@reduxjs/toolkit";
import { addbrands } from "../action/createNewBrandsAction";

const initialState = {
  isLoading: false,
  listdata: [],
  error: "",
};
const AddNewBrands = createSlice({
  name: "Brands",
  initialState,

  extraReducers: (bulider) => {
    bulider.addCase(addbrands.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    bulider.addCase(addbrands.fulfilled, (state, action) => {
      state.isLoading = false;
      state.listdata = action?.payload;
      state.error = "";
    });
    bulider.addCase(addbrands.rejected, (state, action) => {
      state.error = "";
      state.isLoading = false;
    });
  },
});

export default AddNewBrands.reducer;
