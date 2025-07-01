import React from 'react'

// 아이콘
import { HiOutlineLightBulb, HiOutlineShare } from 'react-icons/hi'
import { TbHomeSearch } from 'react-icons/tb'
import { Link } from 'react-router-dom'

const moreBtn = [
  {
    label: '친구',
    icon: <HiOutlineShare size="24px" className='stroke-[var(--color-gray-400)] stroke-1' />,
    bg: 'bg-[#fff8e7]',
    hoverBg: 'hover:bg-[#fff0ce]'
  },
  {
    label: '메이커센터',
    icon: <HiOutlineLightBulb size="24px" className='stroke-[var(--color-gray-400)] stroke-1' />,
    bg: 'bg-[#e9ecef]',
    hoverBg: 'hover:bg-[#dde2e6]'
  },
  {
    label: '스타트업 찾기',
    icon: <TbHomeSearch size="24px" className='stroke-[var(--color-gray-400)] stroke-1' />,
    bg: 'bg-[#e6f6ff]',
    hoverBg: 'hover:bg-[#dff4ff]'
  },
]

const Btns = () => (
  <div className="flex flex-col gap-2">
    {
      moreBtn.map((btn, i) => (
        <Link
          to="/"
          key={i}
          className={`flex items-center gap-3 px-4 py-[10px] w-50 rounded-lg ${btn.bg} ${btn.hoverBg}`}
        >
          <div className="flex items-center justify-center bg-white w-9 h-9 rounded-xl">
            {btn.icon}
          </div>
          <strong className='text-sm'>{btn.label}</strong>
        </Link>
      ))
    }
  </div>
)

const moreMenuList = [
  {
    text: '바로 가기',
    links: [
      {
        label: 'wadiz NEXT BRAND',
        href: '/',
      },
      {
        label: '와디즈 파트너 서비스',
        href: '/',
      },
      {
        label: 'IP 라이선스 사업신청',
        href: '/',
      },
      {
        label: '와디즈 스쿨',
        href: '/',
      },
      {
        label: '도움말 센터',
        href: '/',
      },
      {
        label: '서포터클럽 멤버십',
        href: '/',
      },
    ]
  },
  {
    text: '와디즈 소개',
    links: [
      {
        label: '와디즈 블로그',
        href: '/',
      },
      {
        label: '와디즈 이야기',
        href: '/',
      },
      {
        label: '협력 프로그램',
        href: '/',
      },
      {
        label: '와디즈 어워즈',
        href: '/',
      },
      {
        label: '성공 프로젝트',
        href: '/',
      },
      {
        label: '굿 웨이브',
        href: '/',
      },
    ]
  },
  {
    text: '공지',
    links: [
      {
        label: '공지사항',
        href: '/',
      },
      {
        label: '이벤트',
        href: '/',
        isNew: true
      },
      {
        label: '보도자료',
        href: '/',
      },
      {
        label: '와디즈 IR',
        href: '/',
      },
      {
        label: '채용',
        href: '/',
      }
    ]
  }
]

const MenuList = () => (
  <div className="flex">
    {
      moreMenuList.map((menu, i) => (
        <div
          key={i}
          className="flex flex-col gap-2 pl-4 w-50 border-l border-[var(--color-gray-200)]"
        >
          <strong className='text-[var(--color-gray-400)] text-xs font-normal'>
            {menu.text}
          </strong>

          <ul className="flex flex-col gap-2 text-[15px]">
            {
              menu.links.map((link, j) => (
                <li key={j}>
                  <Link
                    to={link.href}
                    className='flex gap-1 items-center'
                  >
                    {link.label}
                    {link.isNew && (
                      <span className='h-4 text-white bg-[var(--color-error)] text-[10px] rounded-full px-[5px] font-medium'>
                        NEW
                      </span>
                    )}
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
      ))
    }
  </div>
)

export default function HeaderMore() {
  return (
    <div className='absolute top=[56px] left-0 bg-white z-100 w-full'>
      <div className="flex items-start gap-6 max-w-[1200px] pt-12 pb-16 pl-35 m-auto">
        <Btns />
        <MenuList />
      </div>
    </div>
  )
}
