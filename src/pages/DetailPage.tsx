import React from 'react';
import HearderBar from '../components/HeaderBar';
import ListHeader from '../components/ListHeader';
import ListItem from '../components/ListItem';
import { Car } from '../models';
import styled from 'styled-components';
import { useLocation } from 'react-router';
import { FUEL_TEXT, SEGMENT_TEXT } from '../utils';
import { formatStartDate } from '../utils/format';

const HEADER_INFO = '차량 정보';
const HEADER_INSURANCE = '보험';
const HEADER_ADDITIONAL_PRODUCT = '추가 상품';
const NAME_SEGMENT = '차종';
const NAME_FUEL = '연료';
const NAME_START_DATE = '이용 가능일';

function DetailPage() {
  const { state: car } = useLocation();
  const { amount, attribute, additionalProducts, insurance, startDate }: Car =
    car;

  return (
    <S.DetailPage>
      <HearderBar />
      <img src={attribute.imageUrl} className="car-img" alt="img" />
      <div>
        <h3 className="brand-name">{attribute.brand}</h3>
        <h3 className="brand-name">{attribute.name}</h3>
      </div>
      <ListItem name="" description={`월 ${amount} 원`} />
      <ListHeader text={HEADER_INFO} />
      <ListItem
        name={NAME_SEGMENT}
        description={SEGMENT_TEXT[attribute.segment]}
      />
      <ListItem name={NAME_FUEL} description={FUEL_TEXT[attribute.fuelType]} />
      <ListItem
        name={NAME_START_DATE}
        description={formatStartDate(new Date(startDate))}
      />
      <ListHeader text={HEADER_INSURANCE} />
      {insurance?.map(({ name, description }, idx) => (
        <ListItem key={idx} name={name} description={description} />
      ))}
      <ListHeader text={HEADER_ADDITIONAL_PRODUCT} />
      {additionalProducts?.map(({ name, amount }, idx) => (
        <ListItem key={idx} name={name} description={`월 ${amount} 원`} />
      ))}
    </S.DetailPage>
  );
}

const S = {
  DetailPage: styled.div`
    display: flex;
    flex-direction: column;

    .car-img {
      width: 33rem;
      height: 20rem;
      background-color: ${props => props.theme.gray};
      margin-bottom: 2rem;
    }

    .brand-name {
      margin-left: 0.5rem;
      font-size: 2rem;
      font-weight: 700;
    }
  `,
};
export default DetailPage;
