import React from 'react';
import ProductCard from "./ProductCard";

export default function ProductList({ products }) {
  return (
    <section className="max-w-[1280px] mx-auto mb-40">
      {/* sub category */}
      <div className="h-[10vh] flex items-center">
        <button className="bg-black text-white text-center w-[50px] h-[30px] rounded-[8px]">
          <span className="text-sm font-bold">전체</span>
        </button>
      </div>

      {/* product list */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10  pb-15">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} /> // key값 변경
        ))}
      </div>
    </section>
  )
}
