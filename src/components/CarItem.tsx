import React from 'react';
import styled from 'styled-components';

interface Props {
  createdAt: Date;
  brand: string;
  name: string;
  segment: string;
  fuelType: string;
  amount: number;
  imageSrc: string;
}

function CarItem({
  createdAt,
  brand,
  name,
  segment,
  fuelType,
  amount,
  imageSrc,
}: Props) {
  return (
    <S.CarItems>
      <div>
        <div className="brand-name">
          <div>{brand}</div>
          <div>{name}</div>
        </div>
        <div className="type-amount">
          <div>classType / {fuelType}</div>
          <div>월 {amount} 원 부터</div>
        </div>
      </div>
      <img src={imageSrc} className="car-img" />
    </S.CarItems>
  );
}

const S = {
  CarItems: styled.div`
    width: 32rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0.5rem;
    border-bottom: 2px solid black;

    .car-img {
      width: 13rem;
      height: 7rem;

      background-color: ${props => props.theme.gray};
    }
  `,
};
export default CarItem;
