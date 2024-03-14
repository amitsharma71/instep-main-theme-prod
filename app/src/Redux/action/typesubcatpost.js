import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiBasePath } from "../config/Config";

export const axiosInstance = axios.create({
  baseURL: apiBasePath,
  headers: {
    "Content-Type": "application/json",
  },
});

export const typesubcategorypost = createAsyncThunk(
  "typesubcategorypost",
  async (payload) => {
    return axiosInstance.post("/addtypesubcategory", payload);
  }
);

export const typesubcategoryget = createAsyncThunk(
  "typesubcategoryget",
  async (payload) => {
    return axiosInstance.post("/gettypesubcategory", payload);
  }
);

export const findbrandfilter = createAsyncThunk(
  "findbrand",
  async (payload) => {
    return axiosInstance.post("/filtertypebrand", payload);
  }
);

// export const findbrandfilter = createAsyncThunk(
//   "findbrand",
//   async (payload) => {
//     const data1 = await axiosInstance.post(`/filtertypebrand`, payload);
//     return data1.data;
//   }
// );

export const removeFromTypeSubcategory = createAsyncThunk(
  "removeFromTypeSubcategory",
  async (payload) => {
    return axiosInstance.post("/deletetypesubcategory", payload);
  }
);
