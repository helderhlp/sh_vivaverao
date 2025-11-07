'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Instagram, Facebook } from 'lucide-react'

import StarWhite from '../../../public/assets/icons/star-white.png'
import TableWhite from '../../../public/assets/icons/table-white.png'
import UmbrellaWhite from '../../../public/assets/icons/umbrella-white.png'
import KingWhite from '../../../public/assets/icons/king-white.png'
import BrSh from '../../../public/assets/icons/br_sh.png'

import LogoTema from '../../../public/assets/logotema.png'

export function SocialNetwork() {
  return (
    <div
      className="bg-brown-light relative z-20 flex w-full flex-col items-center overflow-hidden px-4 py-8 sm:py-16 md:py-24 md:pt-12"
      id="redes-sociais"
    >
      {/* Top Left - BR/SH and Icons */}
      <div className="z-10 flex flex-col gap-4 self-start px-4 md:px-8">
        <div className="flex items-center gap-8">
          <Image
            src={BrSh}
            alt="BR SH"
            className="h-6 w-6 object-contain md:w-8"
          />
          <Image
            src={StarWhite}
            alt=""
            className="h-6 w-6 object-contain md:h-8 md:w-8"
          />
          <Image
            src={TableWhite}
            alt=""
            className="h-6 w-6 object-contain md:h-8 md:w-8"
          />
          <Image
            src={UmbrellaWhite}
            alt=""
            className="h-6 w-6 object-contain md:h-8 md:w-8"
          />
          <Image
            src={KingWhite}
            alt=""
            className="h-6 w-6 object-contain md:h-8 md:w-8"
          />
        </div>
      </div>

      <div className="relative z-10 mt-12 flex w-full max-w-6xl flex-col items-center gap-4 sm:gap-6">
        {/* Main Title */}
        <div className="flex flex-col items-center gap-2 text-center">
          <h2 className="text-orange !font-family-highgate text-3xl font-black sm:text-4xl md:text-5xl lg:text-6xl">
            COMPARTILHE O <br /> SEU VERÃO COM A GENTE!
          </h2>
        </div>

        {/* Subtitle */}
        <p className="text-center text-lg text-white sm:max-w-2xl md:text-lg">
          Siga nossas marcas, acompanhe novidades e mostre como você está
          vivendo o verão junto com a gente!
        </p>

        {/* Social Media Section */}
        <div className="grid w-full max-w-md grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center justify-center gap-2">
              <Link
                href="https://www.tiktok.com/@mendorato"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange flex h-10 w-10 items-center justify-center rounded-full transition-all hover:scale-110 md:h-10 md:w-10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  strokeWidth={1.7}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16.8217 5.1344C16.0886 4.29394 15.6479 3.19805 15.6479 2H14.7293M16.8217 5.1344C17.4898 5.90063 18.3944 6.45788 19.4245 6.67608C19.7446 6.74574 20.0786 6.78293 20.4266 6.78293V10.2191C18.645 10.2191 16.9932 9.64801 15.6477 8.68211V15.6707C15.6477 19.1627 12.8082 22 9.32386 22C7.50043 22 5.85334 21.2198 4.69806 19.98C3.64486 18.847 2.99994 17.3331 2.99994 15.6707C2.99994 12.2298 5.75592 9.42509 9.17073 9.35079M16.8217 5.1344C16.8039 5.12276 16.7861 5.11101 16.7684 5.09914M6.9855 17.3517C6.64217 16.8781 6.43802 16.2977 6.43802 15.6661C6.43802 14.0734 7.73249 12.7778 9.32394 12.7778C9.62087 12.7778 9.9085 12.8288 10.1776 12.9124V9.40192C9.89921 9.36473 9.61622 9.34149 9.32394 9.34149C9.27287 9.34149 8.86177 9.36884 8.81073 9.36884M14.7244 2H12.2097L12.2051 15.7775C12.1494 17.3192 10.8781 18.5591 9.32386 18.5591C8.35878 18.5591 7.50971 18.0808 6.98079 17.3564"
                    strokeLinejoin="round"
                    className="stroke-brown-light"
                  />
                </svg>
              </Link>

              <Link
                href="https://www.facebook.com/mendorato"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange flex h-10 w-10 items-center justify-center rounded-full transition-all hover:scale-110 md:h-10 md:w-10"
              >
                <Facebook className="text-brown-light h-7 w-7" />
              </Link>

              <Link
                href="https://www.instagram.com/mendorato"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange flex h-10 w-10 items-center justify-center rounded-full transition-all hover:scale-110"
              >
                <Instagram className="text-brown-light h-7 w-7" />
              </Link>
            </div>
            <p className="!font-family-highgate text-2xl font-black text-white">
              MENDORATO
            </p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center justify-center gap-2">
              <Link
                href="https://www.tiktok.com/@mendorato"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange flex h-10 w-10 items-center justify-center rounded-full transition-all hover:scale-110 md:h-10 md:w-10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  strokeWidth={1.7}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16.8217 5.1344C16.0886 4.29394 15.6479 3.19805 15.6479 2H14.7293M16.8217 5.1344C17.4898 5.90063 18.3944 6.45788 19.4245 6.67608C19.7446 6.74574 20.0786 6.78293 20.4266 6.78293V10.2191C18.645 10.2191 16.9932 9.64801 15.6477 8.68211V15.6707C15.6477 19.1627 12.8082 22 9.32386 22C7.50043 22 5.85334 21.2198 4.69806 19.98C3.64486 18.847 2.99994 17.3331 2.99994 15.6707C2.99994 12.2298 5.75592 9.42509 9.17073 9.35079M16.8217 5.1344C16.8039 5.12276 16.7861 5.11101 16.7684 5.09914M6.9855 17.3517C6.64217 16.8781 6.43802 16.2977 6.43802 15.6661C6.43802 14.0734 7.73249 12.7778 9.32394 12.7778C9.62087 12.7778 9.9085 12.8288 10.1776 12.9124V9.40192C9.89921 9.36473 9.61622 9.34149 9.32394 9.34149C9.27287 9.34149 8.86177 9.36884 8.81073 9.36884M14.7244 2H12.2097L12.2051 15.7775C12.1494 17.3192 10.8781 18.5591 9.32386 18.5591C8.35878 18.5591 7.50971 18.0808 6.98079 17.3564"
                    strokeLinejoin="round"
                    className="stroke-brown-light"
                  />
                </svg>
              </Link>

              <Link
                href="https://www.facebook.com/mendorato"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange flex h-10 w-10 items-center justify-center rounded-full transition-all hover:scale-110 md:h-10 md:w-10"
              >
                <Facebook className="text-brown-light h-7 w-7" />
              </Link>

              <Link
                href="https://www.instagram.com/mendorato"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange flex h-10 w-10 items-center justify-center rounded-full transition-all hover:scale-110"
              >
                <Instagram className="text-brown-light h-7 w-7" />
              </Link>
            </div>
            <p className="!font-family-highgate text-2xl font-black text-white">
              CROKÍSSIMO
            </p>
          </div>
        </div>

        {/* Bottom Logo */}
        <div className="mt-8 flex flex-col items-center gap-2">
          <Image
            src={LogoTema}
            alt="Logo Tema"
            width={1297}
            height={1080}
            className="h-auto w-full max-w-[220px] object-contain sm:max-w-[300px]"
          />
        </div>
      </div>

      <Image
        src="/assets/pattern/pattern-1.png"
        alt="Pattern"
        width={600}
        height={600}
        className="absolute top-[70%] -left-0 w-[180px] sm:top-[70%] sm:w-[300px]"
      />

      <Image
        src="/assets/pattern/pattern-1.png"
        alt="Pattern"
        width={600}
        height={600}
        className="absolute top-[40%] -right-0 w-[180px] max-sm:hidden sm:w-[300px]"
      />
    </div>
  )
}
