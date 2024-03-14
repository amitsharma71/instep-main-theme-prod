import { createSlice } from "@reduxjs/toolkit";
import { deleteAddress, deliveryaddress, updateAddress } from "../action/deliveryAddress";

const initialState = {
  isLoading: false,
  listdata: [],
  listaddress: [],
  error: "",
};
const deliverAddress = createSlice({
  name: "deliveryAddress",
  initialState,

  extraReducers: (bulider) => {
    bulider.addCase(deliveryaddress.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    bulider.addCase(deliveryaddress.fulfilled, (state, action) => {
      state.isLoading = false;
      state.listdata = action?.payload;
      state.error = "";
    });
    bulider.addCase(deliveryaddress.rejected, (state, action) => {
      state.error = "";
      state.isLoading = false;
    });

    // update address
    bulider.addCase(updateAddress.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    })
    bulider.addCase(updateAddress.fulfilled, (state, action) => {
      state.isLoading = false;
      state.listaddress = action?.payload;
      state.error = "";
    });
    bulider.addCase(updateAddress.rejected, (state, action) => {
      state.error = "";
      state.isLoading = false;
    })

    // delete address

    bulider.addCase(deleteAddress.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    })
    bulider.addCase(deleteAddress.fulfilled, (state, action) => {
      state.isLoading = false;
      state.listaddress = action?.payload;
      state.error = "";
    })

    bulider.addCase(deleteAddress.rejected, (state, action) => {
      state.error = "";
      state.isLoading = false;
    })
  },
});

export default deliverAddress.reducer;
