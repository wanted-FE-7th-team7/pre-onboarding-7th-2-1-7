import React from 'react';
import styled from 'styled-components';

interface Props {
  name: string;
  description: string;
}

function ListItem({ name, description }: Props) {
  return (
    <S.ListItem>
      <div className="bold">{name}</div>
      <div className="cost">{description}</div>
    </S.ListItem>
  );
}

const S = {
  ListItem: styled.div`
    display: flex;
    align-items: center;
    width: 33rem;
    height: 4rem;

    .bold {
      margin-left: 0.5rem;
      font-size: 1.7rem;
      font-weight: 700;
    }

    .cost {
      margin-right: 1.5rem;
      margin-left: auto;
      font-size: 1.5rem;
    }
  `,
};
export default ListItem;
