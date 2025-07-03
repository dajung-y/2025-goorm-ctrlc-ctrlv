import React from 'react'
import EarlyBirdProduct from './EarlyBirdProduct'
import CreateProjectBanner from './CreateProjectBanner'
import RecomendProduct from './RecomendProduct'

export default function MainContainer() {
  return (
    <main className='flex flex-col mt-4 mb-40'>
      <section className='mt-4 mb-4'>
        <RecomendProduct />
      </section>
      <section className='mt-4 mb-4'>
        <EarlyBirdProduct />
      </section>
      <section className='mt-4 mb-4'>
        <CreateProjectBanner />
      </section>
    </main>
  )
}
