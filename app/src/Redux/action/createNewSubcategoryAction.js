import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiBasePath } from "../config/Config";

export const axiosInstance = axios.create({
  baseURL: apiBasePath,
  headers: {
    "Content-Type": "application/json",
  },
});

export const addsubcategory = createAsyncThunk(
  "subcatgeoryadd",
  async (payload) => {
    const data1 = await axiosInstance.post(`/addsubcategory`, payload);
    return data1.data;
  }
);



export const removeFromSubcategory = createAsyncThunk(
  "removeFromSubcategory",
  async (payload) => {
    const data1 = await axiosInstance.post(`/Deletesubcategory`, payload);
    return data1.data
  }
);
