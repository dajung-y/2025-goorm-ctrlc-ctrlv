import React, { useState } from 'react'
import HeaderLnb from './HeaderLnb'

const Gnblist = [
  { label: '패션' },
  { label: '반려동물' },
]

export default function HeaderGnb() {
  const [isHoverCategory, setIsHoverCategory] = useState(null);
  const handleMouseLeave = () => setIsHoverCategory(null)

  return (
    <div
      onMouseLeave={handleMouseLeave}
      className="sticky top-0 z-50 bg-white border-b border-[var(--color-gray-100)] tracking-[-1px] text-[#212529]">
      <div className="flex w-full max-w-[1280px] m-auto items-center ">
        <ul className='flex gap-10 items-center h-[52px]'>
          {
            Gnblist.map((item, i) => (
              <li
                key={i}
                onMouseEnter={() => setIsHoverCategory(item.label)}
                className='flex items-center h-full border-b-2 border-white cursor-pointer hover:font-medium hover:border-b-2 hover:border-[var(--color-black)]'>
                {item.label}
              </li>
            ))
          }
        </ul>
      </div>

      {isHoverCategory && <HeaderLnb isHoverCategory={isHoverCategory} />}
    </div>
  )
}
