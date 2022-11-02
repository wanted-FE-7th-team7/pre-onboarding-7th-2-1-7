import CarCard from '../components/UI/CarCard';
import Category from '../components/UI/Category';
import { CATEGORY } from '../constants';
export default function ListPage() {
  return (
    <>
      <Category category={CATEGORY} />
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
