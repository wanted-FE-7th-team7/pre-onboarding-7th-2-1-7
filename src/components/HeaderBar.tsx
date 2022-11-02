import React from 'react';
import styled from 'styled-components';
import IconBack from './UI/IconBack';

function HearderBar() {
  return (
    <SHeaderBar>
      <div className="header-layout">
        <IconBack />
        <div>전체차량</div>
        <div className="none" />
      </div>
    </SHeaderBar>
  );
}

const SHeaderBar = styled.div`
  .header-layout {
    width: 30rem;
    height: 5rem;

    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: solid 1px black;
  }
`;

export default HearderBar;
