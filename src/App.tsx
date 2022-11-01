import React from 'react';
import styled from 'styled-components';
import { Tag } from './components/UI/Tag';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <S.Div>
        <Tag label="1" />
        <Tag label="1" />
        <Tag label="1" />
        <Tag label="1" />
        <Tag label="1" color="secondary" />
        <Tag label="1" color="secondary" />
        <Tag label="1" color="secondary" />
        <Tag label="1" color="secondary" />
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
