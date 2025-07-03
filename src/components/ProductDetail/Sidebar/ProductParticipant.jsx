import React from "react";
import UsersIcon from "../../../assets/UsersIcon";

export default function ProductParticipant({ProductParticipant}) {
  return (
    // 상품 참여자 수
    <div className="productDetail__side--scores flex flex-row items-center gap-2">
      <UsersIcon size={20} /> <span>{ProductParticipant.toLocaleString("ko-KR")}명 참여</span>
    </div>
  );
}
