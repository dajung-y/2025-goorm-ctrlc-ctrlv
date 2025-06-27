import React from 'react'
import { BsChevronRight } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";

export default function Pagination({currentPage, totalPages,onPageChange}) {

  const handleMovePrev = () => {
    console.log('이전버튼 클릭');
    if(currentPage>1){
      onPageChange(currentPage-1);
    }
  }

  const handleMoveNext = () => {
    console.log('다음 버튼 클릭');
    if(currentPage<totalPages){
      onPageChange(currentPage+1);
    }
    
  }
  return (
    // 페이지네이션
    <nav className='flex my-auto'>
      <ul className='flex text-[var(--color-gray-400)] cursor-pointer'>
        {/* 이전 버튼 */}
        <li className='px-2'>
          <button onClick={handleMovePrev}
                  disabled={currentPage===1}
                  className={`${currentPage===1 ?' text-[var(--color-gray-200)]' : ''} `}>
            <BsChevronLeft />
          </button>
        </li>
        {/* 페이지 번호 버튼 */}
        {
          Array.from({length: totalPages},(_,index) => index+1).map((page) => (
            <li key={page}
                className='px-2 text-sm'>
              <button onClick={()=> onPageChange(page)}
                      className={`${currentPage === page ? 'text-[var(--color-primary)]' : ''}`}>
                {page}
              </button>
            </li>
          ))
        }
        {/* 다음 버튼 */}
        <li className='px-2'>
          <button onClick={handleMoveNext}
                  disabled={currentPage===totalPages}
                  className={`${currentPage===totalPages ? 'text-[var(--color-gray-200)]': ''} `}>
            <BsChevronRight />
          </button>
        </li>
      </ul>
    </nav>
  )
}
