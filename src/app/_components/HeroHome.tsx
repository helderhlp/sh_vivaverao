'use client'

import Image from 'next/image'
import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel'

export function HeroHome() {
  const sliders = [
    '/assets/banners/KV_verao_estacao.png',
    '/assets/banners/KV_verao_vira-curticao.png',
    '/assets/banners/KV_verao_vira-curticao1.png',
  ]

  const [api, setApi] = React.useState<CarouselApi | null>(null)
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) return
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap())
    }
    api.on('select', onSelect)
    return () => {
      api.off('select', onSelect)
    }
  }, [api])

  return (
    <div className="relative z-10 w-screen">
      <div className="flex w-screen items-center justify-center">
        <Carousel
          className="relative h-fit w-screen"
          opts={{ loop: true }}
          setApi={setApi}
        >
          <CarouselContent className="pointer-events-auto h-fit w-screen cursor-grab touch-pan-y select-none active:cursor-grabbing">
            {sliders.map((slider, idx) => (
              <CarouselItem key={slider}>
                <div className="relative mx-auto flex w-screen max-w-none justify-center">
                  <Image
                    src={slider}
                    alt={`Banner ${idx + 1}`}
                    priority
                    draggable={false}
                    width={1920}
                    height={1080}
                    sizes="100vw"
                    className="object-contain duration-300 select-none"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {count > 1 && (
            <div className="pointer-events-auto absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 gap-2 lg:bottom-20">
              {Array.from({ length: count }).map((_, i) => (
                <button
                  key={i}
                  aria-label={`Ir para slide ${i + 1}`}
                  onClick={() => api?.scrollTo(i)}
                  className={`h-2.5 w-2.5 rounded-full transition-colors ${
                    current === i ? 'bg-orange' : 'bg-white hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
          )}
        </Carousel>
      </div>
    </div>
  )
}
