import React from 'react';
import IconBack from './ICON_Back';
import styled from 'styled-components';

function HeaderBar() {
  const HEADER_TEXT = '전체차량';
  return (
    <S.HeaderContainer>
      <IconBack />
      {HEADER_TEXT}
    </S.HeaderContainer>
  );
}

const S = {
  HeaderContainer: styled.div`
    & {
      position: relative;
      border-bottom: 0.1rem black solid;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 2rem;
      width: 100%;
    }
    & div {
      position: absolute;
      left: 0;
    }
  `,
};

export default HeaderBar;
