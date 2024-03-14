import { createSlice } from "@reduxjs/toolkit";
import { AllFilterationData } from "../action/allFilterationAction";

const initialState = {
  isLoading: false,
  listdata: [],
  error: "",
};
const FilterationAllType = createSlice({
  name: "Filterationdata",
  initialState,

  extraReducers: (bulider) => {
    bulider.addCase(AllFilterationData.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    bulider.addCase(AllFilterationData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.listdata = action?.payload;
      state.error = "";
    });
    bulider.addCase(AllFilterationData.rejected, (state, action) => {
      state.error = "";
      state.isLoading = false;
    });
  },
});

export default FilterationAllType.reducer;
