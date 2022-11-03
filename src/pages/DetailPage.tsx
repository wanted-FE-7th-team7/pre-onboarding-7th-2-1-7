import { useLocation } from 'react-router';
import styled from 'styled-components';
import ListHeader from '../components/UI/ListHeader';
import ListItem from '../components/UI/ListItem';
import { FUEL_TEXT, SEGMENT_TEXT } from '../constants';
import { Car } from '../models';
import { formatStartDate, formatWonPerMonth } from '../utils/format';

const TITLE_CAR_INFO = '차량 정보';
const TITLE_CAR_INSURANCE = '보험';
const TITLE_CAR_ADDITIONAL_PRODUCT = '추가 상품';
const NAME_SEGMENT = '차종';
const NAME_FUEL = '연료';
const NAME_START_DATE = '이용 가능일';

export default function DetailPage() {
  const { state: car } = useLocation();
  console.log(car);
  const { amount, attribute, additionalProducts, insurance, startDate }: Car =
    car;
  return (
    <S.Wrapper>
      <S.Image src={attribute.imageUrl} alt="detail" />
      <S.Main>
        <S.BrandText>{attribute.brand}</S.BrandText>
        <S.NameText>{attribute.name}</S.NameText>
        <ListItem name="" description={formatWonPerMonth(amount)} />
      </S.Main>
      <ListHeader text={TITLE_CAR_INFO} />
      <ListItem
        name={NAME_SEGMENT}
        description={SEGMENT_TEXT[attribute.segment]}
      />
      <ListItem name={NAME_FUEL} description={FUEL_TEXT[attribute.fuelType]} />
      <ListItem
        name={NAME_START_DATE}
        description={formatStartDate(new Date(startDate))}
      />
      <ListHeader text={TITLE_CAR_INSURANCE} />
      {insurance?.map(({ name, description }, idx) => (
        <ListItem key={idx} name={name} description={description} />
      ))}
      <ListHeader text={TITLE_CAR_ADDITIONAL_PRODUCT} />
      {additionalProducts?.map(({ name, amount }, idx) => (
        <ListItem
          key={idx}
          name={name}
          description={formatWonPerMonth(amount)}
        />
      ))}
    </S.Wrapper>
  );
}

const S = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
  `,

  Image: styled.img`
    height: 20rem;
    background-color: ${({ theme }) => theme.gray};
    margin-bottom: 2rem;
  `,
  Main: styled.div`
    display: flex;
    flex-direction: column;
  `,
  BrandText: styled.span`
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.2rem;
  `,
  NameText: styled.span`
    font-size: 2.4rem;
    font-weight: 700;
  `,
};
