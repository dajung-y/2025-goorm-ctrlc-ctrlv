import React from 'react';

export default function ProductCard() {
    return (
        <div className="w-[300px] overflow-hidden bg-white">
            {/* 이미지 영역 */}
            <div className="relative w-full h-[160px] overflow-hidden rounded-[10px]">
                <img
                    className="w-full h-full object-cover"
                    src="https://common.image.cf.marpple.co/files/u_4750649/2024/9/original/cee9a7b516f294fd7843f435fcdbf4f5bf4e5fc51.png?q=92&w=1480&f=jpeg&bg=f6f6f6"
                    alt="product"
                />
                {/* 텍스트 하트 버튼 */}
                <button className="absolute top-2 right-2 text-[20px] text-white hover:text-red-500 transition">
                    ♡
                </button>
            </div>


            {/* 텍스트 정보 */}
            <div className="p-3">
                <p className="text-[#00C4C4] font-bold text-[18px] mb-1">12,345원</p>
                <p className="text-[14px] text-[#222] mb-1 leading-snug">
                    [짱구] 세트로도 즐겨요#댕꼬마 짱구 오뜨카지 후드&amp;스웨트팬츠(2컬러)
                </p>
                <p className="text-[12px] text-[#555] mb-1">
                    <span className="text-[#868E96] mr-1">댕꼬마</span>
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
