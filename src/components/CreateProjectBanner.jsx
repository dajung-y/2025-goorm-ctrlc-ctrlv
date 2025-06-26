import React from 'react'
import { Link } from 'react-router-dom'
import { BsChevronRight } from "react-icons/bs";
import BannerImg from '../assets/images/projectBanner.png';
import Button from './Button/Button';

export default function CreateProjectBanner() {
  return (
    <section className='w-full px-4 py-8'>
      {/* 배너 모든 영역 클릭 가능 */}
      <div className='my-16 w-full max-w-[1280px] h-[153px] mx-auto cursor-pointer'>
        <Link to='/createproject'>
        {/* wrap */}
          <div className='relative w-full h-full rounded-xl overflow-hidden'>
            <img src={BannerImg}
                alt='배너이미지'
                className=' w-full h-full'/>
            {/* absolute overlay */}
            <div className='absolute inset-0 flex items-center justify-between px-10'>
              {/* text */}
              <div>
                <h4 className='text-3xl font-bold pb-2'>지금 바로 와디즈에서 도전해 보세요!</h4>
                <p className='text-xl text-[var(--color-gray-500)]'>프로젝트를 시작하고 메이커가 되어 보세요!</p>
              </div>
              {/* button */}
              <Button>
                프로젝트 만들기
                <span className='pl-2'>
                  <BsChevronRight className='inline w-[21px] h-[21px]'/>
                </span>
              </Button>
            </div>
          </div>
        </Link>
      </div>
    </section>
  )
}
