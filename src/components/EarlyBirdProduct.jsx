import React from 'react'
import EarlyBirdCard from './EarlyBirdCard'


// 얼리버드 더미 데이터
const dummyProducts = [
  {
    image: 'https://cdn2.wadiz.kr/2024/06/05/04331dab-27cd-41e6-b36c-b2b257f43c81.jpeg/wadiz/resize/400/format/jpg/quality/85/',
    category: '프리오더',
    title: '프리미엄 커피 드리퍼 세트',
    participants: 24,
    composition: '드리퍼, 필터 100매, 전용 서버',
    price: 45000
  },
  {
    image: 'https://cdn2.wadiz.kr/2023/12/18/75171ab8-5cb1-40ea-80c3-f446f61ede50.jpg/wadiz/resize/300/format/jpg/quality/85/',
    category: '프리오더',
    title: '휴대용 블루투스 스피커 X-100',
    participants: 47,
    composition: '스피커 본체, 충전케이블, 파우치',
    price: 89000
  },
  {
    image: 'https://cdn.wadiz.kr/wwwwadiz/green002/2018/0112/20180112121320902_16549.png/wadiz/resize/300/format/jpg/quality/85/',
    category: '프리오더',
    title: '친환경 대나무 칫솔 세트',
    participants: 12,
    composition: '칫솔 4개, 휴대용 케이스',
    price: 12000
  },
  // {
  //   image: 'https://cdn2.wadiz.kr/2021/09/16/83f385ea-7276-4c23-839d-44a57001ce0b.jpg/wadiz/resize/300/format/jpg/quality/85/',
  //   category: '프리오더',
  //   title: '미니멀 디자인 시계',
  //   participants: 6,
  //   composition: '시계 본체, 가죽 스트랩 2종',
  //   price: 68000
  // },
  // {
  //   image: '/',
  //   category: '프리오더',
  //   title: '스마트 무선 이어버드',
  //   participants: 22,
  //   composition: '이어버드, 충전케이스, 교체용 팁 3쌍',
  //   price: 129000
  // },
  // {
  //   image: '/',
  //   category: '프리오더',
  //   title: '휴대용 미니 가습기',
  //   participants: 7,
  //   composition: '가습기, USB케이블, 세척도구',
  //   price: 34000
  // },
  // {
  //   image: '/',
  //   category: '프리오더',
  //   title: '캠핑용 LED 랜턴',
  //   participants: 45,
  //   composition: '랜턴, 충전케이블, 收納파우치',
  //   price: 52000
  // },
  // {
  //   image: '/',
  //   category: '프리오더',
  //   title: '다용도 노트북 스탠드',
  //   participants: 156,
  //   composition: '스탠드, 파우치, 케이블 홀더',
  //   price: 38000
  // },
  // {
  //   image: '/',
  //   category: '프리오더',
  //   title: '프리미엄 티 세트',
  //   participants: 8,
  //   composition: '잎차 3종, 티백 30개, 전용 티팟',
  //   price: 76000
  // },
  // {
  //   image: '/',
  //   category: '프리오더',
  //   title: '무선 충전 보조배터리',
  //   participants: 21,
  //   composition: '보조배터리, 케이블, 파우치',
  //   price: 55000
  // },
  // {
  //   image: '/',
  //   category: '프리오더',
  //   title: '휴대용 전동 칫솔',
  //   participants: 7,
  //   composition: '칫솔 본체, 칫솔모 2개, 충전독',
  //   price: 48000
  // },
  // {
  //   image: '/',
  //   category: '프리오더',
  //   title: '미니 블렌더',
  //   participants: 11,
  //   composition: '블렌더 본체, 텀블러 2개, 세척도구',
  //   price: 67000
  // }
];




export default function EarlyBirdProduct() {
  return (
    <main className='w-full max-w-[1280px] mx-auto px-4 py-16 border'>
      {/* 타이틀 */}
      <div className='mb-6'>
        <h3 className='mb-1 text-2xl font-extrabold'>얼리버드</h3>
        <p>먼저 참여하는 분들께 드리는 얼리버드 혜택</p>
      </div>
      {/* 한 페이지에 3개씩 보이도록 */}
      <div className='flex justify-between gap-8'>
      {dummyProducts.map((item,index) => (
        <EarlyBirdCard key={index} item={item} />
      ))}
      </div>
    </main>
  )
}
