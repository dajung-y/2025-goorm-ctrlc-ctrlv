import React from "react";
import { Link } from "react-router-dom";

export default function productDetailDescMenus() {
  const [selected, setSelectedMenu] = "스토리";

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
    <div className="p-2">
      <nav className="flex flex-row items-center justify-around">
        {menus.map((menu, index) => (
            <Link to={menu.link} key={index}
            >{menu.name}</Link>
        ))
      }
      </nav>
    </div>
  );
}
