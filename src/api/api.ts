// api/authAPI.ts
import axiosInstance from './axiosInstance';

const loginRequest = async (username: string, password: string) => {
  return await axiosInstance.post('/login', { username, password });
};

const registerRequest = async (
  email: string,
  username: string,
  password: string
) => {
  return await axiosInstance.post('/register', { email, username, password });
};

// const register = async (userData: any) => {
//   return await axiosInstance.post('/register', userData);
// };

export { loginRequest, registerRequest };
