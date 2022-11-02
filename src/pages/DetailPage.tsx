import React from 'react';
import { useLocation } from 'react-router';
import { CarResponse } from '../models/car';
import { getEnumValue } from '../utils/enumKeyValue';

function DetailPage() {
  const { state } = useLocation();
  const { amount, attribute, startDate, insurance, additionalProducts } =
    state.item;
  const { brand, name, segment, fuelType, imageUrl } = attribute;
  const changeFuelType = getEnumValue(fuelType, 'fuel');
  const changeSegment = getEnumValue(segment, 'segment');
  // console.log('insurance :>> ', insurance); // 배열
  // console.log('additionalProducts :>> ', additionalProducts); // 배열
  return (
    <div>
      <img src={imageUrl} />
      {brand} {name} {amount} {changeSegment} {changeFuelType} {startDate}
    </div>
  );
}

export default DetailPage;
