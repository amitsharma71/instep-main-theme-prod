// import { createSlice } from "@reduxjs/toolkit";
// import { wishlistget } from "../action/wishlistAction";

// const initialState = {
//   isLoading: false,
//   listdata: [],
//   error: "",
// };
// const getWishlistData = createSlice({
//   name: "joblisting",
//   initialState,

//   extraReducers: (bulider) => {
//     bulider.addCase(wishlistget.pending, (state, action) => {
//       state.isLoading = true;
//       state.error = null;
//     });
//     bulider.addCase(wishlistget.fulfilled, (state, action) => {
//       state.isLoading = false;
//       state.listdata = action?.payload?.data?.data;
//       state.error = "";
//     });
//     bulider.addCase(wishlistget.rejected, (state, action) => {
//       state.error = "";
//       state.isLoading = false;
//     });
//   },
// });

// export default getWishlistData.reducer;

import { wishlistget } from "../action/wishlistAction";
const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  isloading: false,
  listdata: [],
  error: "",
};

const getWishlistData = createSlice({
  name: "getwishlistdata ",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(wishlistget.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(wishlistget.fulfilled, (state, action) => {
      state.isLoading = false;
      state.listdata = action?.payload;
      state.error = "";
    });
    builder.addCase(wishlistget.rejected, (state, action) => {
      state.error = "";
      state.isLoading = false;
    });
  },
});

export default getWishlistData.reducer;
