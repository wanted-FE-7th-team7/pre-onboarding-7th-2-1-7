import React, { useState, useEffect, useMemo } from 'react';
import CarItem from '../components/CarItem';
import Category from '../components/Category';
import HearderBar from '../components/HeaderBar';
import getCars from '../apis/car';
import styled from 'styled-components';
import { Car, Segment } from '../models';
import { useNavigate } from 'react-router-dom';

function ListPage() {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    getCars(setCars);
  }, []);

  const navigate = useNavigate();

  const handleClick = (id: number, carDetail: Car) => {
    navigate(`/${id}`, { state: carDetail });
  };

  return (
    <S.ListPage>
      <HearderBar />
      <Category />
      {cars.map(car => (
        <div
          key={car.id}
          onClick={() => {
            handleClick(car.id, car);
          }}
        >
          <CarItem
            createdAt={car.startDate}
            brand={car.attribute.brand}
            name={car.attribute.name}
            segment={car.attribute.segment}
            fuelType={car.attribute.fuelType}
            amount={car.amount}
            imageSrc={car.attribute.imageUrl}
          />
        </div>
      ))}
    </S.ListPage>
  );
}

const S = {
  ListPage: styled.div``,
};

export default ListPage;
