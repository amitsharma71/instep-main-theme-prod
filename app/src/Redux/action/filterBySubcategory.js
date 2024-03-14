import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiBasePath } from "../config/Config";

export const axiosInstance = axios.create({
  baseURL: apiBasePath,
  headers: {
    "Content-Type": "application/json",
  },
});

export const selectSubCategoryFilter = createAsyncThunk(
  "selectSubcategoryfilter",
  async (payload) => {
    payload.subcategory_id = payload.subcategory_Id;
    const data1 = await axiosInstance.post(`/findsubcategory`, payload);
    return data1.data;
  }
);
