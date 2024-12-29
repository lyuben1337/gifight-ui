import axios from "axios";
import { ApiError } from "./apiError.ts";
import { toast } from "react-toastify";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import store from "../redux/store.ts";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_TIMEOUT = Number(import.meta.env.VITE_API_TIMEOUT);

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: API_TIMEOUT,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    store.dispatch(showLoading());
    return config;
  },
  (error) => {
    store.dispatch(hideLoading());
    return Promise.reject(error);
  },
);

apiClient.interceptors.response.use(
  (response) => {
    store.dispatch(hideLoading());
    return response;
  },
  (error) => {
    store.dispatch(hideLoading());

    if (error.response) {
      const { status, data } = error.response;

      if (status === 401 && localStorage.getItem("token")) {
        localStorage.removeItem("token");
        toast.error("Session Expired!");
      }

      if (data && data.code && data.message) {
        toast.error(data.message);
        throw new ApiError(data.message, data.code, status);
      }
    }
    return Promise.reject(error);
  },
);

export default apiClient;
