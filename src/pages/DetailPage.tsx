import { useLocation } from 'react-router';
import styled from 'styled-components';
import HeaderBar from '../UIs/HeaderBar';
import ListHeader from '../UIs/ListHeader';
import ListItem from '../UIs/ListItem';

interface Props {}

function DetailPage() {
  const location = useLocation();
  const { id, startDate, insurance, additionalProducts } = location.state;
  const { brand, name, segment, fuelType, imageUrl } = location.state.attribute;

  return (
    <Wrapper>
      <HeaderBar title="차량상세" />

      <div>
        <img src={imageUrl} alt="car" />
      </div>
      <ListHeader title="월 비용" />
      <ListItem name="차종" title="{segment}" />
      <ListItem name="차종" title="{segment}" />
      <ListItem name="차종" title="{segment}" />
      <ListHeader title="월 비용" />
      <ListItem name="차종" title="{segment}" />
      <ListItem name="차종" title="{segment}" />
      <ListHeader title="월 비용" />
      <ListItem name="차종" title="{segment}" />
    </Wrapper>
  );
}

export default DetailPage;

const Wrapper = styled.div``;
