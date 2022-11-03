import React from 'react';
import styled from 'styled-components';
import IconBack from './UI/IconBack';

function HearderBar() {
  return (
    <S.HeaderBar>
      <div className="header-layout">
        {/* <IconBack /> */}
        <h3>전체차량</h3>
        <div className="none" />
      </div>
    </S.HeaderBar>
  );
}

const S = {
  HeaderBar: styled.div`
    .header-layout {
      width: 33rem;
      height: 5rem;

      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: solid 2px black;
    }
  `,
};

export default HearderBar;
