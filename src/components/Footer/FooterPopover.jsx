import React, { useState } from 'react'

// 아이콘
import { GoLinkExternal, GoCheck } from "react-icons/go"
import { FaFacebook, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa"
import { RiKakaoTalkFill } from "react-icons/ri"
import { SiNaver } from "react-icons/si"
import { IoPencilOutline, IoCloseOutline } from "react-icons/io5"

const popoverData = {
  "정책": [
    {
      label: '공통 정책·약관',
      href: 'https://www.wadiz.kr/web/wterms/signup'
    },
    {
      label: '와디즈 정책·약관',
      href: 'https://www.wadiz.kr/web/wterms/service_reward'
    },
  ],
  "제휴문의": [
    {
      label: '광고 서비스 문의',
      email: 'ad@wadiz.kr',
      href: 'mailto:ad@wadiz.kr',
      btn: {
        label: '광고상품보기',
        href: 'https://business.wadiz.kr/?_ga=2.62337580.1878645259.1750658700-988851665.1750658700&_gac=1.187231706.1750829270.CjwKCAjwmenCBhA4EiwAtVjzmizZKiOl6Hwf96bncz0zHmpdFYR6AZTegNrZmlyZ2f0qqpQEnfBEahoCeEYQAvD_BwE'
      }
    },
    {
      label: '제휴 문의',
      email: 'partner@wadiz.kr',
      href: 'mailto:partner@wadiz.kr',
    },
    {
      label: '마케팅 제휴/PR 문의',
      email: 'mktpr@wadiz.kr',
      href: 'mailto:mktpr@wadiz.kr',
    },
    {
      label: 'IP 제휴 문의',
      email: 'ip@wadiz.kr',
      href: 'mailto:ip@wadiz.kr',
    }
  ],
  "SNS": [
    {
      label: '카카오 채널',
      icon: <RiKakaoTalkFill size="18" />,
      href: 'https://pf.kakao.com/_pEeEl',
    },
    {
      label: '페이스북',
      icon: <FaFacebook size="16" />,
      href: 'https://www.facebook.com/wadiz.funding',
    },
    {
      label: '브런치',
      icon: <IoPencilOutline size="16" />,
      href: 'https://brunch.co.kr/@wadiz',
    },
    {
      label: '인스타그램',
      icon: <FaInstagram size="16" />,
      href: 'https://www.instagram.com/wadiz_official/',
    },
    {
      label: '블로그',
      icon: <SiNaver size="13" />,
      href: 'https://blog.wadiz.kr/?_ga=2.39810595.1878645259.1750658700-988851665.1750658700&_gac=1.79971045.1750829270.CjwKCAjwmenCBhA4EiwAtVjzmizZKiOl6Hwf96bncz0zHmpdFYR6AZTegNrZmlyZ2f0qqpQEnfBEahoCeEYQAvD_BwE',
    },
    {
      label: '유튜브',
      icon: <FaYoutube size="16" />,
      href: 'https://www.youtube.com/channel/UCRF2YAxV9vnzo2khhGCGlZg',
    },
    {
      label: 'X',
      icon: <IoCloseOutline size="20" />,
      href: 'https://x.com/Wadiz_funding',
    },
    {
      label: '링크드인',
      icon: <FaLinkedin size="18" />,
      href: 'https://www.linkedin.com/company/wadiz/?viewAsMember=true',
    }
  ],
  "Language": [
    { label: '한국어' },
    { label: '中文 (简体)' },
    { label: 'Español' },
    { label: '日本語' },
    { label: 'English' }
  ]
}

export default function FooterPopover({ type }) {
  const data = popoverData[type];
  const [selected, setSelected] = useState(0);
  console.log(type, data);

  if (!data) return null;
  return (
    <div className={`
          absolute z-1 w-[320px] border border-[#babdc0] bg-white rounded-md px-4 py-2 shadow-lg cursor-pointer
          ${type === 'SNS' ? 'flex flex-wrap' : ''}
          ${type === '정책' ? 'left-0 -translate-y-1/2' : 'left-1/2 -translate-1/2'}
        `}
    >
      {data?.map((item, index) => {
        switch (type) {
          case '정책':
            return (
              <a
                key={index}
                href={item.href}
                target='_blank'
                rel="noopener noreferrer"
                className="flex items-center gap-2 py-2"
              >
                {item.label}
                <GoLinkExternal size="17" />
              </a>
            )

          case '제휴문의':
            return (
              <div
                key={index}
                className='flex gap-1 items-center py-2'>
                <div className="font-bold">{item.label}</div>
                <a
                  href={item.href}
                  target='_blank'
                  rel="noopener noreferrer"
                  className="font-medium"
                >
                  {item.email}
                </a>
                {item.btn && (
                  <a
                    href={item.btn.href}
                    target='_blank'
                    rel="noopener noreferrer"
                    className="before:content-['|'] before:inline-block before:mr-[4px] before:leading-[1.5] before:text-[var(--color-gray-200)] before:text-xs before:align-text-top"
                  >
                    {item.btn.label}
                  </a>
                )}
              </div>
            )

          case 'SNS':
            return (
              <a
                key={index}
                href={item.href}
                target='_blank'
                rel="noopener noreferrer"
                className='flex items-center gap-2 py-2 w-1/2'
              >
                {item.icon}
                {item.label}
              </a>
            )

          case 'Language':
            const isSelected = selected === index;
            return (
              <div
                key={index}
                onClick={() => setSelected(index)}
                className='flex items-center gap-2 font-bold py-2'
              >
                <div className="flex items-center justify-center w-4 h-4">
                  {isSelected && <GoCheck size="16" />}
                </div>
                {item.label}
              </div>
            )

        }
      })}
    </div>
  )
}
