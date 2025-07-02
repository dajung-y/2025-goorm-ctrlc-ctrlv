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
        {/* sticy 문제 -> 높이 부족 -> 부모의 높이와 동일하게 설정하기 : h-full 제거 및 self-stretch 추가 */}
        <aside className="productDetail__content--right w-35/100 self-stretch">
          <ProductDetailSide />
        </aside>
      </section>
    </main>
  );
}