import { useEffect, useState } from 'react';
import { carApi } from '../apis/carApi';
import { CarResponse } from '../models/car';

interface carListState {
  carList: CarResponse[];
  isEmpty: boolean;
}

const useCarList = (fuelType?: string, segment?: string) => {
  const [carList, setCarList] = useState<CarResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);

  useEffect(() => {
    const fetchCarList = () => {
      try {
        carApi
          .getCarList(fuelType, segment)
          .then(res =>
            res.data.payload.length !== 0
              ? setCarList(res.data.payload)
              : setIsEmpty(true)
          );
      } catch (error) {
        setLoading(false);
        setIsEmpty(false);
      } finally {
        setLoading(false);
        setIsEmpty(false);
      }
    };
    fetchCarList();
  }, [fuelType, segment]);

  return [carList, loading, isEmpty] as const;
};

export default useCarList;
