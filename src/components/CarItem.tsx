import React from 'react';
import styled from 'styled-components';

function CarItem() {
  return (
    <SCarItem>
      <div>
        <div className="brand-name">
          <div>brand</div>
          <div>name</div>
        </div>
        <div className="type-amount">
          <div>classType / fuelType</div>
          <div>월 amount 원 부터</div>
        </div>
      </div>
      <div className="car-img" />
    </SCarItem>
  );
}

const SCarItem = styled.div`
  width: 30rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0.5rem;

  .car-img {
    width: 10rem;
    height: 5rem;

    background-color: ${props => props.theme.gray};
  }
`;
export default CarItem;
