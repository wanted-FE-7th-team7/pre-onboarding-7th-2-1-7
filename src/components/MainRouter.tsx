import { Route, Routes } from 'react-router';
import { ListPage } from '../pages/ListPage';
import { DetailPage } from '../pages/DetailPage';
import { BrowserRouter } from 'react-router-dom';

export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/detail" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}
