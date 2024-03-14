import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiBasePath } from "../config/Config";

export const axiosInstance = axios.create({
  baseURL: apiBasePath,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getProductAction = createAsyncThunk(
  "productgetdata",
  async (payload) => {
    const data1 = await axiosInstance.post("Getproducts", payload);
    return data1.data;
  }
);
export const myCartList = createAsyncThunk("mrcart", async (payload) => {
  const data1 = await axiosInstance.post("get-cart", payload);
  return data1.data;
});
