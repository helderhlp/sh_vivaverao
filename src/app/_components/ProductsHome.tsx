'use client'

import Image from 'next/image'
import SunGold from '../../../public/assets/icons/sun-gold.png'
import FlagGold from '../../../public/assets/icons/flag-gold.png'
import KingGold from '../../../public/assets/icons/king-gold.png'
import StarGold from '../../../public/assets/icons/star-gold.png'
import Background from '../../../public/assets/pattern/pattern-3.png'
import { scrollTo } from '@/lib/utils'

export function ProductsHome() {
  return (
    <div
      className="relative z-20 -mt-1 flex w-full flex-col items-center overflow-hidden px-4 py-8 sm:py-16 md:py-24"
      id="produtos"
    >
      {/* Background with wavy organic shapes */}
      <div className="absolute inset-0 opacity-80">
        <Image
          src={Background}
          alt=""
          className="h-full w-full object-cover"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>

      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center gap-8 text-center">
        {/* Decorative Icons */}
        <div className="flex items-center justify-center gap-6 md:gap-8">
          <Image
            src={SunGold}
            alt=""
            className="h-8 w-8 object-contain md:h-14 md:w-14"
          />
          <Image
            src={FlagGold}
            alt=""
            className="h-8 w-8 object-contain md:h-14 md:w-14"
          />
          <Image
            src={KingGold}
            alt=""
            className="h-8 w-8 object-contain md:h-14 md:w-14"
          />
          <Image
            src={StarGold}
            alt=""
            className="h-8 w-8 object-contain md:h-14 md:w-14"
          />
        </div>

        {/* Main Title */}
        <h2 className="!font-family-highgate text-brown-light text-3xl font-black md:text-5xl lg:text-6xl">
          MONTE O SEU KIT DE VERÃO
        </h2>

        {/* Subtitle */}
        <p className="text-brown-light -mt-4 text-base font-semibold md:text-lg lg:text-3xl">
          Acesso o link abaixo e conheça nosso portfólio!
        </p>

        {/* Call to Action Button */}
        <button
          onClick={() => scrollTo('portfolio')}
          className="bg-brown-light !font-family-highgate mt-4 p-2 px-8 text-lg font-black text-white sm:text-2xl"
        >
          VER PORTFÓLIO
        </button>
      </div>
    </div>
  )
}
