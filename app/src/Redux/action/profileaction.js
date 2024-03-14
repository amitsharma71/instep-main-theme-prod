import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiBasePath } from "../config/Config";

export const axiosInstance = axios.create({
  baseURL: apiBasePath,
  headers: {
    // "Content-Type": "application/json",
  },
});

export const createprofile = createAsyncThunk(
  "createprofileinfo",
  async (payload) => {
    return axiosInstance.post(`/createProfile`, payload);
  }
);


// get image
export const getProfileImage = createAsyncThunk(
  "getProfileImage",
  async (payload) => {
    return axiosInstance.post(`/getProfile`, payload);
  }
);


// delete profile image

export const deleteProfileImage = createAsyncThunk(
  "deleteProfileImage",
  async (payload) => {
    return axiosInstance.post (`/profileimgdelete`, payload)
  }
)
