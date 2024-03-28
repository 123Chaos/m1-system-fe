import axios from 'axios';

const BASE_URL = '';

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
  responseType: 'json'
});

instance.interceptors.request.use((config: any): any => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.token = token;
  }
  return config;
});

instance.interceptors.response.use((res: any): any => {
  return res.data;
});

export default instance;
