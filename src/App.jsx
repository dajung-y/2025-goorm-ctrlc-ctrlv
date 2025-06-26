import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ProductStory from './components/ProductDetail/ProductStory';
import ProductPolicy from './components/ProductDetail/ProductPolicy';
import ProductReviews from './components/ProductDetail/ProductReviews';

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
          path="/list"
          element={<ProductListPage />}
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
      </Routes>

      <Footer />
    </div>
  );
}
