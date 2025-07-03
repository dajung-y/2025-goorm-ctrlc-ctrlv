import React, { useEffect, useState } from 'react'

// 아이콘
import { TfiClose } from "react-icons/tfi";
import { CiSearch } from "react-icons/ci";
import { GoCheck } from "react-icons/go"


const countryList = [
  { label: 'South Korea (KRW) ₩' },
  { label: 'United States (USD) US$' },
  { label: 'Japan (JPY) JP¥' },
  { label: 'Sweden (SEK) SEK' },
  { label: 'Ireland (EUR) €' },
  { label: 'South Korea (KRW) ₩' },
  { label: 'United States (USD) US$' },
  { label: 'Japan (JPY) JP¥' },
  { label: 'Sweden (SEK) SEK' },
  { label: 'Ireland (EUR) €' },

]
export default function HeaderModal({ isShowModal, setIsShowModal }) {
  const [selected, setSelected] = useState(0);
  if (!isShowModal) return null;

  // 모달창 뜨면 바디 스크롤 막기
  useEffect(() => {
    if (isShowModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isShowModal])

  return (
    <div className='fixed top-0 left-0 w-full h-full z-50'>
      <div
        className="w-full h-full bg-black opacity-30"
        onClick={() => setIsShowModal(false)}
      ></div>

      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col w-[560px] py-6 bg-white rounded-2xl max-h-[calc(100vh-160px)] overflow-hidden">
        <div className="flex justify-between items-center px-6 pb-4">
          <h3 className='text-2xl font-bold'>
            Country/Region and currency settings
          </h3>
          <TfiClose
            size="20px"
            className='cursor-pointer'
            onClick={() => setIsShowModal(false)}
          />
        </div>

        <div className="px-6 overflow-y-scroll h-full">
          <p>
            The recommended country will have shipping fees and currency automatically adjusted to match the region. Other regions will be displayed in USD.
          </p>

          <div className="py-6">
            <label className="text-[var(--color-gray-500)]">Country/Region and currency</label>

            <div className="flex items-center gap-3 mt-2 px-4 py-3 border border-[var(--color-gray-200)] rounded-sm cursor-pointer">
              <CiSearch size='22px' />
              <div>{countryList[selected]?.label}</div>
            </div>
          </div>

          <div className="">
            <label className="text-[var(--color-gray-300)] font-medium text-sm">Suggestions</label>
            <ul className='mt-2'>
              {
                countryList.map((country, i) => {
                  const isSelected = selected === i;
                  return (
                    <li
                      key={i}
                      onClick={() => setSelected(i)}
                      className={`flex items-center justify-between border-t-1 border-[var(--color-gray-200)] px-4 py-3  cursor-pointer hover:bg-[var(--color-gray-50)] ${isSelected ? "text-[var(--color-primary)] font-bold" : "text-[var(--color-gray-500)] font-normal"}`}
                    >
                      {country.label}
                      {
                        isSelected &&
                        <GoCheck
                          size="16"
                          className='fill-[var(--color-primary)] stroke-1 stroke-[var(--color-primary)]'
                        />
                      }
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>

        <div className="flex gap-2 px-6 pt-6">
          <button
            className='w-full h-[48px] rounded-sm border border-[var(--color-gray-300)] text-[var(--color-gray-500)] hover:bg-[var(--color-gray-100)]'
            onClick={() => setIsShowModal(false)}
          >
            취소
          </button>
          <button
            className='w-full h-[48px] rounded-sm bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)]'
          >
            저장
          </button>
        </div>
      </div>
    </div>
  )
}
