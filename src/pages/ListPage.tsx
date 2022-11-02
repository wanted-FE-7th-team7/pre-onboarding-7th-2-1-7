import CarCard from '../components/UI/CarCard';
import Category from '../components/UI/Category';
import { ALL, CATEGORY } from '../constants';
import { useState, useEffect } from 'react';
import { getCars } from '../apis/getCars';
import { Car, Segment } from '../models';
import { useNavigate } from 'react-router-dom';

export default function ListPage() {
  const [selectedCategory, setSelectedCategory] = useState(
    Object.keys(CATEGORY)[0]
  );
  const [carList, setCarList] = useState<Car[]>([]);
  // Todo : hook 으로 만들기
  useEffect(() => {
    const getCarList = async () => {
      const params =
        selectedCategory === ALL
          ? {}
          : { segment: selectedCategory as Segment }; // as 사용
      const data = await getCars(params);

      setCarList(data);
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
      {carList?.map(car => (
        <div key={car.id} onClick={() => handleClick(car.id, car)}>
          <CarCard
            createdAt={car.startDate}
            brand={car.attribute.brand}
            name={car.attribute.name}
            segment={CATEGORY[car.attribute.segment]}
            fuelType={car.attribute.fuelType}
            amount={car.amount}
            imageSrc={car.attribute.imageUrl}
          />
        </div>
      ))}
    </>
  );
}
