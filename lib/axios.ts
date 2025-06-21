import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.MY_CLIENT,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
