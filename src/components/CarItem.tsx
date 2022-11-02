import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { Cars } from '../interfaces/Cars';
import { flex } from '../styles/theme';
import Image from '../UIs/Image';

interface Props {
  car: Cars;
}

function CarItem({ car }: Props) {
  const navigate = useNavigate();
  const { id, amount, attribute } = car;
  const { brand, name, segment, fuelType, imageUrl } = attribute;

  return (
    <Wrapper onClick={() => navigate(`/cars/${id}`, { state: car })}>
      <div>
        <p>{brand}</p>
        <p>{name}</p>
        <p>
          {segment} / {fuelType}
        </p>
        <p>월 {amount} 원 부터</p>
      </div>
      <Image src={imageUrl} size="LIST_PAGE" />
    </Wrapper>
  );
}

export default CarItem;
const Wrapper = styled.div`
  ${flex()}
  cursor: pointer;
  border-bottom: 1px solid black;
`;
