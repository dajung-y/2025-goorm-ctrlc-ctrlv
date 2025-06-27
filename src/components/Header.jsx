import React from 'react'

// 아이콘
import logo from '../assets/logo.svg'
import { HiOutlineMapPin } from 'react-icons/hi2'
import { SlArrowDown, SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import { HiOutlineLightBulb, HiOutlineShare } from 'react-icons/hi'
import { TbHomeSearch } from 'react-icons/tb'

import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
      <header className='w-full tracking-[-1px]'>
        <div className="flex items-center gap-12 max-w-[1300px] m-auto  py-2">
          <h1>
            <Link to="/">
              <img src={logo} alt="wadiz" />
            </Link>
          </h1>

          <div className="flex justify-between items-center w-full">
            <nav>
              <ul className='flex gap-8 items-center'>
                <li className='text-lg font-semibold'>
                  <Link to="/">오픈예정</Link>
                </li>
                <li>
                  <Link to="/">펀딩 +</Link>
                </li>
                <li>
                  <Link to="/">프리오더</Link>
                </li>
                <li>
                  <Link to="/">스토어</Link>
                </li>
                <li className='flex items-center gap-1'>
                  더보기
                  <SlArrowDown size="14" />
                </li>
              </ul>

              {/* 더보기 클릭 시 */}
              <div>

              </div>
            </nav>

            <div className="flex items-center gap-4">
              <Link to="/">
                <HiOutlineMapPin size="24" />
              </Link>

              <Link to="/" className='text-sm'>로그인</Link>
              <Link to="/" className='text-sm'>회원가입</Link>
              <Link to="/">
                <button className='text-sm text-white rounded-sm px-4 h-[40px] bg-cyan-500'>
                  프로젝트 만들기
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* GNB */}
      <div className=" z-50 bg-white border-b border-gray-100 tracking-[-1px] text-[#212529]">
        <div className="flex w-full max-w-[1300px] m-auto items-center ">
          <SlArrowLeft size="24" />
          <ul className='flex gap-10 items-center whitespace-nowrap overflow-hidden h-[52px]'>
            <li className='cursor-pointer'>테크·가전</li>
            <li>테크·가전</li>
            <li>테크·가전</li>
            <li>테크·가전</li>
            <li>테크·가전</li>
            <li>테크·가전</li>
            <li>테크·가전</li>
            <li>테크·가전</li>
            <li>테크·가전</li>
            <li>테크·가전</li>
            <li>테크·가전</li>
            <li>테크·가전</li>
            <li>테크·가전</li>
            <li>테크·가전</li>
            <li>테크·가전</li>
            <li>테크·가전</li>
            <li>테크·가전</li>
            <li>테크·가전</li>
            <li>테크·가전</li>
            <li>테크·가전</li>
            <li>테크·가전</li>
          </ul>
          <SlArrowRight size="24" />
        </div>

        {/* LNB */}
        <div></div>
      </div>
    </>
  )
}
