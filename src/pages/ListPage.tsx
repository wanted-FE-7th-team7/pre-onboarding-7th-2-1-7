import { useState } from 'react';
import CarList from '../components/CarList';
import Error from '../components/Error';
import Loading from '../components/Loading';
import NoData from '../components/NoData';
import useFetch from '../hooks/useFetch';
import { Cars } from '../interfaces/Cars';
import Category from '../components/UIs/Category';
import HeaderBar from '../components/UIs/HeaderBar';
import Layout from '../styles/Layout';

function ListPage() {
  const [cars, setCars] = useState<Cars[]>([]);
  const [selectedType, setSelectedType] = useState('전체');

  const [isLoading, errors] = useFetch(setCars, selectedType);

  const isEmpty = !isLoading && cars.length === 0;
  const hasCarList = !isLoading && cars.length > 0;

  if (errors) {
    return <Error />;
  }

  return (
    <Layout>
      <HeaderBar title="전체차량" />

      <Category selectedType={selectedType} setSelectedType={setSelectedType} />

      {isLoading && <Loading />}

      {isEmpty && <NoData />}

      {hasCarList && <CarList cars={cars} />}
    </Layout>
  );
}

export default ListPage;
