'use client'

import Link from 'next/link'
import { Instagram, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <div className="relative flex w-full flex-col items-center px-4 py-12 md:py-16">
      <div className="flex w-full max-w-4xl flex-col items-center gap-8">
        {/* Social Media Icons */}
        <div className="flex items-center justify-center gap-6">
          {/* LinkedIn */}
          <Link
            href="https://br.linkedin.com/company/santahelenaalimentos"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brown-light flex h-14 w-14 items-center justify-center rounded-full transition-all hover:scale-110"
          >
            <Linkedin className="h-7 w-7 text-white" />
          </Link>

          {/* Instagram */}
          <Link
            href="https://www.instagram.com/santahelenaalimentos/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brown-light flex h-14 w-14 items-center justify-center rounded-full transition-all hover:scale-110"
          >
            <Instagram className="h-7 w-7 text-white" />
          </Link>
        </div>

        {/* Text Content */}
        <div className="flex flex-col items-center gap-1 text-center">
          <p className="text-brown-light text-base md:text-lg">
            Compartilhe seus momentos marcando
          </p>
          <p className="text-brown-light text-base font-semibold md:text-lg">
            @santahelenaalimentos
          </p>
        </div>
      </div>
    </div>
  )
}
