import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { Cars } from '../interfaces/Cars';
import { flex } from '../styles/theme';
import Image from './UIs/Image';

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
        <div className="pd-ud-8px">
          <p className="name">{brand}</p>
          <p className="name">{name}</p>
        </div>
        <p className="desc">
          {segment} / {fuelType}
        </p>
        <p className="desc">월 {amount.toLocaleString()} 원 부터</p>
      </div>
      <Image src={imageUrl} size="LIST_PAGE" />
    </Wrapper>
  );
}

export default CarItem;
const Wrapper = styled.div`
  ${flex('space-between')}
  height: 12rem;
  padding: 0 2rem;
  cursor: pointer;
  border-bottom: 1px solid black;

  .name {
    font-weight: 700;
    font-size: 1.4rem;
  }
  .desc {
    font-weight: 500;
    font-size: 1.2rem;
  }
  .pd-ud-8px {
    padding-bottom: 0.8rem;
  }
`;
