import styled from 'styled-components';
import { HeaderBar } from '../components/Ui/HeaderBar';
import { Catagory } from '../components/Ui/Catagory';
import { ListItem } from '../components/Ui/ListItem';

export function ListPage() {
  return (
    <ListPageWrap>
      <ListWrap>
        <HeaderBarWrap>
          <HeaderBar />
        </HeaderBarWrap>
        <CatagoryWrap>
          <Catagory />
        </CatagoryWrap>
        <ListItemWrap>
          <ListItem />
        </ListItemWrap>
      </ListWrap>
    </ListPageWrap>
  );
}

const ListPageWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const ListWrap = styled.div`
  width: 39rem;
  height: 100%;
  border: 1px solid black;
`;

const HeaderBarWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 6rem;
  border-bottom: 1px solid black;
`;

const CatagoryWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 4rem;
  border-bottom: 1px solid black;
`;

const ListItemWrap = styled.div`
  width: 100%;
`;
