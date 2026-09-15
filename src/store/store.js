import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "@/register/slices/homeSlice";

export const store = configureStore({
  reducer: {
    home: homeReducer,
  },
});
 