import React, { useState } from 'react';
import styled from 'styled-components';

export function Catagory() {
  return (
    <>
      <Tag>전체</Tag>
      <Tag>대형</Tag>
      <Tag>중형</Tag>
      <Tag>소형</Tag>
    </>
  );
}

const Tag = styled.button`
  justify-content: center;
  align-items: center;
  width: 6.2rem;
  height: 2.7rem;
  padding: 0.5rem, 1.8rem, 0.5rem, 1.8rem;
  margin: 0.5rem;
  border: none;
  border-radius: 6.2rem;
  background-color: ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.black};
  font-size: 1.4rem;
`;
