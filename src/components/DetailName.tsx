import styled from 'styled-components';
import ListItem from './UIs/ListItem';

interface Props {
  brand: string;
  name: string;
  amount: number;
}

function DetailName({ brand, name, amount }: Props) {
  return (
    <Wrapper>
      <p className="brand">{brand}</p>
      <p className="name">{name}</p>
      <ListItem title={`월 ${amount.toLocaleString()} 원`} />
    </Wrapper>
  );
}

export default DetailName;

const Wrapper = styled.div`
  padding: 0 2rem;
  .brand {
    font-weight: 700;
    font-size: 2rem;
  }
  .name {
    font-weight: 700;
    font-size: 2.4rem;
  }
`;
