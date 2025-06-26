import React from "react";
import ProductDetailDesc from "../components/ProductDetail/Description/ProductDetailDesc";
import ProductDetailSide from "../components/ProductDetail/Sidebar/ProductDetailSide";

export default function ProductDetailPage() {
  return (
    // 상품 상세페이지 전체
    <main className="productDetail__container w-full h-full flex flex-row items-center justify-center pt-[40px]">
      <section className="productDetail__content w-full h-full max-w-[1280px] flex items-start justify-between">
        
        {/* 왼쪽 제품 정보 */}
        <article className="productDetail__content--left w-3/5 h-full">
          <ProductDetailDesc />
        </article>

        {/* 오른쪽 구매 정보 */}
        <aside className="productDetail__content--right w-35/100 h-full">
          <ProductDetailSide />
        </aside>
      </section>
    </main>
  );
}
