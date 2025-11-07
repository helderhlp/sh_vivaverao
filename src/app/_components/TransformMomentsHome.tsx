'use client'

import Image from 'next/image'
import Snacks from '../../../public/assets/snacks-mendorato-three.png'
import { scrollTo } from '@/lib/utils'

import SnackOvinho from '../../../public/assets/snacks-ovinhos.png'
import SnackSemPele from '../../../public/assets/snacks-sem-pele.png'

export function TransformMomentsHome() {
  return (
    <div
      className="bg-brown-light relative z-20 -mt-1 flex w-full flex-col items-center px-4 py-16 md:py-24"
      id="ocasioes"
    >
      <div className="relative z-10 flex w-full max-w-6xl flex-col items-center gap-4 text-center">
        {/* Top Title */}
        <h2 className="!font-family-highgate text-orange text-3xl font-black md:text-5xl lg:text-6xl">
          CADA MOMENTO PEDE <br className="max-md:hidden" /> UM SNACK DIFERENTE!
        </h2>

        {/* Top Subtitle */}
        <p className="-mt-2 text-base text-white md:text-lg lg:text-xl">
          Conheça os snacks de amendoim oficiais do verão e escolha o seu
          favorito!
        </p>

        {/* Middle Title - MENDORATO */}
        <h3 className="text-orange !font-family-highgate mt-12 text-5xl font-black md:text-6xl">
          MENDORATO
        </h3>

        {/* Middle Subtitle */}
        <p className="-mt-4 text-xl font-medium text-white md:text-2xl">
          O rei oficial do verão
        </p>

        {/* Product Image */}
        <div className="relative my-8 flex w-full max-w-4xl justify-center">
          <Image
            src={Snacks}
            alt="Mendorato - Snacks de amendoim"
            className="h-auto w-full max-w-[800px] object-contain"
            priority
          />
        </div>

        {/* Bottom Description */}
        <p className="max-w-3xl text-base text-white md:text-lg lg:text-xl">
          Dourado, crocante e inconfundível. Mendorato é o snack que define o
          verão brasileiro! Com ele, qualquer momento vira curtição!
        </p>

        {/* Call to Action Button */}
        <button
          onClick={() => scrollTo('portfolio')}
          className="!font-family-highgate text-brown-light mt-4 bg-white p-2 px-4 text-2xl font-black"
        >
          CONHEÇA OS CLÁSSICOS
        </button>
      </div>

      <div className="z-10 mt-24 grid w-full max-w-4xl grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
        {/* Left Card - Crokíssimo */}
        <div className="flex flex-col items-center gap-6 rounded-3xl bg-white p-4 shadow-lg sm:p-8">
          <div className="border-brown-light relative w-full rounded-4xl border-2 p-2 py-4">
            <Image
              src={SnackOvinho.src}
              alt="Snacks Ovinhos"
              width={300}
              height={300}
              className="h-auto max-h-[250px] w-full max-w-[400px] object-contain sm:min-h-[250px]"
            />
          </div>

          <h3 className="text-brown-light !font-family-highgate text-center text-3xl font-black md:text-4xl">
            OVINHOS MENDORATO
          </h3>

          <p className="text-brown-light text-center text-base sm:max-w-[70%] md:text-lg">
            Novos Ovinhos Mendorato, o clássico que vai coroar seus momentos.
          </p>

          <button className="!font-family-highgate bg-brown-light mt-auto w-full p-2 px-4 text-2xl font-black text-white uppercase">
            CONHEÇA OS clássicos
          </button>
        </div>

        {/* Right Card - Chokante */}
        <div className="flex flex-col items-center gap-6 rounded-3xl bg-white p-4 shadow-lg sm:p-8">
          <div className="border-brown-light relative w-full rounded-4xl border-2 p-2 py-4">
            <Image
              src={SnackSemPele.src}
              alt="Chokante - Snacks doces"
              width={300}
              height={300}
              className="h-auto max-h-[250px] w-full max-w-[400px] object-contain"
            />
          </div>

          <h3 className="text-brown-light !font-family-highgate text-center text-3xl font-black md:text-4xl">
            MENDORATO <br /> SEM PELE
          </h3>

          <p className="text-brown-light text-center text-base md:text-lg">
            Grelhaditos Amíndus, o verdinho da Santa Helena, agora é Mendorato,
            o Amendoim Sem Pele que já era preferência, agora é referência.
          </p>

          <button className="!font-family-highgate bg-brown-light mt-auto w-full p-2 px-4 text-2xl font-black text-white uppercase">
            CONHEÇA OS clássicos
          </button>
        </div>
      </div>

      <Image
        src="/assets/pattern/pattern-1.png"
        alt="Pattern"
        width={600}
        height={600}
        className="absolute top-4 left-0 w-[200px] sm:top-[270px] sm:w-[420px]"
      />

      <Image
        src="/assets/pattern/pattern-1.png"
        alt="Pattern"
        width={600}
        height={600}
        className="absolute top-[85%] right-0 w-[200px] sm:w-[420px]"
      />

      <Image
        src="/assets/pattern/pattern-4.png"
        alt="Pattern"
        width={600}
        height={600}
        className="absolute top-[20%] -right-20 w-[200px] sm:top-[25%] sm:-right-36 sm:w-[320px]"
      />

      <Image
        src="/assets/pattern/pattern-4.png"
        alt="Pattern"
        width={600}
        height={600}
        className="absolute top-[50%] -left-20 w-[200px] sm:-left-36 sm:w-[320px]"
      />
    </div>
  )
}
