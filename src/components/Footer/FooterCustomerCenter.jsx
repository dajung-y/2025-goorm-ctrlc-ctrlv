import React from 'react'

// 아이콘
import { HiQuestionMarkCircle } from "react-icons/hi2"
import { SlArrowRight } from 'react-icons/sl'

const customerLinks = [
  {
    label: '문의 등록하기',
    href: 'https://helpcenter.wadiz.kr/hc/ko/requests/new?_ga=2.238369408.1878645259.1750658700-988851665.1750658700&_gac=1.154734410.1750740113.CjwKCAjw9uPCBhATEiwABHN9K7xE7hsHOEgCmQhrkY2vFCBGYcddPoDRfYAlPv8KZB3cHCarVSqqOhoCPYEQAvD_BwE'
  },
  {
    label: '도움말 센터 바로가기',
    href: 'https://helpcenter.wadiz.kr/hc/ko?_ga=2.238369408.1878645259.1750658700-988851665.1750658700&_gac=1.154734410.1750740113.CjwKCAjw9uPCBhATEiwABHN9K7xE7hsHOEgCmQhrkY2vFCBGYcddPoDRfYAlPv8KZB3cHCarVSqqOhoCPYEQAvD_BwE'
  },
  {
    label: 'Contact for Global',
    href: 'https://forms.monday.com/forms/1188e2499aefec9936a4456aa4bf5429?r=use1'
  }
]
export default function FooterCustomerCenter() {
  return (
    <div className="">
      <strong className="flex items-center gap-2 text-lg">
        <HiQuestionMarkCircle size="24" />
        와디즈 고객센터
      </strong>

      <div className='flex flex-col gap-2 pt-3'>
        <button className='flex items-center gap-3'>
          <span>채팅 상담하기</span>
          <SlArrowRight size="16" />
        </button>
        {
          customerLinks.map((item, i) =>
            <a
              key={i}
              href={item.href}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-3'
            >
              <span>{item.label}</span>
              <SlArrowRight size="16" />
            </a>
          )
        }
      </div>

      <div className="flex flex-col gap-2 pt-5 mt-5 border-t border-[var(--color-gray-200)] text-sm text-[var(--color-gray-400)]">
        <p className='font-semibold'>상담 가능 시간</p>
        <p>평일 오전 9시 ~ 오후 6시 (주말, 공휴일 제외)</p>
      </div>
    </div>
  )
}
