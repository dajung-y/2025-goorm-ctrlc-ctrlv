import React from "react";
import UsersIcon from "../../../assets/UsersIcon";

export default function ProductParticipant({ProductParticipant}) {
  return (
    <div className="productDetail__side--scores flex flex-row items-center gap-2">
      <UsersIcon size={20} /> <span>{ProductParticipant.toLocaleString("ko-KR")}명 참여</span>
    </div>
  );
}
