import axios from 'axios';

const http = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const getCars = async () => {
  const res = await http.get('/api/cars');
  return res.data.payload;
};
