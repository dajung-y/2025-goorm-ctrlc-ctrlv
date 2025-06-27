import React from "react";
import StarIcon from "../../../assets/StarIcon";

export default function ProductScore({score, reviewers}) {
  return (
    <div className="productDetail__side--scores flex flex-row items-center mr-4 gap-2">
      <StarIcon size={20} />
      <span>
        {score} ({reviewers})
      </span>
    </div>
  );
}
