import axios from 'axios';

interface getCarQuery {
  fuelType: 'gasoline' | 'hybrid' | 'ev';
  segment: 'C' | 'D' | 'E' | 'SUV';
}

export const getCars = ({ fuelType, segment }: getCarQuery) => {
  try {
    const response = axios.get(`${process.env.REACT_APP_BASE_URL}/api/cars`, {
      params: {
        fuelType,
        segment,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};
