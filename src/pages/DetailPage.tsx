import { useLocation } from 'react-router';
import styled from 'styled-components';
import DetailName from '../components/DetailName';
import HeaderBar from '../UIs/HeaderBar';
import Image from '../UIs/Image';
import ListHeader from '../UIs/ListHeader';
import ListItem from '../UIs/ListItem';
import dayjs from 'dayjs';

interface Props {}
interface Insuarance {
  name: string;
  description: string;
}
interface AdditionalProducts {
  name: string;
  amount: number;
}

function DetailPage() {
  const location = useLocation();
  const { id, startDate, insurance, additionalProducts, amount } =
    location.state;
  const { brand, name, segment, fuelType, imageUrl } = location.state.attribute;

  return (
    <Wrapper>
      <HeaderBar title="차량상세" />
      <Image src={imageUrl} size="DETAIL_PAGE" />
      <DetailName brand={brand} name={name} amount={amount} />

      <ListHeader title="차량 정보" />
      <ListItem name="차종" title={segment} />
      <ListItem name="연료" title={fuelType} />
      <ListItem name="이용 가능일" title={startDate.toLocaleString()} />
      <ListHeader title="보험" />
      {insurance.map(({ name, description }: Insuarance) => (
        <ListItem key={name} name={name} title={description} />
      ))}
      <ListHeader title="추가 상품" />
      {additionalProducts.map(({ name, amount }: AdditionalProducts) => (
        <ListItem key={name} name={name} title={amount.toLocaleString()} />
      ))}
    </Wrapper>
  );
}

export default DetailPage;

const Wrapper = styled.div``;
