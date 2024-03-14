import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiBasePath } from "../config/Config";

export const axiosInstance = axios.create({
  baseURL: apiBasePath,
  headers: {
    // "Content-Type": "application/json",  
  },
});

export const deliveryaddress = createAsyncThunk(
  "newaddresscreate",
  async (payload) => {
    const data1 = await axiosInstance.post(`/addresscreate`, payload);
    return data1.data;
  }
);

export const deliveryGetAction = createAsyncThunk(
  "newaddressget",
  async (payload) => {
    const data1 = await axiosInstance.post(`/addressget`, payload);
    return data1.data;
  }
);

// address update delete

export const updateAddress = createAsyncThunk(
  "updateAddress",
  async (payload) => {
    const data1 = await axiosInstance.post(`/updateaddress`, payload);
    return data1.data;
  }
);

export const deleteAddress = createAsyncThunk(
  "deleteAddress",
  async (payload) => {
    const data1 = await axiosInstance.post(`/addressdelete`, payload);
    return data1.data;
  }
)


