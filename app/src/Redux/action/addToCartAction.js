// redux/actions/cartActions.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiBasePath } from "../config/Config";

export const axiosInstance = axios.create({
  baseURL: apiBasePath,
  headers: {
    "Content-Type": "application/json",
  },
});

// export const addToCart = (product) => ({
//   type: "ADD_TO_CART",
//   payload: product,
// });

export const addToCartAction = createAsyncThunk(
  "addtocart",
  async (payload) => {
    const data1 = await axiosInstance.post(`Add-to-cart`, payload);
    return data1.data;
  }
);

// export const removeFromCart = (productId) => ({
//   type: "REMOVE_FROM_CART",
//   payload: productId,
// });

export const removeFromCart = createAsyncThunk(
  "removeFromCart",
  async (payload) => {
    const data1 = await axiosInstance.post(`remove-from-cart`, payload);
    return data1.data;
  }
);
