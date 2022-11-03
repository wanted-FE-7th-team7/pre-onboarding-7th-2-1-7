import React from 'react';
import styled from 'styled-components';
import { isNewCar } from '../utils/new';
import { FUEL_TEXT, SEGMENT_TEXT } from '../utils/index';

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
      {isNewCar(createdAt) ? <S.New>신규</S.New> : ''}
      <div>
        <div className="brand-name">
          <div>{brand}</div>
          <div>{name}</div>
        </div>
        <div className="type-amount">
          <div>
            {SEGMENT_TEXT[segment]} / {FUEL_TEXT[fuelType]}
          </div>
          <div>월 {amount}원 부터</div>
        </div>
      </div>
      <img src={imageSrc} className="car-img" alt="car-img" />
    </S.CarItems>
  );
}

const S = {
  CarItems: styled.div`
    width: 32rem;
    height: 10rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0.5rem;
    border-bottom: 2px solid black;

    .brand-name {
      margin-bottom: 1rem;
      div {
        font-weight: 700;
      }
    }

    .car-img {
      width: 17rem;
      height: 10rem;

      background-color: ${props => props.theme.gray};
    }
  `,
  New: styled.div`
    width: 5.2rem;
    height: 2.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0.8rem;
    right: 0.8rem;
    background-color: ${props => props.theme.blue};
    font-size: 1.4rem;
    font-weight: 700;
    border-radius: 3.1rem;
    color: white;
  `,
};
export default CarItem;
