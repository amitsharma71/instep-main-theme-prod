import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiBasePath } from "../config/Config";

export const axiosInstance = axios.create({
  baseURL: apiBasePath,
  headers: {
    "Content-Type": "application/json",
  },
});

export const allCategoryList = createAsyncThunk(
  "getcategoryonly",
  async (payload) => {
    const data1 = await axiosInstance.post(`/getOnlycategory`, payload);
    return data1.data;
  }
);
