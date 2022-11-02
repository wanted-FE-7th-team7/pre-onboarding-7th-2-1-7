import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderBar from './components/UI/HeaderBar';
import DetailPage from './pages/DetailPage';
import ListPage from './pages/ListPage';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <HeaderBar />
      <Router>
        <Routes>
          <Route path="/" element={<ListPage />} />
          <Route path="/carList/:id" element={<DetailPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
