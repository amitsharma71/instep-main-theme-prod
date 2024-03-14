import { createSlice } from "@reduxjs/toolkit";
import { homesubcategory } from "../action/homesubcategory";
import { typesubcategoryget, typesubcategorypost } from "../action/typesubcatpost";

const initialState = {
  isLoading: false,
  listdata: [],
  typesublist: [],

  error: "",
};
const typesubcategoryslice = createSlice({
  name: "typesubcategorydata",
  initialState,


  extraReducers: (bulider) => {
    bulider.addCase(typesubcategorypost.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    bulider.addCase(typesubcategorypost.fulfilled, (state, action) => {
      state.isLoading = false;
      state.listdata = action?.payload;
      state.error = "";
    });
    bulider.addCase(typesubcategorypost.rejected, (state, action) => {
      state.error = "";
      state.isLoading = false;
    });

    bulider.addCase(typesubcategoryget.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    bulider.addCase(typesubcategoryget.fulfilled, (state, action) => {
      state.isLoading = false;
      state.typesublist = action?.payload;
      state.error = "";
    });
    bulider.addCase(typesubcategoryget.rejected, (state, action) => {
      state.error = "";
      state.isLoading = false;
    });


  },
});

export default typesubcategoryslice.reducer;