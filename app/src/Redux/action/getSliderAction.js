import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiBasePath } from "../config/Config";

export const axiosInstance = axios.create({
  baseURL: apiBasePath,
  headers: {
    // "Content-Type": "application/json",
  },
});

// export const adminGetSlider = createAsyncThunk("usergetslider",
//   async (payload) => {
//     const data1 = await axiosInstance.post(`/Getslider`, payload);
//     return data1.data;
//   }
// );

export const adminGetSlider = createAsyncThunk(
  "usergetslider",
  async (payload) => {
    return axiosInstance.post("/Getslider", payload);
  }
);

export const deleteSlider = createAsyncThunk(
  "sliderDelete",
  async (payload) => {
    return axiosInstance.post("/deleteSlider", payload);
  }
);


