import axios from "axios";
import { apiBasePath } from "../config/Config";
const { createAsyncThunk } = require("@reduxjs/toolkit");

export const axiosInstance = axios.create({
  baseURL: apiBasePath,
  headers: {
    // "Content-Type": "application/json",
  },
});

export const cartinfo = createAsyncThunk("cartinfo", async (payload) => {
  const data1 = await axiosInstance.post("/get-cart", payload);
  return data1.data;
});
