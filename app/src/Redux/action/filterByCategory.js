import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiBasePath } from "../config/Config";

export const axiosInstance = axios.create({
  baseURL: apiBasePath,
  headers: {
    "Content-Type": "application/json",
  },
});

export const selectCategoryFilter = createAsyncThunk(
  "selectCategoryFilter",
  async (payload) => {
    const data1 = await axiosInstance.post(`/getcategory`, payload);
    return data1.data;
  }
);
export const selectSubcategoryFilter = createAsyncThunk(
  "selectSubcategoryFilter",
  async (payload) => {
    payload.subcategory_id = payload.subcategory_Id;
    const data1 = await axiosInstance.post(`/getcategory`, payload);
    return data1.data;
  }
);
export const selectBrandFilter = createAsyncThunk(
  "selectBrandFilter",
  async (payload) => {
    payload.type_subcategory_id = payload.type_subcategory_id;
    const data1 = await axiosInstance.post(`/filtertypebrand`, payload);
    return data1.data;
  }
);
