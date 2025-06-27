import React from 'react'
import FooterAppLinks from './FooterAppLinks'

const companyInfoList = [
  { text: '와디즈㈜' },
  { text: '대표이사 신혜성' },
  { text: '사업자등록번호 258-87-01370' },
  {
    text: '통신판매업신고번호 2021-성남분당C-1153',
    link: {
      href: 'https://www.ftc.go.kr/bizCommPop.do?wrkr_no=2588701370',
      label: '사업자 정보 확인',
      isUnderline: true
    }
  },
  { text: '호스팅 서비스사업자: 와디즈㈜' },
  { text: '경기 성남시 분당구 판교로 242 PDC A동 402호' },
  {
    link: {
      href: 'https://helpcenter.wadiz.kr/hc/ko/requests/new?_ga=2.70071952.1878645259.1750658700-988851665.1750658700&_gac=1.254365178.1750688271.CjwKCAjw9uPCBhATEiwABHN9KxH5EFsaZsAZDPMuLh9FPSB7A0b5-abh6qGJMYCVfLUCy4Q-Dl6faBoC6V8QAvD_BwE',
      label: '이메일 상담 info@wadiz.kr'
    }
  },
  {
    text: '유선 상담 ',
    link: {
      href: 'tel:1661-9056',
      label: '1661-9056'
    }
  },
  {
    text: '© wadiz Co., Ltd.',
    isBold: true
  },
]

export default function FooterCompanyInfo() {
  return (
    <div className="flex-1 flex flex-col gap-4">
      <ul className='flex flex-wrap gap-y-[2px] text-sm/4 text-[var(--color-gray-500)]'>
        {
          companyInfoList.map((item, i) => (
            <li
              key={i}
              className={`relative top-0 after:inline-block after:mx-[6px] after:leading-[1.5] after:text-[var(--color-gray-200)] after:text-xs after:align-text-top ${i >= companyInfoList.length - 2 ? "after:content-['']" : "after:content-['|']"}`}>

              {
                item.text &&
                <span className={`${item.isBold ? "font-semibold" : ""}`}>
                  {item.text}
                </span>
              }

              {
                item.link && (
                  <a
                    href={item.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      ${item.link.isUnderline ? "pl-2 underline font-semibold text-[var(--color-gray-400)]" : " "}
                    `}
                  >
                    {item.link.label}
                  </a>
                )}
            </li>
          ))
        }
      </ul>

      <div className="text-sm text-[var(--color-gray-400)]">
        <p>일부 상품의 경우 와디즈는 통신판매중개자이며 통신판매 당사자가 아닙니다.</p>
        <p>해당되는 상품의 경우 상품, 상품정보, 거래에 관한 의무와 책임은 판매자에게 있으므로, 각 상품 페이지에서 구체적인 내용을 확인하시기 바랍니다.</p>
      </div>

      <div className="text-sm text-[var(--color-gray-400)]">
        <p>와디즈 사이트의 리워드 정보, 메이커 정보, 스토리 정보, 콘텐츠, UI 등에 대한 무단복제, 전송, 배포, 크롤링, 스크래핑 등의 행위는</p>
        <p>저작권법, 콘텐츠산업 진흥법 등 관련 법령에 의하여 엄격히 금지됩니다.
          <button className='font-semibold text-[var(--color-gray-400)] underline pl-2'>
            콘텐츠산업 진흥법에 따른 표시
          </button>
        </p>
      </div>

      <FooterAppLinks />
    </div>
  )
}
