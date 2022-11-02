import { Cars } from '../interfaces/Cars';
import CarItem from './CarItem';

interface Props {
  cars: Cars[];
}

function CarList({ cars }: Props) {
  return (
    <div>
      CarList
      {cars.map(({ id, amount, attribute }) => (
        <CarItem
          key={id}
          brand={attribute.brand}
          name={attribute.name}
          classType={attribute.segment}
          fuelType={attribute.fuelType}
          amount={amount}
          imageUrl={attribute.imageUrl}
        />
      ))}
    </div>
  );
}

export default CarList;
