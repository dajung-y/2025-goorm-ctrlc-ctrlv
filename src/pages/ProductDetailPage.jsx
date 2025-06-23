import React from "react";
import ProductDetailDesc from './../components/ProductDetailDesc';

export default function ProductDetailPage() {
  return (
    <main className='productDetail__container w-full h-full flex flex-row items-center justify-center'>
      <section className='productDetail__content w-full max-w-[1280px] flex items-center justify-between '>
        <article className='productDetail__content--left w-3/5 h-full bg-cyan-400'>
          <ProductDetailDesc />
        </article>
        <aside className='productDetail__content--right w-3/10 bg-cyan-100'>사이드</aside>
      </section>
    </main>
  );
}
