import React from "react";
import { FaStar } from "react-icons/fa6";
import { PiMedalFill } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { FaWonSign } from "react-icons/fa6";
import { PiUserFill } from "react-icons/pi";

export default function ProductMaker({maker}) {

  return (
    <section className="border-1 border-gray-200 rounded-md p-4">
      <article className="maker__award flex flex-row gap-2">
        {/* 슈퍼메이커 */}
        {maker.makerIsSuperMaker && <div className="flex flex-row items-center justify-center gap-1 bg-black text-white rounded-sm text-[12px] p-2">
          <FaStar />
          <span className="font-medium">슈퍼메이커</span>
        </div>}

        {/* 어워즈 */}
        {maker.makerIsTop100 && <div className="flex flex-row items-center justify-center gap-1 bg-[var(--color-primary)] text-white rounded-sm text-[12px] p-2">
          <PiMedalFill />
          <span className="font-medium">어워즈 TOP100</span>
        </div>}
      </article>

      {/* 프로필 영역 */}
      <article className="maker__profile flex flex-row items-center justify-between mt-4">
        <section className="flex flex-row items-center gap-2">
          <div className="rounded-full border-1 border-gray-200 w-[36px] h-[36px] flex items-center justify-center overflow-hidden">
            {/* 메이커 프로필 사진 */}
            <img
              className="w-full h-full object-cover"
              src={maker.makerImage}
            ></img>
          </div>
          <div className="flex flex-col">
            {/* 메이커 이름 */}
            <span className="font-bold">{maker.maker}</span>
            {/* 메이커 팔로우 수 */}
            <span className="text-[var(--color-primary)] text-[12px]">
              {" "}
              {maker.makerFollowerCount.toLocaleString("ko-KR")}명이 팔로우 중
            </span>
          </div>
        </section>
        <section>
          {/* 메이커 팔로우 버튼 */}
          <button className="flex flex-row items-center justify-center gap-1 bg-[var(--color-primary)] text-white rounded-sm text-[12px] p-2">
            <CiHeart className="text-xl" />
            <span className="font-medium">팔로우</span>
          </button>
        </section>
      </article>

      <article className="flex flex-col gap-4 mt-4 text-[14px]">
        <section className="flex flex-row items-center gap-2 justify-between">
          <div className="flex flex-row items-center gap-2">
            <FaStar className="text-[var(--color-primary)]" />
            <span>
              만족도 {maker.makerRating.toFixed(1)}
              <span className="text-gray-300"> ( {maker.makerReviewCount}+개 ) </span>
            </span>
          </div>
          <span className="text-gray-300">펀딩·프리오더·스토어 합산</span>
        </section>
        <section className="flex flex-row items-center gap-2">
          <FaWonSign className="text-[var(--color-primary)]" />
          <span>누적 펀딩액 {maker.makerTotalFunding}+</span>
        </section>
        <section className="flex flex-row items-center gap-2">
          <PiUserFill className="text-[var(--color-primary)]" />
          <span>서포터 {maker.makerSupporter.toLocaleString("ko-KR")}명</span>
        </section>
      </article>
    </section>
  );
}
