import React from 'react'
import ProductCard from "../components/ProductCard.jsx";
import product from '../data/products.json';

export default function ProductListPage() {

  return (
      <>
          {/* sub category */}
          <div className="h-[10vh] flex items-center mx-[10%]">
              <button className="bg-black text-white text-center w-[50px] h-[30px] rounded-[8px]">
                  <span className="text-sm font-bold">전체</span>
              </button>
          </div>

          {/* product list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-[10%] pb-10">
              {product.map((product, idx) => (
                  <ProductCard key={idx} product={product}/>
              ))}
          </div>

      </>
  )
}
