import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiBasePath } from "../config/Config";

export const axiosInstance = axios.create({
  baseURL: apiBasePath,
  headers: {
    "Content-Type": "application/json",
  },
});

export const updateProduct = createAsyncThunk(
  "pospadminproduct",
  async (payload, id) => {
    const data1 = await axiosInstance.post(`/updateproducts`, payload);
    return data1.data;
  }
);
