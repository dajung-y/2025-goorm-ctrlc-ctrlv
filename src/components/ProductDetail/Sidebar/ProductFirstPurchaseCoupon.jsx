import React from "react";
import ProductPrice from "./ProductPrice";

export default function ProductFirstPurchaseCoupon({ price, discounted = 0 }) {
  
  return (
    // 첫결제 시 할인 적용 쿠폰
    <article className="productDetail__side--firstCoupon flex flex-row items-center justify-between p-4 border-1 border-gray-300 rounded-lg">
      <div className="flex flex-col justify-center">
        <span>
          첫 결제 시 <strong className="text-[#F66F66]">{discounted.toLocaleString("ko-KR")}원</strong> 즉시
          적용
        </span>
        <ProductPrice price={price - discounted} />
      </div>

      <div>
        <img
          src="https://static.wadiz.kr/assets/store/images/first_purchase_coupon.png"
          className="w-15"
        ></img>
      </div>
    </article>
  );
}
