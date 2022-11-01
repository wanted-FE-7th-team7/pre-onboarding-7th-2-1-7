import CarCard from '../components/UI/CarCard';
import Category from '../components/UI/Category';

const dummyCategory = ['전체', '대형', '중형', '소형', '전기'];
export default function ListPage() {
  return (
    <>
      <Category category={dummyCategory} />
      <CarCard
        brand="adf"
        name="df"
        classType="df"
        fuelType="df"
        amount={1}
        imageSrc=""
      />
    </>
  );
}
