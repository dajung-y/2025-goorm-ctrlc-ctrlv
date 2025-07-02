import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainPage from './pages/MainPage';
import FashionListPage from './pages/FashionListPage.jsx';
import ProductDetailPage from './pages/ProductDetailPage';
import ProductStory from './components/ProductDetail/Description/ProductStory';
import ProductPolicy from './components/ProductDetail/Description/ProductPolicy';
import ProductReviews from './components/ProductDetail/Description/ProductReviews';
import CreateProjectPage from './pages/CreateProjectPage';
import PetListPage from "./pages/PetListPage.jsx";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<MainPage />}
        />
        <Route
            path="/list/fashion"
            element={<FashionListPage />}
        />
        <Route
            path="/list/pet"
            element={<PetListPage />}
        />
        <Route
          path="/detail"
          element={<ProductDetailPage />}
        >
          <Route index element={<ProductStory />} />
          {/* index 속성 :
            자식 라우트의 특정 경로를 명시하지 않았을 때
            index 속성을 가진 자식 라우트가 Outlet 위치에 렌더링함
          */}

          <Route path="story" element={<ProductStory />} />
          <Route path="reviews" element={<ProductReviews />} />
          <Route path="policy" element={<ProductPolicy />} />
        </Route>
        <Route
          path='/createproject'
          element={<CreateProjectPage />}
        />
      </Routes>
      <Footer />
    </div>
  );
}
