import { useState } from 'react';
import CarList from '../components/CarList';
import Error from '../components/Error';
import Loading from '../components/Loading';
import useFetch from '../hooks/useFetch';
import { Cars } from '../interfaces/Cars';
import Category from '../UIs/Category';
import HeaderBar from '../UIs/HeaderBar';
import Tag from '../UIs/Tag';

function ListPage() {
  const [cars, setCars] = useState<Cars[]>([]);
  const [isLoading, errors] = useFetch(setCars);

  if (errors) {
    return <Error />;
  }

  return (
    <>
      <HeaderBar title="전체차량" />
      <Category>
        <Tag isSelected={true} placeholder="전체" />
        <Tag isSelected={false} placeholder="대형" />
        <Tag isSelected={false} placeholder="중형" />
        <Tag isSelected={false} placeholder="소형" />
        <Tag isSelected={false} placeholder="전기" />
      </Category>

      {isLoading ? <Loading /> : <CarList cars={cars} />}
    </>
  );
}

export default ListPage;
