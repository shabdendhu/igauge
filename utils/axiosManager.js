import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api/", // Replace this with your API base URL
  timeout: 10000, // Adjust timeout as needed
  withCredentials: true,
});

const axiosManager = {
  get: async (url, config = {}) => {
    try {
      const response = await axiosInstance.get(url, config);
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      throw error;
    }
  },
  post: async (url, data = {}, config = {}) => {
    try {
      const response = await axiosInstance.post(url, data, config);
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      throw error;
    }
  },
  patch: async (url, data = {}, config = {}) => {
    try {
      const response = await axiosInstance.patch(url, data, config);
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      throw error;
    }
  },
  delete: async (url, config = {}) => {
    try {
      const response = await axiosInstance.delete(url, config);
      return response.data;
    } catch (error) {
      handleAxiosError(error);
      throw error;
    }
  },
};

const handleAxiosError = (error) => {
  // Handle Axios errors (e.g., logging, error reporting)
  console.error("Axios error:", error);
};

export default axiosManager;
