import axios from 'axios';

const http = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const getCars = async (selectedType: string) => {
  const url = types[selectedType];
  const res = await http.get(url);
  return res.data.payload;
};

const types: Types = {
  전체: `/api/cars`,
  대형: `/api/cars?segment=${'E'}`,
  중형: `/api/cars?segment=${'D'}`,
  소형: `/api/cars?segment=${'C'}`,
  전기: `/api/cars?fuelType=${'ev'}`,
};

interface Types {
  [index: string]: string;
}
