import React from 'react';
import styled from 'styled-components';

interface Props {
  text: string;
}

function ListHeader({ text }: Props) {
  return (
    <S.ListHeader>
      <div className="cost">{text}</div>
    </S.ListHeader>
  );
}

const S = {
  ListHeader: styled.div`
    display: flex;
    align-items: center;
    width: 33rem;
    height: 4rem;

    background-color: ${props => props.theme.blue};

    .cost {
      margin-left: 10px;
      font-weight: 500;
      font-size: 1.5rem;
      color: white;
    }
  `,
};

export default ListHeader;
