import axios from 'axios';

const AxiosClient = axios.create({
  responseType: 'json',
  headers: { 'Content-Type': 'application/json;charset=utf-8' }
});

export default AxiosClient;
