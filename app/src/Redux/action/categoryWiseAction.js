import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiBasePath } from "../config/Config";

export const axiosInstance = axios.create({
  baseURL: apiBasePath,
  headers: {
    "Content-Type": "application/json",
  },
});

export const homecategory = createAsyncThunk(
  "homecategory",
  async (payload) => {
    const data1 = await axiosInstance.get(`/category/${payload}`);
    return data1?.data;
  }
);

export const homesubcategory = createAsyncThunk(
  "homesubcategory",
  async (payload) => {
    const data1 = await axiosInstance.get(`/subcategory/${payload}`);
    return data1?.data;
  }
);
