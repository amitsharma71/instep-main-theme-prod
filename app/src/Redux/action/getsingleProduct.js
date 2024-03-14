import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiBasePath } from "../config/Config";

export const axiosInstance = axios.create({
  baseURL: apiBasePath,
  headers: {
    "Content-Type": "application/json",
  },
});

export const singleproduct = createAsyncThunk(
  "singleproduct",
  async (payload, id) => {
    const data1 = await axiosInstance.post(`singleproduct`, payload);
    return data1.data;
  }
);
