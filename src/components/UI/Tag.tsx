import React from 'react';
import styled from 'styled-components';

interface Props {
  list: string;
}
const Tag: React.FC<Props> = ({ list }) => {
  return <STag className="selected-list">{list ? list : '전체'}</STag>;
};

const STag = styled.div`
  width: 3.5rem;
  height: 1.5rem;
  border-radius: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: 0.5rem;

  background-color: ${props => props.theme.gray};
  color: ${props => props.theme.black};

  .selected-list {
    background-color: ${props => props.theme.black};
    color: white;
  }
`;

export default Tag;
