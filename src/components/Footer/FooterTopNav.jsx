import React, { useEffect, useRef, useState } from 'react'
import FooterPopover from './FooterPopover'

// 아이콘
import { SlArrowDown } from 'react-icons/sl'
import { GoLinkExternal } from "react-icons/go"

// 팝오버 호출 컴포넌트
const PopoverTrigger = ({ label, onClick }) => (
  <div
    onClick={onClick}
    className="flex items-center gap-2 cursor-pointer"
  >
    {label}
    <SlArrowDown size="12" />
  </div>
)

// 외부 링크 이동 컴포넌트
const TopNavLink = ({ href, label }) => (
  <a
    href={href}
    target='_blank'
    rel="noopener noreferrer"
    className={`flex items-center gap-2 ${label === '개인정보처리방침' ? "font-bold" : ""}`}
  >
    {label}
    <GoLinkExternal size="17" />
  </a>
)

export default function FooterTopNav() {
  const [activePopover, setActivePopover] = useState({ type: null });

  const popoverRef = useRef(null);

  const handleToggle = (type) => {
    setActivePopover(prev => (prev === type ? null : type))
  }

  // 외부 클릭 시 팝오버 닫힘
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target)) {
        setActivePopover(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [])

  return (
    <div className="border-t border-b border-[var(--color-gray-200)]">
      <div
        ref={popoverRef}
        className="flex justify-between max-w-[1280px] h-10 m-auto text-[var(--color-gray-500)] text-sm"
      >
        <div className="flex items-center gap-8">
          <div className="relative">
            <PopoverTrigger label="정책 · 약관" onClick={() => handleToggle('정책')} />
            {activePopover === '정책' && (
              <FooterPopover type="정책" />
            )}
          </div>

          <TopNavLink label="개인정보처리방침" href="https://www.wadiz.kr/web/wterms/privacy" />
        </div>

        <div className="flex items-center gap-8">
          <div className="relative">
            <PopoverTrigger label="제휴문의" onClick={() => handleToggle('제휴문의')} />
            {activePopover === '제휴문의' && (
              <FooterPopover type="제휴문의" />
            )}
          </div>

          <TopNavLink label="공지사항" href="https://www.wadiz.kr/web/wterms/privacy" />

          <TopNavLink label="와디즈 IR" href="https://www.wadizcorp.com/" />

          <TopNavLink label="인재채용" href="https://job.wadiz.kr/ko/home?_ga=2.237985408.1878645259.1750658700-988851665.1750658700&_gac=1.87811818.1750829270.CjwKCAjwmenCBhA4EiwAtVjzmizZKiOl6Hwf96bncz0zHmpdFYR6AZTegNrZmlyZ2f0qqpQEnfBEahoCeEYQAvD_BwE" />

          <div className="relative">
            <PopoverTrigger label="SNS" onClick={() => handleToggle('SNS')} />
            {activePopover === 'SNS' && (
              <FooterPopover type="SNS" />
            )}
          </div>

          <div className="relative">
            <PopoverTrigger label="Language" onClick={() => handleToggle('Language')} />
            {activePopover === 'Language' && (
              <FooterPopover type="Language" />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
