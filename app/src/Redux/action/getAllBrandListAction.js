import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiBasePath } from "../config/Config";

export const axiosInstance = axios.create({
  baseURL: apiBasePath,
  headers: {
    "Content-Type": "application/json",
  },
});

export const allBrandsList = createAsyncThunk(
  "getsubcategorybrandsonly",
  async (payload) => {
    const data1 = await axiosInstance.post(`/getOnlybrand`, payload);
    return data1.data;
  }
);
