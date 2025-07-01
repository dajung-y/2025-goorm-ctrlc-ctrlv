import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HeaderGnb from './HeaderGnb'

// 아이콘
import logo from '../../assets/logo.svg'
import { HiOutlineMapPin } from 'react-icons/hi2'
import { SlArrowDown } from 'react-icons/sl'
import HeaderMore from './HeaderMore'

// 로고
const Logo = () => (
  <h1>
    <Link to="/">
      <img src={logo} alt="wadiz" />
    </Link>
  </h1>
)

const headerNavs = [
  {
    type: 'link',
    label: '오픈예정',
    href: '/'
  },
  {
    type: 'link',
    label: '펀딩 +',
    href: '/'
  },
  {
    type: 'link',
    label: '프리오더',
    href: '/'
  },
  {
    type: 'link',
    label: '스토어',
    href: '/'
  },
  {
    type: 'dropdown',
    label: '더보기',
  },
]

const Nav = ({ isMoreOpen, setIsMoreOpen }) => (
  <nav>
    <ul className='flex gap-8 items-center'>
      {
        headerNavs.map((nav, i) => {
          switch (nav.type) {
            case 'link':
              return (
                <li key={i} className='text-lg font-semibold'>
                  <Link to={nav.href}>{nav.label}</Link>
                </li>
              )

            case 'dropdown':
              return (
                <li key={i} className='text-lg font-semibold'>
                  <button
                    onClick={() => setIsMoreOpen(!isMoreOpen)}
                    className='flex items-center gap-2 '
                  >
                    {nav.label}
                    <SlArrowDown size="14" className={`transition-transform  ${isMoreOpen ? 'rotate-180' : 'rotate-0'} `} />
                  </button>
                </li>
              )
          }

        })
      }
    </ul>
  </nav>
)

const utilItems = [
  {
    type: 'icon',
    icon: <HiOutlineMapPin size="24" />
  },
  {
    type: 'link',
    label: '로그인',
    href: '/'
  },
  {
    type: 'link',
    label: '회원가입',
    href: '/'
  },
  {
    type: 'button',
    label: '프로젝트 만들기',
    href: '/createproject',
  },
]

const Util = () => (
  <div className="flex items-center gap-4">
    {
      utilItems.map((item, i) => {
        switch (item.type) {
          case 'icon':
            return (
              <button key={i}>{item.icon}</button>
            )

          case 'link':
            return (
              <Link key={i} to={item.href} className='text-sm'>{item.label}</Link>
            )

          case 'button':
            return (
              <Link
                key={i}
                to={item.href}
                className='flex items-center text-sm text-white rounded-sm px-4 h-[40px] bg-[var(--color-primary)]'
              >
                {item.label}
              </Link>
            )
        }
      })
    }
  </div>
)

export default function Header() {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  return (
    <>
      <header className='w-full tracking-[-0.5px]'>
        <div className="flex items-center gap-12 max-w-[1280px] m-auto  py-2">
          <Logo />

          <div className="flex justify-between items-center w-full">
            <Nav isMoreOpen={isMoreOpen} setIsMoreOpen={setIsMoreOpen} />
            <Util />
          </div>
        </div>
      </header>
      {isMoreOpen && <HeaderMore />}
      <HeaderGnb />
    </>
  )
}
