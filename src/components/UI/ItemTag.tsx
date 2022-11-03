import React from 'react';
import styled from 'styled-components';

function ItemTag() {
  return <S.ItemTag>신규</S.ItemTag>;
}

const S = {
  ItemTag: styled.div`
    width: 4rem;
    height: 1.5rem;
    border-radius: 50px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${props => props.theme.blue};
    color: white;
  `,
};

export default ItemTag;
