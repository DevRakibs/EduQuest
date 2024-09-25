import axios from 'axios';

const baseURL ='https://edu-quest-server.vercel.app/api';

const axiosReq = axios.create({
  baseURL: baseURL,
  withCredentials: true
});

export default axiosReq;
