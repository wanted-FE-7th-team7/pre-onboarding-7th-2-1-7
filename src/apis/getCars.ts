import axios from 'axios';
import { Segment } from '../models';

interface getCarQuery {
  fuelType?: 'gasoline' | 'hybrid' | 'ev';
  segment?: Segment;
}

export const getCars = async (params: getCarQuery) => {
  try {
    const data = await axios
      .get(`${process.env.REACT_APP_BASE_URL}/api/cars`, {
        params: params,
      })
      .then(response => response.data.payload);
    return data;
  } catch (error) {
    console.error(error);
  }
};
