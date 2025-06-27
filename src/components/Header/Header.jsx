import React from 'react'
import { Link } from 'react-router-dom'
import HeaderGnb from './HeaderGnb'

// 아이콘
import logo from '../../assets/logo.svg'
import { HiOutlineMapPin } from 'react-icons/hi2'
import { SlArrowDown } from 'react-icons/sl'
import { HiOutlineLightBulb, HiOutlineShare } from 'react-icons/hi'
import { TbHomeSearch } from 'react-icons/tb'

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
    label: '오픈예정',
    href: '/'
  },
  {
    label: '펀딩 +',
    href: '/'
  },
  {
    label: '프리오더',
    href: '/'
  },
  {
    label: '스토어',
    href: '/'
  },
]

const Nav = () => (
  <nav>
    <ul className='flex gap-8 items-center'>
      {
        headerNavs.map((nav, i) => (

          <li key={i} className='text-lg font-semibold'>
            <Link to={nav.href}>{nav.label}</Link>
          </li>

        ))
      }
      <li className='text-lg font-semibold'>
        <button className='flex items-center gap-2 '>
          더보기
          <SlArrowDown size="14" />
        </button>
      </li>
    </ul>

    {/* 더보기 클릭 시 */}
    <div>

    </div>
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
            return <button key={i}>{item.icon}</button>;
          case 'link':
            return <Link key={i} to={item.href} className='text-sm'>{item.label}</Link>
          case 'button':
            return (
              <Link key={i} to={item.href}>
                <button className='text-sm text-white rounded-sm px-4 h-[40px] bg-cyan-500'>
                  {item.label}
                </button>
              </Link>
            )
        }
      })
    }
  </div>
)

export default function Header() {
  return (
    <>
      <header className='w-full tracking-[-0.5px]'>
        <div className="flex items-center gap-12 max-w-[1280px] m-auto  py-2">
          <Logo />

          <div className="flex justify-between items-center w-full">
            <Nav />
            <Util />
          </div>
        </div>
      </header>

      <HeaderGnb />
    </>
  )
}
