import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import HeaderGnb from './HeaderGnb'
import HeaderMore from './HeaderMore'

// 아이콘
import logo from '../../assets/logo.svg'
import { HiOutlineMapPin } from 'react-icons/hi2'
import { SlArrowDown } from 'react-icons/sl'
import HeaderModal from './HeaderModal'

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
            default:
              return null;
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

const Util = ({ isShowModal, setIsShowModal }) => (
  <div className="flex items-center gap-4">
    {
      utilItems.map((item, i) => {
        switch (item.type) {
          case 'icon':
            return (
              <button
                key={i}
                onClick={() => setIsShowModal(!isShowModal)}
              >
                {item.icon}
              </button>
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
                className='flex items-center text-sm text-white rounded-sm px-4 h-[40px] bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)]'
              >
                {item.label}
              </Link>
            )
          default:
            return null;
        }
      })
    }
  </div>
)

export default function Header() {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const location = useLocation();
  const isListPage = location.pathname.startsWith('/list');
  const isDetailPage = location.pathname.startsWith('/detail');
  const isCreateProjectPage = location.pathname === '/createproject';
  // 중첩 라우트라서 startsWith() 사용해야함
  // startsWith(검색할 문자열)  : 검색할 문자열로 시작하는지 확인할 때 사용
  const moreRef = useRef(null);

  // 외부 클릭 시 more 닫힘
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (moreRef.current && !moreRef.current.contains(e.target)) {
        setIsMoreOpen(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [])

  return (
    <>
      <header
        ref={moreRef}
        className='w-full tracking-[-0.5px] bg-white'>
        <div className="flex items-center gap-12 max-w-[1280px] m-auto  py-2">
          <Logo />

          <div className="flex justify-between items-center w-full">
            <Nav isMoreOpen={isMoreOpen} setIsMoreOpen={setIsMoreOpen} />
            <Util isShowModal={isShowModal} setIsShowModal={setIsShowModal} />
          </div>
        </div>
      </header>

      {isMoreOpen && <HeaderMore />}
      {!isDetailPage && !isCreateProjectPage && <HeaderGnb isListPage={isListPage} />}
      {isShowModal && <HeaderModal isShowModal={isShowModal} setIsShowModal={setIsShowModal} />}
    </>
  )
}
