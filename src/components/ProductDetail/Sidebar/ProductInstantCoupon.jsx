import React from "react";
import { GoMoveToBottom } from "react-icons/go";

export default function ProductInstantCoupon() {
  return (
    // 바로 사용가능한 쿠폰
    <article className="flex flex-row items-center justify-center bg-[var(--color-primary-light)] text-[var(--color-primary-dark)] p-2.5 gap-2 rounded-md">
      <span>바로 사용 가능한 할인 쿠폰 보기</span>
      <GoMoveToBottom />
    </article>
  );
}
