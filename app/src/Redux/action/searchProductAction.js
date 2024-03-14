import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiBasePath } from "../config/Config";

export const axiosInstance = axios.create({
  baseURL: apiBasePath,
  headers: {
    "Content-Type": "application/json",
  },
});

export const searchAction = createAsyncThunk(
  "productypedata",
  async (payload) => {
    const data1 = await axiosInstance.post(`Search`, payload);
    return data1.data;
  }
);
