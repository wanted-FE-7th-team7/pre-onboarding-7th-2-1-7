import styled from 'styled-components';
import { flex } from '../styles/theme';

interface Props {
  brand: string;
  name: string;
  classType: string;
  fuelType: string;
  amount: number;
  imageUrl: string;
}

function CarItem({
  brand,
  name,
  classType,
  fuelType,
  amount,
  imageUrl,
}: Props) {
  return (
    <Wrapper>
      <div>
        <p>{brand}</p>
        <p>{name}</p>
        <p>
          {classType} / {fuelType}
        </p>
        <p>월 {amount} 원 부터</p>
      </div>
      <ImgWrapper>
        <img src={imageUrl} alt="car" />
      </ImgWrapper>
    </Wrapper>
  );
}

export default CarItem;

const ImgWrapper = styled.div`
  img {
    width: 15.2rem;
    height: 8rem;
  }
`;

const Wrapper = styled.div`
  ${flex()}
`;
