import axios from 'axios';
// import { localStg } from '../utils/storage/local';

// const service = axios.create();
axios.interceptors.request.use();
export const get = async (url: string) => {
  try {
    const response = await axios.get(url);
    return response;
  } catch (e) {
    // console.log(e);
  }
  return null;
};
