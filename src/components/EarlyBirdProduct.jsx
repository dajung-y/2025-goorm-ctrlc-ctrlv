import React, { useState } from 'react'
import EarlyBirdCard from './EarlyBirdCard'
import { dummyProducts } from '../data/earlybirdDummy'
import Pagination from './Pagination';

export default function EarlyBirdProduct() {

  // pagination
  // 현재 페이지
  const [currentPage, setCurrentPage] = useState(1);
  // 한 페이지에 들어갈 item 수
  const itemsPerPage = 3;

  // 전체 페이지 수
  const totalPages = Math.ceil(dummyProducts.length/itemsPerPage);

  // 현재 페이지에 보여줄 아이템
  const currentItems = dummyProducts.slice(
    (currentPage-1)*itemsPerPage, // 시작 인덱스
     currentPage*itemsPerPage // 끝 인덱스
  )
  return (
    <section className='w-full px-4 py-8'>
      <div className='max-w-[1280px] mx-auto'>
        {/* header */}
        <div className='flex justify-between'>
          {/* 타이틀 */}
          <div className='mb-6'>
            <h3 className='mb-1 text-2xl font-extrabold'>얼리버드</h3>
            <p>먼저 참여하는 분들께 드리는 얼리버드 혜택</p>
          </div>
          {/* 페이지네이션 */}
          <div className='my-auto'>
            <Pagination currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage} />
          </div>
        </div>
        {/* main */}
        {/* 아이템 리스트 */}
        <div className='flex justify-between gap-8'>
          {
            currentItems.map((item,index) => (
              <EarlyBirdCard key={index}
                              item={item} />
            ))
          }
        </div>
      </div>
    </section>
  )
}
