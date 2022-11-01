import React from 'react';
import { ThemeProvider } from 'styled-components';
import ItemTag from './components/UI/ItemTag';
import GlobalStyles from './styles/GlobalStyles';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ItemTag />
    </ThemeProvider>
  );
}

export default App;
