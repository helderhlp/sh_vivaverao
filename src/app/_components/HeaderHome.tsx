'use client'

import { useState } from 'react'
import { scrollTo } from '@/lib/utils'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import LogoSH from '../../../public/assets/logo/Logo_SH.png'

export function HeaderHome() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavClick = (id: string) => {
    scrollTo(id)
    setIsMenuOpen(false)
  }

  return (
    <>
      <header className="bg-brown-light sticky top-0 right-0 left-0 z-50 flex max-h-[64px] w-full justify-center py-5 max-2xl:px-10">
        <div className="relative flex w-full max-w-7xl items-center justify-between">
          <div className="bg-orange relative flex h-[70px] items-center justify-center rounded-t-none rounded-b-2xl px-6 shadow-lg sm:mt-8 sm:h-[100px]">
            <Image
              src={LogoSH}
              alt="Santa Helena"
              className="h-auto w-[100px] object-contain sm:w-[140px]"
              priority
            />
          </div>

          <nav className="flex items-center gap-6 text-sm font-semibold tracking-wide text-white uppercase max-lg:hidden">
            <button
              onClick={() => scrollTo('filme')}
              className="cursor-pointer transition-opacity hover:opacity-70"
            >
              FILME
            </button>

            <button
              onClick={() => scrollTo('como-curtir')}
              className="cursor-pointer transition-opacity hover:opacity-70"
            >
              COMO CURTIR O VERÃO
            </button>

            <button
              onClick={() => scrollTo('portfolio')}
              className="cursor-pointer transition-opacity hover:opacity-70"
            >
              CONHEÇA O PORTFÓLIO
            </button>

            <button
              onClick={() => scrollTo('sobre')}
              className="cursor-pointer transition-opacity hover:opacity-70"
            >
              SOBRE
            </button>

            <button
              onClick={() => scrollTo('redes-sociais')}
              className="cursor-pointer transition-opacity hover:opacity-70"
            >
              REDES SOCIAIS
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="p-2 text-white transition-opacity hover:opacity-70 lg:hidden"
            aria-label="Abrir menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-300 lg:hidden ${
          isMenuOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Sidebar */}
        <div
          className={`bg-brown-light absolute top-0 right-0 h-full w-[280px] shadow-2xl transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex h-full flex-col">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/20 p-6">
              <h2 className="text-lg font-bold text-white uppercase">Menu</h2>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-white transition-opacity hover:opacity-70"
                aria-label="Fechar menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-1 flex-col gap-2 p-6">
              <button
                onClick={() => handleNavClick('filme')}
                className="cursor-pointer rounded-lg px-4 py-3 text-left text-sm font-semibold tracking-wide text-white uppercase transition-colors hover:bg-white/10"
              >
                FILME
              </button>

              <button
                onClick={() => handleNavClick('como-curtir')}
                className="cursor-pointer rounded-lg px-4 py-3 text-left text-sm font-semibold tracking-wide text-white uppercase transition-colors hover:bg-white/10"
              >
                COMO CURTIR O VERÃO
              </button>

              <button
                onClick={() => handleNavClick('portfolio')}
                className="cursor-pointer rounded-lg px-4 py-3 text-left text-sm font-semibold tracking-wide text-white uppercase transition-colors hover:bg-white/10"
              >
                CONHEÇA O PORTFÓLIO
              </button>

              <button
                onClick={() => handleNavClick('sobre')}
                className="cursor-pointer rounded-lg px-4 py-3 text-left text-sm font-semibold tracking-wide text-white uppercase transition-colors hover:bg-white/10"
              >
                SOBRE
              </button>

              <button
                onClick={() => handleNavClick('redes-sociais')}
                className="cursor-pointer rounded-lg px-4 py-3 text-left text-sm font-semibold tracking-wide text-white uppercase transition-colors hover:bg-white/10"
              >
                REDES SOCIAIS
              </button>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}
