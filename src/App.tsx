import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RootLayout } from './components/UI/RootLayout';
import { CarsProvider } from './contexts/CarsContext';
import { DetailPage } from './pages/DetailPage';
import { ListPage } from './pages/ListPage';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <CarsProvider>
          <RootLayout>
            <Routes>
              <Route path="/" element={<ListPage />} />
              <Route path="/detail" element={<DetailPage />} />
            </Routes>
          </RootLayout>
        </CarsProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
