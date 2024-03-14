
import { cartinfo } from "../action/usercartinfo";
const { createSlice } = require("@reduxjs/toolkit");


const initialState = {
    isloading :false,
    listdata: [],
    error: "",
};

const cartinfouser = createSlice({
    name: "cartinfouser ",
    initialState,

    extraReducers: (builder) => {
        builder.addCase(cartinfo.pending, (state, action) => {
          state.isLoading = true;
          state.error = null;
        });
        builder.addCase(cartinfo.fulfilled, (state, action) => {
          state.isLoading = false;
          state.listdata = action?.payload;
          state.error = "";
        });
        builder.addCase(cartinfo.rejected, (state, action) => {
          state.error = "";
          state.isLoading = false;
        });
      },
    });



  

    export default cartinfouser.reducer;