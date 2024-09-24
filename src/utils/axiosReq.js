import axios from 'axios';

const baseURL = window.location.hostname === 'localhost'
? 'http://localhost:5000/api'
: 'https://edu-quest-server.vercel.app/api';

const axiosReq = axios.create({
  baseURL: baseURL,
  withCredentials: true
});

export default axiosReq;
