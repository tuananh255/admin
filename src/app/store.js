import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../feature/auth/authSlice";
import uploadReducer from "../feature/upload/uploadSlice";
import slideReducer from "../feature/slide/SlideSlice";

// tổng hợp các reducer để truyền vào provider
export const store = configureStore({
  reducer: {
    auth: authReducer,
    upload: uploadReducer,
    slide: slideReducer,
  },
});
