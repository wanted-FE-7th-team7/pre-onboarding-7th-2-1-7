import { instance } from './api';
import { AxiosInstance } from 'axios';
import { getEnumKey } from '../utils/enumKeyValue';

const BASE_URL = 'https://preonboarding.platdev.net/api/cars';

class CarApi {
  private axiosInstance: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  getCarList = async (fuel?: string, seg?: string) => {
    const fuelType = await getEnumKey(fuel, 'fuel');
    const segment = await getEnumKey(seg, 'segment');
    return this.axiosInstance.get('', {
      params: {
        fuelType,
        segment,
      },
    });
  };
}

const carInstance = instance(BASE_URL);
const carApi = new CarApi(carInstance);
export { carApi };
