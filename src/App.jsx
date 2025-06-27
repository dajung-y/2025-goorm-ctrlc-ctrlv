import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './pages/MainPage';
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CreateProjectPage from './pages/CreateProjectPage';

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
        />
        <Route  
          path='/createproject'
          element={<CreateProjectPage />}
        />
      </Routes>
      <Footer />
    </div>
  );
}
