import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import GlobalStyle from './styles/GlobalStyle';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const helmetContext = {};

root.render(
  <HelmetProvider context={helmetContext}>
    <GlobalStyle />
    <App />
  </HelmetProvider>
);
