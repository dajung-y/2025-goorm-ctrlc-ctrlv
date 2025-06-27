import React, { useState } from "react";
import ProductDetailSideCategory from "./ProductDetailSideCategory";
import StarIcon from "../../../assets/StarIcon";
import UsersIcon from "../../../assets/UsersIcon";

export default function ProductDetailSide() {
  const [price, setPrice] = useState(49900);
  const [discountPrice, setDiscountPrice] = useState(price - 5000);

  return (
    // 사이드바
    <section className="productDetail__side--category">
      {/* 제품의 카테고리 */}
      <ProductDetailSideCategory />

      {/* 와디즈 only */}
      <article className="mt-3">
        <span className="text-[12px] px-2 py-[2px] rounded-full bg-[#00B2B2] text-white font-bold">
          wadiz Only
        </span>
      </article>

      {/* 제품명 */}
      <h3 className="productDetail__side--title text-xl font-bold mt-3">
        [짱구] 세트로도 즐겨요#댄꼼마 짱구 오또카지 후드&스웨트팬츠(2컬러)
      </h3>

      {/* 별점 & 참여자 */}
      <article className="productDetail__side--prticipant flex flex-row items-center mt-3">
        {/* 별점 */}
        <div className="productDetail_-side--scores flex flex-row items-center mr-4 gap-2">
          <StarIcon size={20} />
          <span>
            {4.6} ({7})
          </span>
        </div>
        {/* 참여자 수 */}
        <div className="productDetail_-side--scores flex flex-row items-center gap-2">
          <UsersIcon size={20} /> <span>{117}명 참여</span>
        </div>
      </article>

      {/* 가격 */}
      <article className="productDetail__side--priceInfo mb-6 mt-6">
        <span className="text-2xl font-bold">
          {price.toLocaleString("ko-KR")}원
        </span>
      </article>

      {/* 첫 결제시 쿠폰 */}
      <article className="productDetail__side--firstCoupon flex flex-row items-center justify-between p-4 border-1 border-gray-300 rounded-lg">
        <div className="flex flex-col justify-center">
          <span>
            첫 결제 시 <strong className="text-[#F66F66]">{5000}원</strong> 즉시
            적용
          </span>
          <span className="text-2xl font-bold">
            {discountPrice.toLocaleString("ko-KR")}원
          </span>
        </div>

        <div>
          <img src="https://static.wadiz.kr/assets/store/images/first_purchase_coupon.png"
          className="w-15"></img>
        </div>
      </article>
    </section>
  );
}
