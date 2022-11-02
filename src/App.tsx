import React from 'react';
import styled from 'styled-components';
import { Button } from './components/UI/Button';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <S.Div>
        <Button label="1" />
        <Button label="1" />
        <Button label="1" />
        <Button label="1" />
        <Button label="1" color="secondary" />
        <Button label="1" color="secondary" />
        <Button label="1" color="secondary" />
        <Button label="1" color="secondary" />
        <Button label="1" color="tertiary" />
        <Button label="1" color="tertiary" />
        <Button label="1" color="tertiary" />
        <Button label="1" color="secondary" />
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
