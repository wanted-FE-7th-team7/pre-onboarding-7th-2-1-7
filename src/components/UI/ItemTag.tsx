import React from 'react';
import styled from 'styled-components';

function ItemTag() {
  return <SItemTag>신규</SItemTag>;
}

const SItemTag = styled.div`
  width: 3.5rem;
  height: 1.5rem;
  border-radius: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${props => props.theme.blue};
  color: white;
`;

export default ItemTag;
