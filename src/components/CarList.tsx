import { useNavigate } from 'react-router';
import { Cars } from '../interfaces/Cars';
import CarItem from './CarItem';

interface Props {
  cars: Cars[];
}

function CarList({ cars }: Props) {
  return (
    <div>
      {cars.map(car => (
        <CarItem key={car.id} car={car} />
      ))}
    </div>
  );
}

export default CarList;
