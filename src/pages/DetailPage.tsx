import { useLocation } from 'react-router';
import styled from 'styled-components';
import DetailName from '../components/DetailName';
import Error from '../components/Error';
import HeaderBar from '../components/UIs/HeaderBar';
import Image from '../components/UIs/Image';
import ListHeader from '../components/UIs/ListHeader';
import ListItem from '../components/UIs/ListItem';
import Layout from '../styles/Layout';
import { HEADER_HEIGHT } from '../styles/theme';
import { Time } from '../utils/time';
import { FUEL_TYPE, SEGMENT } from '../utils/variables';

interface Insurance {
  name: string;
  description: string;
}
interface AdditionalProducts {
  name: string;
  amount: number;
}

function DetailPage() {
  const location = useLocation();
  if (!location.state) {
    return <Error />;
  }

  const { startDate, insurance, additionalProducts, amount } = location.state;
  const { brand, name, segment, fuelType, imageUrl } = location.state.attribute;

  return (
    <Layout>
      <Wrapper>
        <HeaderBar title="차량상세" />
        <Image src={imageUrl} size="DETAIL_PAGE" />
        <DetailName brand={brand} name={name} amount={amount} />

        <ListHeader title="차량 정보" />
        <ListItem name="차종" title={SEGMENT[segment]} />
        <ListItem name="연료" title={FUEL_TYPE[fuelType]} />
        <ListItem name="이용 가능일" title={Time.parseStartDate(startDate)} />
        <ListHeader title="보험" />
        {insurance.map(({ name, description }: Insurance) => (
          <ListItem key={name} name={name} title={description} />
        ))}
        <ListHeader title="추가 상품" />
        {additionalProducts.map(({ name, amount }: AdditionalProducts) => (
          <ListItem
            key={name}
            name={name}
            title={`월 ${amount.toLocaleString()} 원`}
          />
        ))}
      </Wrapper>
    </Layout>
  );
}

export default DetailPage;

const Wrapper = styled.div`
  margin-top: ${HEADER_HEIGHT};
`;
