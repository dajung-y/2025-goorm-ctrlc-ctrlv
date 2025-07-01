import React from 'react'
import EarlyBirdProduct from './EarlyBirdProduct'
import CreateProjectBanner from './CreateProjectBanner'
import RecomendProduct from './RecomendProduct'

export default function MainContainer() {
  return (
    <main>
      <RecomendProduct />
      <EarlyBirdProduct />
      <CreateProjectBanner />
    </main>
  )
}
