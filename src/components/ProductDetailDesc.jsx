import React from 'react'
import ProductDetailSlider from './ProductDetailSlider'
import ProductDetailDescMenus from './ProductDetailDescMenus'
import { Outlet } from 'react-router-dom';

export default function ProductDetailDesc() {
  return (
    // 왼쪽 상품 설명 컨테이너
    <div className='productDetail__content--desc w-full h-full' 
    // ref={}
    >
      {/* 이미지 슬라이더 */}
      <ProductDetailSlider />
      {/* 메뉴바 */}
      <ProductDetailDescMenus />
      
      {/* 메뉴바 클릭을 통해 바뀔 컨텐츠 
        스토리, 만족도, 문의 정책
      */}
      <Outlet />
      
      {/* 여기에 useRef만들고 
        useEffect ScrolltoTop
        자동 스크롤이 잡힐 수 있도록
      */}
    </div>
  )
}
