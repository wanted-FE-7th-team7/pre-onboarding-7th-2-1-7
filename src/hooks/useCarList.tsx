import { useEffect, useState } from 'react';
import { carApi } from '../apis/carApi';

const useCarList = (fuelType?: string, segment?: string) => {
  const [carList, setCarList] = useState([]);
  useEffect(() => {
    const petchCarList = () => {
      carApi
        .getCarList(fuelType, segment)
        .then(res => setCarList(res.data.payload));
    };
    petchCarList();
  }, [fuelType, segment]);

  return carList;
};

export default useCarList;
