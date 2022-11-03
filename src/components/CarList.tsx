import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { Cars } from '../interfaces/Cars';
import { CATEGORY_HEIGHT, flex, HEADER_HEIGHT } from '../styles/theme';
import { isNewCarItem } from '../utils/isNewCarItem';
import { FUEL_TYPE, SEGMENT } from '../utils/variables';
import Image from './UIs/Image';
import Tag from './UIs/Tag';

interface Props {
  cars: Cars[];
}

function CarList({ cars }: Props) {
  const navigate = useNavigate();

  return (
    <Wrapper className="mg-t-nav">
      {cars.map(car => {
        const { id, amount, attribute, createdAt } = car;
        const { brand, name, segment, fuelType, imageUrl } = attribute;

        return (
          <CarItemWrapper
            key={id}
            onClick={() => navigate(`/cars/${id}`, { state: car })}
          >
            <div>
              <div className="pd-ud-8px">
                <p className="name">{brand}</p>
                <p className="name">{name}</p>
              </div>
              <p className="desc">
                {SEGMENT[segment]} / {FUEL_TYPE[fuelType]}
              </p>
              <p className="desc">월 {amount.toLocaleString()} 원 부터</p>
            </div>
            <StyledImageWrapper>
              <Image src={imageUrl} size="LIST_PAGE" />
              {isNewCarItem(createdAt) && (
                <Tag placeholder="신규" color="blue" />
              )}
            </StyledImageWrapper>
          </CarItemWrapper>
        );
      })}
    </Wrapper>
  );
}

export default CarList;

const Wrapper = styled.div`
  margin-top: calc(${HEADER_HEIGHT} + ${CATEGORY_HEIGHT});
`;

const CarItemWrapper = styled.div`
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

const StyledImageWrapper = styled.div`
  position: relative;
  & button {
    position: absolute;
    top: -1.2rem;
    right: -1.2rem;
    width: 5.2rem;
    height: 2.2rem;
    font-size: 1.2rem;
    line-height: 2.2rem;
    border-radius: 4.2rem;
    padding: 0;
  }
`;
