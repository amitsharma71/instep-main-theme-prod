import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiBasePath } from "../config/Config";

export const axiosInstance = axios.create({
  baseURL: apiBasePath,
});

// export const AllFilterationData = AllFilterationData("filterationAlldata",
//   async (payload) => {
//     const data1 = await axiosInstance.post(`/filteralldata`, payload);    // http://localhost:5000/api/filteralldata
//     return data1.data;
//   }
// );

export const AllFilterationData = createAsyncThunk(
  "filterationAlldata",
  async (payload) => {
    const {
      categoryId,
      subcategoryId,
      typesubcategory_id,
      brandId,
      minPrice,
      maxPrice,
    } = payload;
    console.log(payload, "payloadpayload");
    return await axiosInstance.post(
      `/filteralldata?categoryId=${categoryId}&subcategoryId=${subcategoryId}&typesubcategory_id=${typesubcategory_id}&brandId=${brandId}&minPrice=${minPrice}&maxPrice=${maxPrice}`
      // `/filteralldata?${subcategoryId ? "subcategoryId=" + subcategoryId : ""}${
      //   typesubcategory_id ? "typesubcategory_id=" + typesubcategory_id : ""
      // }`,
      // payload
    );
  }
);

// export const AllFilterationData = createAsyncThunk(
//   "filterationAlldata",
//   async (payload) => {
//     try {
//       const {
//         categoryId,
//         subcategoryId,
//         typesubcategory_id,
//         brandId,
//         minPrice,
//         maxPrice,
//       } = payload;

//       const response = await axiosInstance.post(
//         `/filteralldata?categoryId=${categoryId}&subcategoryId=${subcategoryId}&typesubcategory_id=${typesubcategory_id}&brandId=${brandId}&minPrice=${minPrice}&maxPrice=${maxPrice}`
//       );
//       console.log("Filtered data:1111", response);
//       return response;
//     } catch (error) {
//       console.log(error, "errorerrorerrorerror");
//     }
//   }
// );

// export const AllFilterationDatatype = createAsyncThunk(
//   "filterationAlldata",
//   async (payload) => {
//     // const { subcategoryId, typesubcategory_id } = payload;
//     return axiosInstance.post(
//       `/filteralldata?subcategoryId=${
//         payload?.typesubcategory_id && payload?.subcategoryId
//       }`,
//       payload
//     );
//   }
// );

// export const AllFilterationData = createAsyncThunk(
//   "filterationAlldata",
//   async (payload) => {
//     try {
//       const { subcategoryId, type_subcategory_id, otherId } = payload;

//       const response = await axiosInstance.post(
//         `/filteralldata?subcategoryId=${subcategoryId}&type_subcategory_id=${type_subcategory_id}&otherId=${otherId}`
//       );
//       return response.data;
//     } catch (error) {
//       // Handle errors here, you might want to dispatch another action or log the error
//       throw error;
//     }
//   }
// );

// before code
//  export const AllFilterationData = createAsyncThunk(
//   "filterationAlldata",
//   async (payload) => {
//     return axiosInstance.post(
//       `/filteralldata?subcategoryId=${payload?.subcategoryId}`,
//       payload
//     );
//   }
// );
