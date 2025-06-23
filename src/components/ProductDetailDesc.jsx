import React from 'react'
import ProductDetailSlider from './ProductDetailSlider'
import ProductDetailDescMenus from './ProductDetailDescMenus';

export default function ProductDetailDesc() {
  return (
    <div className='productDetail__content--desc w-full h-full'>
      <ProductDetailSlider />
      <ProductDetailDescMenus />
    </div>
  )
}
