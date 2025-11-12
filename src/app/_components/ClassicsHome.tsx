'use client'

import Image from 'next/image'
import SnacksCrokissimo from '../../../public/assets/snacks-crokissimo.png'
import SnacksCrokante from '../../../public/assets/snacks-crokante.png'
import Link from 'next/link'

export function ClassicsHome() {
  return (
    <div
      className="bg-orange relative z-20 flex w-full flex-col items-center px-4 py-16 md:py-24"
      id="portfolio"
    >
      <div className="relative z-10 flex w-full max-w-7xl flex-col items-center gap-12">
        {/* Top Text Section */}
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="!font-family-highgate text-4xl font-black opacity-40 text-shadow-neutral-700 md:text-5xl lg:text-6xl">
            SALGADO OU DOCE?
          </h2>
          <p className="text-xl font-bold text-white md:text-3xl">
            Agora você não precisa escolher.
          </p>
          <p className="-mt-2 max-w-3xl text-base text-white md:text-xl">
            Dois mundos. Uma marca. Infinitas possibilidades de curtição!
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid w-full max-w-4xl grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          {/* Left Card - Crokíssimo */}
          <div className="flex flex-col items-center gap-6 rounded-3xl bg-white p-4 shadow-lg sm:min-h-[620px] sm:p-8">
            <div className="border-brown-light relative w-full rounded-4xl border-2 p-2 py-4">
              <Image
                src={SnacksCrokissimo}
                alt="Crokíssimo - Snacks salgados"
                className="h-auto max-h-[250px] min-h-[250px] w-full max-w-[400px] object-contain"
              />
            </div>

            <h3 className="text-brown-light !font-family-highgate text-3xl font-black md:text-4xl">
              CROKÍSSIMO
            </h3>

            <p className="text-brown-light max-w-[70%] text-center text-base md:text-lg">
              Sabor e crocância como você nunca viu!
            </p>

            <Link
              href="https://www.lojadedoces.com.br/loja/busca.php?loja=1176430&palavra_busca=crokissimo"
              target="_blank"
              rel="noopener noreferrer"
              className="!font-family-highgate bg-brown-light mt-auto flex w-full items-center justify-center p-2 px-4 text-center text-lg font-black text-white uppercase transition-opacity hover:opacity-80 sm:text-2xl"
            >
              EXPERIMENTE CROKÍSSIMO
            </Link>
          </div>

          {/* Right Card - Chokante */}
          <div className="flex flex-col items-center gap-6 rounded-3xl bg-white p-4 shadow-lg sm:min-h-[620px] sm:p-8">
            <div className="border-brown-light relative w-full rounded-4xl border-2 p-2 py-4">
              <Image
                src={SnacksCrokante}
                alt="Chokante - Snacks doces"
                className="h-auto max-h-[250px] w-full max-w-[400px] object-contain"
              />
            </div>

            <h3 className="text-brown-light !font-family-highgate text-3xl font-black md:text-4xl">
              CHOKANTE
            </h3>

            <p className="text-brown-light max-w-[70%] text-center text-base md:text-lg">
              3 Sabores. Docinnn por fora. Crocante por dentro.
            </p>

            <Link
              href="https://www.lojadedoces.com.br/loja/busca.php?loja=1176430&palavra_busca=crokissimo"
              target="_blank"
              rel="noopener noreferrer"
              className="!font-family-highgate bg-brown-light mt-auto flex w-full items-center justify-center p-2 px-4 text-center text-lg font-black text-white uppercase transition-opacity hover:opacity-80 sm:text-2xl"
            >
              EXPERIMENTE CHOKANTE
            </Link>
          </div>
        </div>
      </div>

      <Image
        src="/assets/pattern/pattern-4.png"
        alt="Pattern"
        width={600}
        height={600}
        className="absolute top-[25%] -right-36 w-[320px]"
      />

      <Image
        src="/assets/pattern/pattern-4.png"
        alt="Pattern"
        width={600}
        height={600}
        className="absolute top-[50%] -left-36 w-[320px]"
      />
    </div>
  )
}
