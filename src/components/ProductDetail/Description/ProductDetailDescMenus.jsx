import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ProductDetailDescMenus({detailScrollToTop}) {
  const [selected, setSelectedMenu] = useState("스토리");

  const menus = [
    {
      name: "스토리",
      link: "story",
    },
    {
      name: "만족도",
      link: "reviews",
    },
    {
      name: "문의 정책",
      link: "policy",
    },
  ];

  return (
    // 왼쪽 상품 설명 메뉴바
    <div className="pt-3 pb-3 shadow-[0_1px_1px_rgba(0,0,0,0.10)] sticky top-0 z-10">
      <nav className="flex flex-row items-center justify-around border-none">
        {/*  메뉴 구성들은 map을 통해 생성 */}
        {menus.map((menu, index) => (
          <Link
            to={menu.link}
            key={index}
            name={menu.name}
            // active인 버튼 저장
            onClick={() => {
              setSelectedMenu(menu.name);
              detailScrollToTop();
            }}
            // active인 버튼에 밑줄
            className={`p-2
              ${selected === menu.name ? "border-b-2" : ""} `}
          >
            {menu.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
