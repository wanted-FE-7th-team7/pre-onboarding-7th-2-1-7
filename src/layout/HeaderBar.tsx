import { useLocation } from 'react-router';
import { useParams } from 'react-router';
import styled from 'styled-components';

export default function HeaderBar() {
  const location = useLocation();
  //Todo : 라우팅 제대로 처리
  if (location.pathname === '/') {
    return <S.Header>전체 차량</S.Header>;
  } else {
    return <S.Header>차량 상세</S.Header>;
  }
}

const S = {
  Header: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.7rem;
    font-weight: 700;
    height: 6rem;
  `,
};
