import React from "react";
import StarIcon from "../../../assets/StarIcon";

export default function ProductScore({rating, reviewCount}) {
  return (
    // 상품 별점과 리뷰 수
    <div className="productDetail__side--scores flex flex-row items-center mr-4 gap-2">
      <StarIcon size={20} />
      <span>
        <span className="font-bold">{rating} </span> 
        <span className="text-gray-300">({reviewCount})</span>
      </span>
    </div>
  );
}
