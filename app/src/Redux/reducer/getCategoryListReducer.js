import { createSlice } from "@reduxjs/toolkit";
import { allCategoryList } from "../action/getCategoryAction";

const initialState = {
  isLoading: false,
  listdata: [],
  error: "",
};
const GetCategoryListData = createSlice({
  name: "Productdata",
  initialState,

  extraReducers: (bulider) => {
    bulider.addCase(allCategoryList.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    bulider.addCase(allCategoryList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.listdata = action?.payload;
      state.error = "";
    });
    bulider.addCase(allCategoryList.rejected, (state, action) => {
      state.error = "";
      state.isLoading = false;
    });
  },
});

export default GetCategoryListData.reducer;
