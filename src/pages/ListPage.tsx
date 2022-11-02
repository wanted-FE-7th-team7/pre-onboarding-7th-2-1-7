// @flow
import * as React from 'react';
import { Car } from '../apis/cars';
import { CarsList } from '../components/ListPage/CarsList';
import { CarsFilter, Category } from '../components/ListPage/Category';
import { useCarsState, useGetCars } from '../contexts/CarsContext';

const defaultFilter = (cars: Car[]) => cars;
export function ListPage() {
  const getCars = useGetCars();
  const carsState = useCarsState();
  const [carsFilter, setCarsFilter] = React.useState<{ filter: CarsFilter }>({
    filter: defaultFilter,
  });

  React.useEffect(() => {
    getCars();
  }, [getCars]);

  return (
    <>
      <Category setCarsFilter={setCarsFilter} />
      {carsState.data && (
        <CarsList cars={carsFilter.filter(carsState.data?.payload)} />
      )}
    </>
  );
}
