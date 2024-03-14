import { createSlice } from "@reduxjs/toolkit";
import { addsubcategory } from "../action/createNewSubcategoryAction";

const initialState = {
  isLoading: false,
  listdata: [],
  error: "",
};
const AddSubCategory = createSlice({
  name: "Subcategory",
  initialState,

  extraReducers: (bulider) => {
    bulider.addCase(addsubcategory.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    bulider.addCase(addsubcategory.fulfilled, (state, action) => {
      state.isLoading = false;
      state.listdata = action?.payload;
      state.error = "";
    });
    bulider.addCase(addsubcategory.rejected, (state, action) => {
      state.error = "";
      state.isLoading = false;
    });
  },
});

export default AddSubCategory.reducer;
