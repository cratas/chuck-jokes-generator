import axios from "axios";
import { ROOT_API_URL } from "./constants";

// config for axiosClient
const axiosClient = axios.create({
  baseURL: ROOT_API_URL, // main API URL
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosClient;
