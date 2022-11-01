import React from 'react';
import DetailPage from './pages/DetailPage';
import ListPage from './pages/ListPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import Layout from './layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <div className="App">
          <Layout>
            <Routes>
              <Route element={<ListPage />} path="/" />
              <Route element={<DetailPage />} path="/:id" />
            </Routes>
          </Layout>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
