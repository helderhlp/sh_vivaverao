'use client'

import { useState, useRef, useEffect } from 'react'
import ViraCurticao from '../../../public/assets/vira-curticao.png'
import Verao from '../../../public/assets/verao.png'
import Image from 'next/image'

import SunGold from '../../../public/assets/icons/sun-gold.png'
import FlagGold from '../../../public/assets/icons/flag-gold.png'
import KingGold from '../../../public/assets/icons/king-gold.png'
import StarGold from '../../../public/assets/icons/star-gold.png'

export function VideoHome() {
  return (
    <div
      className="relative z-20 flex w-full justify-center py-12 md:py-32"
      id="filme"
    >
      <div className="relative z-10 flex w-full max-w-7xl flex-col items-center max-xl:px-4">
        <h2 className="!font-family-highgate text-brown-light mb-8 text-center text-4xl font-black uppercase sm:text-5xl md:mb-14 md:text-6xl lg:text-7xl">
          É oficial: O verão <br className="max-md:hidden" /> Começa agora!
        </h2>

        <MovieComponent />
      </div>

      {/* Imagem flutuante VERÃO */}
      <div className="pointer-events-none absolute top-34 right-14 z-0 -translate-y-1/2 sm:top-[230px]">
        <Image
          src={Verao.src}
          alt="VERÃO"
          width={500}
          height={300}
          className="object-contain"
        />
      </div>

      {/* Imagem flutuante Vira CURTIÇÃO */}
      <div className="pointer-events-none absolute bottom-0 left-8 z-0 sm:bottom-8">
        <Image
          src={ViraCurticao.src}
          alt="VERÃO"
          width={800}
          height={300}
          className="object-contain"
        />
      </div>

      <div className="absolute top-40 left-[30px] flex items-center justify-center gap-6 sm:top-28 md:top-[2300px] md:left-[100px] md:gap-8">
        <Image
          src={SunGold}
          alt=""
          className="h-8 w-8 object-contain md:h-10 md:w-10"
        />
        <Image
          src={FlagGold}
          alt=""
          className="h-8 w-8 object-contain md:h-10 md:w-10"
        />
        <Image
          src={KingGold}
          alt=""
          className="h-8 w-8 object-contain md:h-10 md:w-10"
        />
        <Image
          src={StarGold}
          alt=""
          className="h-8 w-8 object-contain md:h-10 md:w-10"
        />
      </div>
    </div>
  )
}

export function MovieComponent() {
  const videos = ['9L4o_KSg3_s']
  const [current, setCurrent] = useState(0)
  const iframeRefs = useRef<(HTMLIFrameElement | null)[]>([])

  const goTo = (idx: number) => {
    setCurrent(() => {
      if (idx < 0) return videos.length - 1
      if (idx >= videos.length) return 0
      return idx
    })
  }

  useEffect(() => {
    iframeRefs.current.forEach((frame, i) => {
      if (i !== current && frame?.contentWindow) {
        frame.contentWindow.postMessage(
          '{"event":"command","func":"stopVideo","args":""}',
          '*',
        )
      }
    })
  }, [current])

  return (
    <div className="w-full max-w-7xl">
      {/* Wrapper sem overflow para permitir setas fora */}
      <div className="relative w-full">
        {/* Área que recorta somente o vídeo */}
        <div className="relative w-full overflow-hidden rounded-4xl bg-black/40">
          {videos.map((id, idx) => (
            <div
              key={id}
              className={`transition-opacity duration-500 ${
                idx === current
                  ? 'opacity-100'
                  : 'pointer-events-none absolute inset-0 opacity-0'
              }`}
            >
              <div className="aspect-video w-full">
                <iframe
                  ref={(el) => {
                    iframeRefs.current[idx] = el
                  }}
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${id}?enablejsapi=1&rel=0`}
                  title={`video-${idx}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          ))}

          {/* Indicadores */}
          <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
            {videos.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2 w-2 cursor-pointer rounded-3xl transition ${
                  i === current ? 'bg-blue' : 'bg-white/40 hover:bg-white/70'
                }`}
                aria-label={`Ir para vídeo ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* <button
          onClick={() => goTo(current - 1)}
          className="bg-orange hover:bg-orange-sec text-white-sec absolute top-1/2 -left-2 z-30 -translate-y-1/2 cursor-pointer rounded-full p-2 transition-colors focus:ring-2 focus:ring-white focus:outline-none sm:-left-4"
          aria-label="Anterior"
        >
          <ArrowLeftCircle size={18} className="text-blue" />
        </button>

        <button
          onClick={() => goTo(current + 1)}
          className="bg-orange text-white-sec hover:bg-orange-sec absolute top-1/2 -right-2 z-30 -translate-y-1/2 cursor-pointer rounded-full p-2 transition-colors focus:ring-2 focus:ring-white focus:outline-none sm:-right-4"
          aria-label="Próximo"
        >
          <ArrowRightCircle size={18} className="text-blue" />
        </button> */}
      </div>
    </div>
  )
}
