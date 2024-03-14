import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiBasePath } from "../config/Config";

export const axiosInstance = axios.create({
  baseURL: apiBasePath,
  headers: {
    "Content-Type": "application/json",
  },
});

export const addbrands = createAsyncThunk("brands", async (payload) => {
  const data1 = await axiosInstance.post(`/addbrand`, payload);
  return data1.data;
});

export const removeFromBrand = createAsyncThunk(
  "removeFromBrand",
  async (payload) => {
    const data1 = await axiosInstance.post(`/Deletebrand`, payload);
    return data1.data;
  }
);

export const updateBrands = createAsyncThunk("editbrand", async (payload) => {
  const data1 = await axiosInstance.post(`/addbrand`, payload);
  return data1.data;
});
