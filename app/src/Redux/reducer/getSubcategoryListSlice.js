import { createSlice } from "@reduxjs/toolkit";
import { allCategoryList } from "../action/getCategoryAction";
import { allSubCategoryList } from "../action/getSubcategoryAction";

const initialState = {
  isLoading: false,
  listdata: [],
  error: "",
};
const GetSubsategoryListData = createSlice({
  name: "Productdata",
  initialState,

  extraReducers: (bulider) => {
    bulider.addCase(allSubCategoryList.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    bulider.addCase(allSubCategoryList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.listdata = action?.payload;
      state.error = "";
    });
    bulider.addCase(allSubCategoryList.rejected, (state, action) => {
      state.error = "";
      state.isLoading = false;
    });
  },
});

export default GetSubsategoryListData.reducer;
