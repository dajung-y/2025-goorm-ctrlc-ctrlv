import React from "react";
import { FaStar } from "react-icons/fa6";
import { PiMedalFill } from "react-icons/pi";

export default function ProductMaker() {
  return (
    <section className="border-1 border-gray-200 rounded-md">
      <article className="maker__award flex flex-row gap-2">
        {/* 슈퍼메이커 */}
        <div className="flex flex-row items-center justify-center gap-1 bg-black text-white rounded-sm text-[12px] p-2">
          <FaStar />
          <span>슈퍼메이커</span>
        </div>

        {/* 어워즈 */}
        <div className="flex flex-row items-center justify-center gap-1 bg-[var(--color-primary)] text-white rounded-sm text-[12px] p-2">
          <PiMedalFill />
          <span>어워즈 TOP100</span>
        </div>
      </article>

      <article className="maker__profile">
        <section>
          <div></div>
          <div></div>
        </section>
        <section></section>
      </article>
    </section>
  );
}
