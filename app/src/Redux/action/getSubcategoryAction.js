import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiBasePath } from "../config/Config";

export const axiosInstance = axios.create({
  baseURL: apiBasePath,
  headers: {
    "Content-Type": "application/json",
  },
});

export const allSubCategoryList = createAsyncThunk(
  "getsubcategoryonly",
  async (payload) => {
    const data1 = await axiosInstance.post(`/getOnlysubcategory`, payload);
    return data1.data;
  }
);
