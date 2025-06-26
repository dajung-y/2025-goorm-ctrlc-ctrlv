import React from "react";
import share from "/src/assets/share.svg"

export default function ProductDetailSideCategory() {
  return (
    <section className="productDetail__side--category flex flex-row justify-between mt-2">
      {/* breadCrumbs */}
      <article className="productDetail_side--breadcrumbs text-gray-400 flex flex-row justify-center">
        {/* 대분류 */}
        <span className="product__side--major pr-2">애니메이션</span>
        <span className="pr-2">&gt;</span>

        {/* 소분류 */}
        <span className="product__side--sub text-[12px] px-2 py-[3px] flex flex-row items-center justify-center rounded-full bg-gray-200">
          <span className="text-[#00C4C4]">#</span>

          {/* 소분류 이름 */}
          <span>세트</span>
        </span>
      </article>

      {/* 공유버튼 */}
      <button className="text-[12px] px-2 py-[3px] flex flex-row justify-center items-center rounded-full border-1 border-gray-600 ">
        <img src={share} className="w-3 mr-1"></img>
        공유
      </button>
    </section>
  );
}
