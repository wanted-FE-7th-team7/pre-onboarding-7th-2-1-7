import React from 'react';
import styled from 'styled-components';
import Tag from './UI/Tag';

const carList = ['전체', '대형', '중형', '소형', '전기'];

function Category() {
  return (
    <S.Category>
      {carList.map(list => (
        <Tag key={list} list={list} />
      ))}
    </S.Category>
  );
}

const S = {
  Category: styled.div`
    width: 33rem;
    height: 4rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    overflow-x: scroll;
    border-bottom: 1px solid black;
  `,
};

export default Category;
