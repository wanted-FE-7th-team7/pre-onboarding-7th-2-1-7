import React from 'react';
import styled from 'styled-components';
import Tag from './UI/Tag';

const carList = ['전체', '대형', '중형', '소형', '전기'];

function Category() {
  return (
    <SCategory>
      {carList.map(list => (
        <Tag key={list} list={list} />
      ))}
    </SCategory>
  );
}

const SCategory = styled.div`
  width: 30rem;
  height: 5rem;
  display: flex;
  align-items: center;
  border-bottom: solid 1px black;
`;

export default Category;
