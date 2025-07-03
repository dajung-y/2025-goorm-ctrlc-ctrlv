import React from 'react'

export default function ProductDetailSlider({img}) {
  return (
    // 이미지 슬라이더. pt을 통해 반응형을 구현. 비율은 16:9
    <div className='productDetail__slider w-full pt-[56.75%] mb-3 relative'>
      {/* padding 구간까지 배치하기 위해서 relative와 absolute를 사용 */}
      <img className='absolute top-0 left-0 w-full h-full'
      src={img}></img>
    </div>
  )
}
