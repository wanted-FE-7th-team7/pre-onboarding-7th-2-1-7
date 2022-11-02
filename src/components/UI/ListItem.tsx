import React from 'react';
import { CarResponse } from '../../models/car';
import { getEnumValue } from '../../utils/enumKeyValue';
import styled from 'styled-components';
import { moneyForm } from '../../utils/moneyForm';

interface Props {
  item: CarResponse;
}

function ListItem(item: Props) {
  const { amount, attribute } = item.item;
  const { brand, name, segment, fuelType, imageUrl } = attribute;
  const changeFuelType = getEnumValue(fuelType, 'fuel');
  const changeSegment = getEnumValue(segment, 'segment');

  return (
    <S.ItemContainer>
      <div>
        <ul>
          <li>{brand}</li>
          <li>{name}</li>
          <div>
            <li>{changeSegment}</li>
            <li>{changeFuelType}</li>
          </div>
          <li>{moneyForm(amount)}</li>
        </ul>
      </div>
      <div>
        <img src={imageUrl} alt="carImg" />
      </div>
    </S.ItemContainer>
  );
}

const S = {
  ItemContainer: styled.div`
    & {
      display: flex;
      padding: 0.5rem 1rem;
      align-items: center;
      border-bottom: 1px solid var(--black);
      background-color: lavender;
    }
    div {
      width: 50%;
    }
    img {
      width: 100%;
    }
  `,
};

export default ListItem;
