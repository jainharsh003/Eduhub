import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/auth'; // Replace with your actual backend API URL

const axiosConfig = {
  withCredentials: true,
};

const AuthApi = {
  login: async (email, password) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/login`, { email, password }, axiosConfig);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  register: async (email, password) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/register`, { email, password }, axiosConfig);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  logout: async () => {
    try {
      const response = await axios.post(`${API_BASE_URL}/logout`, {}, axiosConfig);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  forgotPassword: async (email) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/forgot-password`, { email }, axiosConfig);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  resetPassword: async (token, newPassword) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/reset-password/${token}`, { newPassword }, axiosConfig);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  authenticate: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/authenticate`, axiosConfig);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
};

export default AuthApi;
