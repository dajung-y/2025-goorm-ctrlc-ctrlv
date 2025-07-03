import React from "react";

export default function ProductPrice({price}) {

  const newPrice = Number(price);

  return (
    // 상품 가격
    <article className="productDetail__side--priceInfo">
      <span className="text-2xl font-bold">
        {/* 가격을 한국 기준으로 ,로 분리 */}
        {newPrice.toLocaleString("ko-KR")}원
      </span>
    </article>
  );
}
