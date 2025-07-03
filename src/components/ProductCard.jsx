import React from 'react';
import { FaRegHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

export default function ProductCard({product}) {
    console.log(product.image);

    // 찜 버튼 누르기
    const handleLike =() => {
        alert('로그인이 필요합니다');
    }
    return (
        <div className="w-[280px] overflow-hidden bg-white cursor-pointer">
            {/* 이미지 영역 */}
            <div className="relative w-full h-[160px] overflow-hidden rounded-[10px]">
                <img
                    className="w-full h-full object-cover"
                    src={product.image}
                    alt={product.title}
                />
                <button className="absolute top-2 right-2"
                        onClick={handleLike}>
                    <FaRegHeart style={{color: 'white', fontSize: '18px'}} />
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
                <p className="text-[13px] text-[#333] mb-2 font-bold flex items-center gap-1">
                    <FaStar style={{color: '#FFBE1A'}}/>
                    {product.rating}
                    <span className="text-[#868E96] font-normal">({product.reviewCount})</span>
                </p>

                {/* 태그 */}
                <div className="flex flex-wrap gap-1">
                    <span className="text-[11px] px-2 py-[2px] rounded bg-[#E7F9F9] text-[#00C4C4]">wadiz Only</span>
                    <span
                        className="text-[11px] px-2 py-[2px] rounded bg-[#F2F4F6] text-[#868E96] font-bold">무료배송</span>
                    <span className="text-[11px] px-2 py-[2px] rounded bg-[#F2F4F6] text-[#868E96] font-bold">와배송</span>
                </div>
            </div>
        </div>
    );
}
