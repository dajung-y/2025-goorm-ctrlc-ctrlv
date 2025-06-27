import React from 'react'
import { Link } from 'react-router-dom'

export default function HeaderLnb({ isHoverCategory }) {
  const lnbList = {
    '패션': [
      { label: '패션 전체', href: '/list' },
      { label: '의류', href: '/list' },
      { label: '패션소품', href: '/list' },
      { label: '주얼리', href: '/list' },
      { label: '가방', href: '/list' },
      { label: '신발', href: '/list' },
      { label: '아이웨어', href: '/list' },
      { label: '언더웨어', href: '/list' },
      { label: '키즈', href: '/list' },
      { label: '럭셔리', href: '/list' },

    ],
    '반려동물': [
      { label: '반려동물 전체', href: '/list' },
      { label: '강아지', href: '/list' },
      { label: '고양이', href: '/list' },
      { label: '파충류', href: '/list' },
      { label: '물고기', href: '/list' },
    ]
  }
  const items = lnbList[isHoverCategory] || [];

  return (
    <div className='absolute w-full min-h-[200px] bg-[var(--color-gray-50)]'>
      <div className="w-full max-w-[1280px] m-auto p-4 border-t border-[var(--color-gray-100)] text-sm">
        <div className='grid grid-cols-[repeat(4,_170px)] gap-x-10'>
          {
            items.map((item, i) => (
              <div key={i} className="flex items-center w-[170px] h-10">
                <Link to={item.href} className='block w-full hover:font-medium'>
                  {item.label}
                </Link>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
