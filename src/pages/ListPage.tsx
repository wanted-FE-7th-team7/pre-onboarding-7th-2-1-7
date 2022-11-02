import CarCard from '../components/UI/CarCard';
import Category from '../components/UI/Category';
import { ALL, CATEGORY } from '../constants';
import { useState, useEffect } from 'react';
import { getCars } from '../apis/getCars';
import { Car, Segment } from '../models';

export default function ListPage() {
  const [selectedCategory, setSelectedCategory] = useState(
    Object.keys(CATEGORY)[0]
  );
  const [carList, setCarList] = useState<Car[]>([]);
  // Todo : hook 으로 만들기
  useEffect(() => {
    const getCarList = async () => {
      // as 사용
      const params =
        selectedCategory === ALL
          ? {}
          : { segment: selectedCategory as Segment };
      const data = await getCars(params);

      setCarList(data);
    };
    getCarList();
  }, [selectedCategory]);

  const handleCategoryClick = (selected: string) => {
    setSelectedCategory(selected);
  };

  return (
    <>
      <Category
        selectedCategory={selectedCategory}
        onClick={handleCategoryClick}
      />
      {carList?.map(car => (
        <CarCard
          key={car.id}
          id={car.id}
          createdAt={car.startDate}
          brand={car.attribute.brand}
          name={car.attribute.name}
          segment={CATEGORY[car.attribute.segment]}
          fuelType={car.attribute.fuelType}
          amount={car.amount}
          imageSrc={car.attribute.imageUrl}
        />
      ))}
    </>
  );
}
