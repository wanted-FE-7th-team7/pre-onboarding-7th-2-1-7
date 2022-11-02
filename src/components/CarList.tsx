import { Cars } from '../interfaces/Cars';
interface Props {
  cars: Cars[];
}

function CarList({ cars }: Props) {
  return (
    <div>
      CarList
    </div>
  );
}

export default CarList;
