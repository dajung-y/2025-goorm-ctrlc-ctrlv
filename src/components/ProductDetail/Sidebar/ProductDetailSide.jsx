import React, { useState } from "react";
import ProductCategory from "./ProductCategory";
import StarIcon from "../../../assets/StarIcon";
import ProductPrice from "./ProductPrice";
import ProductParticipant from "./ProductParticipant";
import ProductScore from "./ProductScore";
import ProductFirstPurchaseCoupon from "./ProductFirstPurchaseCoupon";
import ProductInstantCoupon from "./ProductInstantCoupon";

import { FaTruck } from "react-icons/fa";
import { LiaCcDinersClub } from "react-icons/lia";

export default function ProductDetailSide() {
  const [price, setPrice] = useState(49900);
  const discount = 5000;

  return (
    // 사이드바
    <section className="productDetail__side--category">
      {/* 제품의 카테고리 */}
      <ProductCategory />

      {/* 와디즈 only */}
      <article className="mt-3">
        <span className="text-[12px] px-2 py-[2px] rounded-full bg-[#00B2B2] text-white font-bold">
          wadiz Only
        </span>
      </article>

      {/* 제품명 */}
      <h3 className="productDetail__side--title text-xl mt-3">
        [짱구] 세트로도 즐겨요#댄꼼마 짱구 오또카지 후드&스웨트팬츠(2컬러)
      </h3>

      {/* 만족도 & 참여자 */}
      <article className="productDetail__side--prticipant flex flex-row items-center mt-3">
        {/* 만족도, props : 만족도와 리뷰어 수 */}
        <ProductScore score={4.6} reviewers={7} />
        {/* 참여자 수, props: 참여자 수*/}
        <ProductParticipant ProductParticipant={117} />
      </article>

      {/* 가격, props : 원 가격*/}
      <div className="mb-6 mt-6">
        <ProductPrice price={price} />
      </div>

      {/* 첫 결제시 쿠폰, props : 원 가격과 할인되는 가격 */}
      <ProductFirstPurchaseCoupon price={price} discounted={discount} />

      {/* 즉시 적용 가능한 쿠폰 */}
      <div className="mt-6">
        <ProductInstantCoupon />
      </div>

      <article className="flex flex-row gap-3 mt-6">
        <span className="text-gray-400">배송</span>
        <div className="flex flex-col">
          <div className="flex flex-row items-center gap-2">
            <FaTruck className="text-[var(--color-primary)]" />
            <span>와 배송 상품</span>
          </div>

          <span>평일 16시 전 주문하면 오늘 출발</span>
          <div className="flex flex-row items-center gap-2 text-gray-400">
            <span>무료배송</span>
            <span>
              (제주/도서산간) {parseInt("5000").toLocaleString("ko-KR")}원
            </span>
          </div>
        </div>
      </article>

      <article className="flex flex-row gap-3 mt-6">
        <span className="text-gray-400">혜택</span>
        <div className="flex flex-col">
          <div className="flex flex-row items-center gap-2">
            <LiaCcDinersClub className="text-[var(--color-primary)] text-3xl" />
            <span>서포터 클럽 <span className="text-[var(--color-primary-dark)]">3개월 무료 혜택</span> 받기</span>
          </div>
        </div>
      </article>

      <div className="border-1 border-gray-200 mb-6 mt-6"></div>
    </section>
  );
}
