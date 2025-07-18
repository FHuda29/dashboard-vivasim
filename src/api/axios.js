import axios from 'axios';
import ApiConfig  from "src/constants/apiConstants";

const apiUrl = ApiConfig.apiUrl;
const instance = axios.create({
  baseURL: apiUrl,
});

instance.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default instance;