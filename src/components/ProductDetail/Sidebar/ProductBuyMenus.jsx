import React from "react";
import { CiHeart } from "react-icons/ci";

export default function ProductBuyMenus({liked}) {
  return (
    <article className="flex flex-row gap-4" >
      {/* 좋아요 버튼 */}
      <div className="flex flex-col items-center justify-center w-[60px] h-[60px] border-1 border-gray-300 rounded-md text-gray-400">
        <button>
          <CiHeart className="text-3xl" />
        </button>
        {/* 좋아요한 사람들의 숫자 */}
        <span className="text-[10px]">{liked.toLocaleString("ko-KR")}</span>
      </div>
      {/* 선물하기, 구매하기 버튼 */}
      <div className="flex flex-row gap-2 w-full">
        <button className="w-full border-1 border-[var(--color-primary)] text-[var(--color-primary)] rounded-md">선물하기</button>
        <button className="w-full bg-[var(--color-primary)] text-white rounded-md">구매하기</button>
      </div>
    </article>
  );
}
