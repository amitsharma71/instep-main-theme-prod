import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiBasePath } from "../config/Config";

export const axiosInstance = axios.create({
  baseURL: apiBasePath,
  headers: {
    "Content-Type": "application/json",
  },
});

export const paymentOrder = createAsyncThunk(
  "paymentOrderdetail",
  async (payload, id) => {
    return axiosInstance.post("/order", payload);
  }
);

export const deleteCartAfterPayment = createAsyncThunk(
  "deletecart",
  async (payload) => {
    return axiosInstance.post("/addCardDelete", payload);
  }
);
