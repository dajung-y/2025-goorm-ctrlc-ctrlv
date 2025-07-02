import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

export default function ProductDropDown({ items }) {
  const [isView, setIsView] = useState(false);

  return (
    <article>
      <ul onClick={() => setIsView(!isView)}>
        <div
          className={`flex flex-row items-center justify-between p-3 border-1  ${
            isView
              ? "border-[var(--color-primary)] border-b-gray-300 rounded-t-lg"
              : "border-gray-300 rounded-md  "
          }`}
        >
          상품 선택
          {isView ? (
            <MdOutlineKeyboardArrowUp className="text-3xl" />
          ) : (
            <MdOutlineKeyboardArrowDown className="text-3xl" />
          )}
        </div>

        {isView && <Dropdown items={items} />}
      </ul>
    </article>
  );
}

function Dropdown({ items }) {
  return (
    <>
      {items.map((item, index) => (
        <li
          key={item.id}
          className={`flex flex-col border-1 pt-4 pb-4 pl-3 pr-3 border-[var(--color-primary)] border-t-gray-400
          hover:bg-gray-100
        ${
          index === items.length - 1
            ? "border-b-[var(--color-primary)] rounded-b-lg"
            : "border-b-gray-300"
        }`}
        >
          <span className="mb-4">{item.name}</span>
          <span className="font-bold">
            {item.price.toLocaleString("ko-KR")}원
          </span>
        </li>
      ))}
    </>
  );
}
