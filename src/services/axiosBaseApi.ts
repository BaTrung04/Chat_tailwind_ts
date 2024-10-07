import axiosClient from "axios";
import { refreshTokenApi } from "./modules/auth";

const axiosAPI = axiosClient.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/api/v1`,
  withCredentials: true,
});

interface RefreshTokenResponse {
  accessToken: string;
}

axiosAPI.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosAPI.interceptors.response.use(
  function (response) {
    return response.data;
  },
  async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const data: RefreshTokenResponse = await refreshTokenApi();
        localStorage.setItem("accessToken", data?.accessToken);
        originalRequest.headers.Authorization = `Bearer ${data?.accessToken}`;
        return axiosAPI(originalRequest);
      } catch (err) {
        localStorage.removeItem("accessToken");
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

export default axiosAPI;
