import React from "react";
import ShareIcon from "../../../assets/ShareIcon";

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
      <button className="text-[12px] px-4 py-1 flex flex-row gap-1 justify-center items-center rounded-full border-1 border-gray-300 ">
        {/* 공유 svg */}
        <ShareIcon fill="#868e96" size={12}></ShareIcon>
        <span className="text-gray-400">공유</span>
      </button>
    </section>
  );
}
