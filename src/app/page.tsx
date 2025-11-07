'use client'

import { FlavorHome } from './_components/FlavorHome'
import { ClassicsHome } from './_components/ClassicsHome'
import { HeaderHome } from './_components/HeaderHome'
import { HeroHome } from './_components/HeroHome'
import { TransformMomentsHome } from './_components/TransformMomentsHome'
import { VideoHome } from './_components/VideoHome'
import { ProductsHome } from './_components/ProductsHome'
import { AboutUs } from './_components/AboutUs'
import { SocialNetwork } from './_components/SocialNetwork'
import { Footer } from './_components/Footer'

export default function Home() {
  return (
    <div className="bg-sand z-10 flex flex-col items-center overflow-hidden">
      <HeaderHome />

      <main className="z-0 flex w-full flex-col items-center">
        <HeroHome />
        <VideoHome />
        <FlavorHome />
        <TransformMomentsHome />
        <ClassicsHome />
        <ProductsHome />

        <AboutUs />
        <SocialNetwork />
        <Footer />
      </main>
    </div>
  )
}
