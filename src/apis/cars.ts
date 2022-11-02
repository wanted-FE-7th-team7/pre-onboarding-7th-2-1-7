import { AxiosInstance } from 'axios';
import { createAxiosInstance } from './axiosUtils';

export type FuelType = 'gasoline' | 'hybrid' | 'ev';
export type Segment = 'C' | 'D' | 'E' | 'SUV';

const CARS_API = {
  BaseUrl: 'https://preonboarding.platdev.net',
  Api: {
    Cars: '/api/cars',
  },
};

export interface Car {
  id: number;
  startDate: string;
  createdAt: string;
  attribute: {
    brand: string;
    name: string;
    segment: string;
    fuelType: string;
    imageUrl: string;
  };
  amount: number;
  insurance: {
    name: string;
    description: string;
  }[];
  additionalProducts: {
    name: string;
    amount: number;
  }[];
}

export interface CarsResponse {
  payload: Car[];
}

class Cars {
  private apiInstance: AxiosInstance;

  constructor() {
    this.apiInstance = createAxiosInstance(CARS_API.BaseUrl);
  }

  public get() {
    return this.apiInstance.get(CARS_API.Api.Cars);
  }
}

export default new Cars();
