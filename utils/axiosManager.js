import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://128.199.29.72:3000/", // Replace this with your API base URL
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
  // Add methods for other HTTP verbs as needed (e.g., put, delete)
};

const handleAxiosError = (error) => {
  // Handle Axios errors (e.g., logging, error reporting)
  console.error("Axios error:", error);
};

export default axiosManager;
