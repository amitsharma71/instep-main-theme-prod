import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiBasePath } from "../config/Config";

export const axiosInstance = axios.create({
  baseURL: apiBasePath,
  headers: {
    "Content-Type": "application/json",
  },
});

export const selectTypesubcategoryFilter = createAsyncThunk(
  "selecttypesubcategoryfilter",
  async (payload) => {
    // payload.type_subcategory_id = payload.type_subcategory_id
    const data1 = await axiosInstance.post(`/findtypesubcategory`, payload);
    return data1.data;
  }
);
