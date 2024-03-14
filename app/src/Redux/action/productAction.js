import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiBasePath } from "../config/Config";

export const axiosInstance = axios.create({
  baseURL: apiBasePath,
  headers: {
    "Content-Type": "application/json",
  },
});

export const productAction = createAsyncThunk(
  "productypedata",
  async (payload) => {
    const data1 = await axiosInstance.post(`products`, payload);
    return data1.data;
  }
);

export const spacificAction = createAsyncThunk(
  "productspacificdata",
  async (payload) => {
    const data1 = await axiosInstance.post(`spacificadd`, payload);
    return data1.data;
  }
);
