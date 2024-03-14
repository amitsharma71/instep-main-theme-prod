import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiBasePath } from "../config/Config";

export const axiosInstance = axios.create({
  baseURL: apiBasePath,
  headers: {
    // "Content-Type": "application/json",
  },
});

// export const adminPostProduct = createAsyncThunk("pospadminproduct",
//   async (payload) => {
//     const data1 = await axiosInstance.post(`/products`, payload);
//     return data1.data;
//   }
// );

export const adminPostProduct = createAsyncThunk(
  "adminPostProductss",
  async (payload) => {
    return axiosInstance.post("/products", payload);
  }
);
