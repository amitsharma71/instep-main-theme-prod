import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiBasePath } from "../config/Config";

export const axiosInstance = axios.create({
  baseURL: apiBasePath,
});

export const adminPostheading = createAsyncThunk(
  "adminPostheading",
  async (payload) => {
    return axiosInstance.post("/headerpost", payload);
  }
);

export const admingetheading = createAsyncThunk(
  "admingetheading",
  async (payload) => {
    return axiosInstance.post(`/headerget`, payload);
  }
);

export const headingDelete = createAsyncThunk(
  "deleteHeading",
  async (payload) => {
    return axiosInstance.post(`/headerdelete`, payload);
  }
);
