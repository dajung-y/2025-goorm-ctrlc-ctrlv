import React from 'react';

export default function ProductCard({product}) {
    console.log(product.image);
    return (
        <div className="w-[280px] overflow-hidden bg-white">
            {/* 이미지 영역 */}
            <div className="relative w-full h-[160px] overflow-hidden rounded-[10px]">
                <img
                    className="w-full h-full object-cover"
                    src={product.image}
                    alt={product.title}
                />
                <button className="absolute top-2 right-2 text-[28px] text-gray-300 hover:text-red-500 transition">
                    ♡
                </button>
            </div>


            {/* 텍스트 정보 */}
            <div className="p-3">
                <p className="text-[#00C4C4] font-bold text-[18px] mb-1">{product.price}</p>
                <p className="text-[14px] text-[#222] mb-1 leading-snug">
                    {product.title}
                </p>
                <p className="text-[12px] text-[#555] mb-1">
                    <span className="text-[#868E96] mr-1">{product.maker}</span>
                    <span className="bg-[#f3f3f3] px-2 py-[2px] rounded text-[11px]">슈퍼메이커</span>
                </p>
                <p className="text-[13px] text-[#333] mb-2 font-bold">⭐ 5.0 <span className="text-[#868E96] font-normal">(0)</span></p>

                {/* 태그 */}
                <div className="flex flex-wrap gap-1">
                    <span className="text-[11px] px-2 py-[2px] rounded bg-[#E7F9F9] text-[#00C4C4]">wadiz Only</span>
                    <span className="text-[11px] px-2 py-[2px] rounded bg-[#F2F4F6] text-[#868E96] font-bold">무료배송</span>
                    <span className="text-[11px] px-2 py-[2px] rounded bg-[#F2F4F6] text-[#868E96] font-bold">와배송</span>
                </div>
            </div>
        </div>
    );
}
