import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function productDetailDescMenus() {
  const [selected, setSelectedMenu] = useState("스토리");

  const menus = [
    {
      name: "스토리",
      link: "#",
    },
    {
      name: "만족도",
      link: "#",
    },
    {
      name: "문의 정책",
      link: "#",
    },
  ];
  return (
    <div className="pt-3 bg-white shadow-[0_0.5px_0px_rgba(0,0,0,0.10)]">
      <nav className="flex flex-row items-center justify-around border-none">
        {menus.map((menu, index) => (
          <Link
            to={menu.link}
            key={index}
            name={menu.name}
            onClick={() => {
              setSelectedMenu(menu.name);
            }}
            className={`p-2
              ${selected === menu.name ? "border-b-1" : ""} `}
          >
            {menu.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
