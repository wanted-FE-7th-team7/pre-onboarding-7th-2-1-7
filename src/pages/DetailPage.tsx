import styled from 'styled-components';
import { DetailHeaderBar } from '../components/Ui/DetailHeaderBar';
export function DetailPage() {
  return (
    <ListPageWrap>
      <ListWrap>
        <HeaderBarWrap>
          <DetailHeaderBar />
        </HeaderBarWrap>
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
