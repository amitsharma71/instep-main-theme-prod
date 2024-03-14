import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiBasePath } from "../config/Config";

export const axiosInstance = axios.create({
  baseURL: apiBasePath,
  headers: {
    "Content-Type": "application/json",
  },
});

export const signUpAction = createAsyncThunk("signUpaction", async () => {
  const data1 = await axiosInstance.get(`products`);
  return data1.data;
});

export const addcartapi = createAsyncThunk("addcartapi", async (payload) => {
  console.log(payload, "hddddhhh");
  const response = await axiosInstance.get(`products/${payload}`);
  return response.data;
});
