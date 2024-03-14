import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiBasePath } from "../config/Config";

export const axiosInstance = axios.create({
  baseURL: apiBasePath,
  headers: {
    "Content-Type": "application/json",
  },
});

export const allAdminProductList = createAsyncThunk(
  "getadminproductlist",
  async (payload) => {
    const data1 = await axiosInstance.post(`/Getproducts`, payload);
    return data1.data;
  }
);

export const editProductdetail = createAsyncThunk(
  "editproduct",
  async (payload) => {
    const data1 = await axiosInstance.post(`/Getproducts`, payload);
    return data1.data;
  }
);


