import React from "react";

export default function ProductPrice({price}) {
  return (
    <article className="productDetail__side--priceInfo">
      <span className="text-2xl font-bold">
        {/* 가격을 한국 기준으로 ,로 분리 */}
        {price.toLocaleString("ko-KR")}원
      </span>
    </article>
  );
}
