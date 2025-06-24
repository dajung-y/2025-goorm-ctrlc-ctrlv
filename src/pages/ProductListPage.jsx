import React from 'react'
import ProductCard from "../components/ProductCard.jsx";

export default function ProductListPage() {
    const productList = Array.from({ length: 16 });

  return (
      <>
          {/* sub category */}
          <div className="h-[10vh] flex items-center mx-[8%]">
              <button className="bg-black text-white text-center w-[50px] h-[30px] rounded-[8px]">
                  <span className="text-sm font-bold">전체</span>
              </button>
          </div>

          {/* product list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-[8%] pb-10">
              {productList.map((_, idx) => (
                  <ProductCard key={idx} />
              ))}
          </div>

      </>
  )
}
