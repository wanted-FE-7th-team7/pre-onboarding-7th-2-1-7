import { useState } from 'react';
import CarList from '../components/CarList';
import Error from '../components/Error';
import Loading from '../components/Loading';
import useFetch from '../hooks/useFetch';
import { Cars } from '../interfaces/Cars';
function ListPage() {
  const [cars, setCars] = useState<Cars[]>([]);
  const [isLoading, errors] = useFetch(setCars);

  if (errors) {
    return <Error />;
  }

  return (
    <>
      {isLoading ? <Loading /> : <CarList cars={cars} />}
    </>
  );
}

export default ListPage;
