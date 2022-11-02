// @flow
import * as React from 'react';
import { Car } from '../../apis/cars';
type Props = {
  cars: Car[];
};
export function CarsList({ cars }: Props) {
  return (
    <div>
      {cars.map(car => (
        <React.Fragment key={car.id}>
          <div>{car.amount}</div>
          <div>{car.id}</div>
          <div>{car.id}</div>
        </React.Fragment>
      ))}
    </div>
  );
}
