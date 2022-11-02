import React from 'react';
import styled from 'styled-components';

function ListItem() {
  return (
    <SListItem>
      <div className="cost">월 600,000원</div>
    </SListItem>
  );
}

const SListItem = styled.div`
  display: flex;
  align-items: center;
  width: 30rem;
  height: 4rem;

  .cost {
    margin-right: 1.5rem;
    margin-left: auto;
    font-weight: 350;
    font-size: 1.5rem;
  }
`;
export default ListItem;
