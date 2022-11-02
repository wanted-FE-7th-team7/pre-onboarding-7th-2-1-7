import styled from 'styled-components';

export default function HeaderBar() {
  return <S.Header>TITLE</S.Header>;
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
