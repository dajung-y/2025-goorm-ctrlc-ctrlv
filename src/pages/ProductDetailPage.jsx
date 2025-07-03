import React, { useEffect, useState } from "react";
import ProductDetailDesc from "../components/ProductDetail/Description/ProductDetailDesc";
import ProductDetailSide from "../components/ProductDetail/Sidebar/ProductDetailSide";
import productDetails from '../data/productDetail.json';
import { useParams } from "react-router-dom";

export default function ProductDetailPage() {
  const { id } = useParams();
  const productId = parseInt(id);

  const [product, setProduct] = useState(null); 

  useEffect(() => {
    const foundProduct = productDetails.find((item) => item.id === productId);

    if (foundProduct) {
      setProduct(foundProduct);

    } else {
      setProduct(null); // 또는 에러 상태 설정
    }
  }, [productId]); 

  if (!product) {
    return <div>상품 정보를 불러오는 중이거나 상품을 찾을 수 없습니다.</div>;
  }

  return (
    // 상품 상세페이지 전체
    <main className="productDetail__container w-full h-full flex flex-row items-center justify-center pt-[40px]">
      <section className="productDetail__content w-full h-full max-w-[1280px] flex items-start justify-between">
        {/* 왼쪽 제품 정보 */}
        <article className="productDetail__content--left w-3/5 h-full">
          <ProductDetailDesc product={product} />
        </article>

        {/* 오른쪽 구매 정보 */}
        {/* sticy 문제 -> 높이 부족 -> 부모의 높이와 동일하게 설정하기 : h-full 제거 및 self-stretch 추가 */}
        <aside className="productDetail__content--right w-35/100 self-stretch">
          <ProductDetailSide product={product} />
        </aside>
      </section>
    </main>
  );
}
