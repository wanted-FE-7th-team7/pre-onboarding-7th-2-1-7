import CarCard from '../components/UI/CarCard';
import Category from '../components/UI/Category';
import { ALL, CATEGORY } from '../constants';
import { useState, useEffect } from 'react';
import { getCars } from '../apis/getCars';
import { Car, Segment } from '../models';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function ListPage() {
  const [selectedCategory, setSelectedCategory] = useState(
    Object.keys(CATEGORY)[0]
  );
  const [carList, setCarList] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  // Todo : hook 으로 만들기 / 리스트 계층 분리 / Suspense 사용해보기
  useEffect(() => {
    setLoading(true);
    setCarList([]);
    const getCarList = async () => {
      const params =
        selectedCategory === ALL
          ? {}
          : { segment: selectedCategory as Segment }; // as 사용
      const data = await getCars(params);

      setCarList(data);
      setLoading(false);
    };
    getCarList();
  }, [selectedCategory]);

  const handleCategoryClick = (selected: string) => {
    setSelectedCategory(selected);
  };
  const navigate = useNavigate();
  const handleClick = (id: number, carDetail: Car) => {
    navigate(`/${id}`, { state: carDetail });
  };

  return (
    <>
      <Category
        selectedCategory={selectedCategory}
        onClick={handleCategoryClick}
      />
      {carList.length ? (
        carList.map(car => (
          <div key={car.id} onClick={() => handleClick(car.id, car)}>
            <CarCard
              createdAt={car.startDate}
              brand={car.attribute.brand}
              name={car.attribute.name}
              segment={car.attribute.segment}
              fuelType={car.attribute.fuelType}
              amount={car.amount}
              imageSrc={car.attribute.imageUrl}
            />
          </div>
        ))
      ) : (
        <S.Message>{loading ? '불러오는 중' : '차량이 없습니다'}</S.Message>
      )}
    </>
  );
}

const S = {
  Message: styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.7rem;
    font-weight: 700;
  `,
};
