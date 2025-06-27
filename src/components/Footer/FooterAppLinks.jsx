import React from 'react'

// 아이콘
import { FaApple } from "react-icons/fa"
import { BiSolidRightArrow } from "react-icons/bi"

const appLinks = [
  {
    label: 'Android앱',
    href: 'https://play.google.com/store/apps/details?id=com.markmount.wadiz',
    icon: <BiSolidRightArrow size={22} className='fill-[var(--color-gray-500)]' />,
  },
  {
    label: 'iOS앱',
    href: 'https://apps.apple.com/kr/app/%EC%99%80%EB%94%94%EC%A6%88/id1107828621',
    icon: <FaApple size={22} className='fill-[var(--color-gray-500)] ' />
  },
]

export default function FooterAppLinks() {
  return (
    <div className="flex gap-10 items-center mt-8">
      {appLinks.map((app, i) => (
        <a
          key={i}
          href={app.href}
          target='_blank'
          rel="noopener"
          className='flex gap-1 items-center text-sm'
        >
          {app.icon}
          {app.label}
        </a>
      ))}
    </div>
  )
}
