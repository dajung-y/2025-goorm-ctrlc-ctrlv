import React from "react";
import ProductDetailDesc from '../components/ProductDetail/ProductDetailDesc';

export default function ProductDetailPage() {
  return (
    // 상품 상세페이지 전체
    <main className='productDetail__container w-full h-full flex flex-row items-center justify-center'>
      <section className='productDetail__content w-full h-full max-w-[1280px] flex items-center justify-between'>
        {/* 왼쪽 제품 정보 */}
        <article className='productDetail__content--left w-3/5 h-ful'>
          <ProductDetailDesc />
        </article>
        {/* 오른쪽 구매 정보 */}
        <aside className='productDetail__content--right w-3/10 bg-cyan-100'>사이드</aside>
      </section>
    </main>
  );
}
