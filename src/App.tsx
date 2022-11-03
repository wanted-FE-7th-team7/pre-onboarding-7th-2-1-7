import React from 'react';
import { Navigate } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import ListPage from './pages/ListPage';

function App() {
  return (
    <BrowserRouter basename="pre-onboarding-7th-2-1-7">
      <Routes>
        <Route path="/" element={<Navigate replace to="/cars" />} />
        <Route path="/cars" element={<ListPage />} />
        <Route path="/cars/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
