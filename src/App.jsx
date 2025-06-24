import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ProductStory from './components/ProductStory';
import ProductPolicy from './components/ProductPolicy';
import ProductReviews from './components/ProductReviews';

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
          <Route path="story" element={<ProductStory />} />
          <Route path="reviews" element={<ProductReviews />} />
          <Route path="policy" element={<ProductPolicy />} />
        </Route>
      </Routes>

      <Footer />
    </div>
  );
}
