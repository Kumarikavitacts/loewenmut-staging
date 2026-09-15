import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { homepageApiStructure } from "@/Apis/HomePage/apis";
import { Homepageparser } from "@/helper/Homepageparser";

export const fetchHomeData = createAsyncThunk(
  "home/fetchHomeData",
  async (_, { rejectWithValue }) => {
    try {
      // IMPORTANT: await the API call
      const result = await homepageApiStructure.getHeader();



      // Parse the actual Strapi data
      const parsedData = Homepageparser(result?.data);



      return parsedData;
    } catch (error) {
      console.error("Home API Error:", error);

      return rejectWithValue(
        error?.response?.data?.error?.message ||
          error?.message ||
          "Failed to fetch home data"
      );
    }
  }
);

const homeSlice = createSlice({
  name: "home",

  initialState: {
    data: null,
    status: "idle",
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchHomeData.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })

      .addCase(fetchHomeData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })

      .addCase(fetchHomeData.rejected, (state, action) => {
        state.status = "failed";
        state.error =
          action.payload || action.error?.message || "Something went wrong";
      });
  },
});

export default homeSlice.reducer;