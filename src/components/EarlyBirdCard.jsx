import React from 'react'
import { BsChevronRight } from "react-icons/bs";

export default function EarlyBirdCard({item}) {
  return (

    // 나중에 link or navigate 연결

    // 카드
    <article className='flex flex-col w-100 border border-[var(--color-gray-200)] cursor-pointer'>
      {/* 이미지 */}
      <div className='w-full h-50'>
        <img src={item.image} 
             alt={item.title}
             className='w-full h-full' />
      </div>
      {/* content */}
      <div className='flex flex-col px-4'>
        <div>
          <p className='mt-2 text-sm'>{item.category}</p>
          <div>
            <p>{item.title}</p>
            <p className='mb-2 text-lg text-[var(--color-primary)] font-extrabold'>{item.participants}명 참여</p>
          </div>
          {/* 정보, 가격 박스 */}
          <div className='p-3 border border-[var(--color-gray-200)]'>
            <p>{item.composition}</p>
            <p className='font-bold'>{(item.price).toLocaleString()}원</p>
          </div> 
        </div>
        {/* 하단 영역 */}
        <div className='py-4 text-center text-[var(--color-gray-400)]'>
          지금 참여하기
          <span className='pl-1'>
            <BsChevronRight className='inline w-[19px] h-[19px]'/>
          </span>
        </div>
        </div>
    </article>
  )
}
