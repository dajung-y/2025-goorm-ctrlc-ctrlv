import React, { useState } from 'react'
import ProductCard from './ProductCard'
import product from '../data/fashionProducts.json';
import { BsChevronRight } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";

export default function RecomendProduct() {

  // 현재 보여줄 상품 인덱스
  // 기본 0-5 change 됐을 때 5-10
  const [currentItems, setCurrentItems] = useState([0,5]);

  // 페이지 변화 값
  const [isFirstPage, setIsFirstPage] = useState(true);

  // 페이지 변경 함수
  const handleChange = () => {
   if(isFirstPage){
    setCurrentItems([5,10]);
   } else {
    setCurrentItems([0,5]);
   }
   setIsFirstPage(!isFirstPage);
  }
  return (
    <section className='w-full px-4 py-8'>
      <div className='max-w-[1280px] mx-auto'>
        {/* header */}
        <div className='flex justify-between'>
          {/* 타이틀 */}
          <div className='mb-6'>
            <h3 className='mb-1 text-2xl font-extrabold'>스토어 추천 제품</h3>
            <p>팬들이 인정한 성공 펀딩 집합샵</p>
          </div>
        </div>
        {/* main */}
        {/* 아이템 리스트 */}
        <div className='relative flex justify-between gap-4'>
          {
            product.slice(currentItems[0],currentItems[1]).map((item,index) => (
              <ProductCard key={index} product={item} />
            ))
          }
          {/* 다음 목록 */}
          <div className={`absolute top-36 ${isFirstPage ? '-right-4' : '-left-4'}`}>
            <button className='flex justify-center items-center w-8 h-8 bg-white rounded-full shadow cursor-pointer'
                    onClick={handleChange}>
              <span>
                {isFirstPage ? <BsChevronRight /> : <BsChevronLeft />}
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
