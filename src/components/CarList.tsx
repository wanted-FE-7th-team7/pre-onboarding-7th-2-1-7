import styled from 'styled-components';
import { Cars } from '../interfaces/Cars';
import { CATEGORY_HEIGHT, HEADER_HEIGHT } from '../styles/theme';
import CarItem from './CarItem';

interface Props {
  cars: Cars[];
}

function CarList({ cars }: Props) {
  return (
    <Wrapper className="mg-t-nav">
      {cars.map(car => (
        <CarItem key={car.id} car={car} />
      ))}
    </Wrapper>
  );
}

export default CarList;

const Wrapper = styled.div`
  margin-top: calc(${HEADER_HEIGHT} + ${CATEGORY_HEIGHT});
`;
