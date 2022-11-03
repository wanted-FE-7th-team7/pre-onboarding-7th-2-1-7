import React from 'react';
import styled from 'styled-components';

interface Props {
  list: string;
}

function Tag({ list }: Props) {
  return <STag className="selected-list">{list ? list : '전체'}</STag>;
}

const STag = styled.div`
  width: 5rem;
  height: 2rem;
  border-radius: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${props => props.theme.gray};
  color: ${props => props.theme.black};

  .selected-list {
    background-color: ${props => props.theme.black};
    color: white;
  }
`;

export default Tag;
