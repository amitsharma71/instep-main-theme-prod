import { createSlice } from "@reduxjs/toolkit";
import { addcategory, removeFromCategory } from "../action/createNewCategoryAction";

const initialState = {
  isLoading: false,
  listdata: [],
  error: "",
};
const AddCategory = createSlice({
  name: "Category",
  initialState,

  extraReducers: (bulider) => {
    bulider.addCase(addcategory.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    bulider.addCase(addcategory.fulfilled, (state, action) => {
      state.isLoading = false;
      state.listdata = action?.payload; 
      state.error = "";
    });
    bulider.addCase(addcategory.rejected, (state, action) => {
      state.error = "";
      state.isLoading = false;
    });
  
  },
});

export default AddCategory.reducer;
