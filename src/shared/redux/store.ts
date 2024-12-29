import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import { loadingBarReducer } from "react-redux-loading-bar";

const store = configureStore({
  reducer: {
    auth: authReducer,
    loadingBar: loadingBarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
