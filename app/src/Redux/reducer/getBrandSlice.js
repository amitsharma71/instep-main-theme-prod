import { createSlice } from "@reduxjs/toolkit";
import { allCategoryList } from "../action/getCategoryAction";
import { allBrandsList } from "../action/getAllBrandListAction";

const initialState = {
  isLoading: false,
  listdata: [],
  error: "",
};
const GetBrandsListData = createSlice({
  name: "Productdata",
  initialState,

  extraReducers: (bulider) => {
    bulider.addCase(allBrandsList.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    bulider.addCase(allBrandsList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.listdata = action?.payload;
      state.error = "";
    });
    bulider.addCase(allBrandsList.rejected, (state, action) => {
      state.error = "";
      state.isLoading = false;
    });
  },
});

export default GetBrandsListData.reducer;
