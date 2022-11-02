import React from 'react';
import styled from 'styled-components';

function ListHeader() {
  return (
    <SListHeader>
      <div className="cost">월 비용</div>
    </SListHeader>
  );
}

const SListHeader = styled.div`
  display: flex;
  align-items: center;
  width: 30rem;
  height: 4rem;

  background-color: ${props => props.theme.blue};

  .cost {
    margin-left: 10px;
    font-weight: 500;
    font-size: 1.5rem;
    color: white;
  }
`;

export default ListHeader;
