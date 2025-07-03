import React from 'react'

import FooterTopNav from './FooterTopNav'
import FooterCustomerCenter from './FooterCustomerCenter'
import FooterCompanyInfo from './FooterCompanyInfo'

export default function Footer() {

  return (
    <footer className='w-full tracking-[-0.5px]'>
      <FooterTopNav />

      <div className="flex gap-36 max-w-[1280px] m-auto pt-10 pb-20">
        <FooterCustomerCenter />
        <FooterCompanyInfo />
      </div>
    </footer >
  )
}
