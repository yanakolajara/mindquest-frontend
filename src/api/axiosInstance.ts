// api/axiosInstance.ts
import axios from 'axios';

const axiosInstance = axios.create({
  //TODO: Change base URL
  baseURL: 'https://api.example.com', // Base URL de la API
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
