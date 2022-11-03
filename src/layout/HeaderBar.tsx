import { useLocation, useNavigate } from 'react-router';
import styled from 'styled-components';

const ICON_URL =
  'https://user-images.githubusercontent.com/75849590/199627786-c2fc45f0-2b24-4c41-8e9b-309caa86c859.png';

export default function HeaderBar() {
  const location = useLocation();
  const navigate = useNavigate();
  //Todo : 라우팅 제대로 처리
  if (location.pathname === '/') {
    return <S.Header>전체 차량</S.Header>;
  } else {
    return (
      <S.Header>
        <S.Icon
          onClick={() => {
            navigate(-1);
          }}
        />
        차량 상세
      </S.Header>
    );
  }
}

const S = {
  Header: styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.7rem;
    font-weight: 700;
    height: 6rem;
  `,
  Icon: styled.div`
    position: absolute;
    left: 1rem;
    top: calc(50% - 1.4rem);
    width: 2.8rem;
    height: 2.8rem;
    background-image: url(https://user-images.githubusercontent.com/75849590/199627786-c2fc45f0-2b24-4c41-8e9b-309caa86c859.png);
    background-position: center;
    background-repeat: no-repeat;
    :hover {
      cursor: pointer;
    }
  `,
};
