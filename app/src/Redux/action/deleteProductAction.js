import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiBasePath } from "../config/Config";

export const axiosInstance = axios.create({
  baseURL: apiBasePath,
  headers: {
    "Content-Type": "application/json",
  },
});

export const deleteProduct = createAsyncThunk(
  "pospadminproduct",
  async (payload, id) => {
    console.log(payload, id, "gggggggggggggggggggg");
    const data1 = await axiosInstance
      .post(`/productsdlt`, payload)
      .then((res) => res);
    console.log(data1, "data1data1");
    return data1.data;
  }
);
