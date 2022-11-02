import React from 'react';
import { CarResponse } from '../../models/car';
import { getEnumValue } from '../../utils/enumKeyValue';
import styled from 'styled-components';
import { moneyForm } from '../../utils/moneyForm';
import { useNavigate } from 'react-router';

interface Props {
  item: CarResponse;
}

function ListItem(item: Props) {
  const { id, amount, attribute } = item.item;
  const { brand, name, segment, fuelType, imageUrl } = attribute;
  const changeFuelType = getEnumValue(fuelType, 'fuel');
  const changeSegment = getEnumValue(segment, 'segment');

  const navigate = useNavigate();

  const goDetail = () => {
    navigate(`/carList/${id}`, { state: item });
  };

  return (
    <S.ItemContainer onClick={goDetail}>
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
      cursor: pointer;
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
