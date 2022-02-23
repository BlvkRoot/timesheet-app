import axiosInstance from './axios';

const baseUrl = 'http://localhost:4141/api/v1/users/';

const authenticate = (loginParams) => {
  return axiosInstance.post(`${baseUrl}login`, loginParams);
};

const isAuthenticated = () => {
  return axiosInstance.get(`${baseUrl}isAuthenticated`);
};

export { authenticate, isAuthenticated };
