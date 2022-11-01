import React from 'react';
import styled from 'styled-components';
import { Tag } from './components/UI/Tag';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <S.Div>
        <Tag label="hello" />
        <Tag label="hello" />
        <Tag label="hello" />
        <Tag label="hello" />
        <Tag label="hello" color="secondary" />
        <Tag label="hello" color="secondary" />
        <Tag label="hello" color="secondary" />
        <Tag label="hello" color="secondary" />
      </S.Div>
    </>
  );
}

const S = {
  Div: styled.div`
    display: flex;
    gap: 1rem;
    padding: 1rem;
  `,
};

export default App;
