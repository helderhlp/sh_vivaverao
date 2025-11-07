import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import { Metadata } from 'next'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
})

const interMono = Inter({
  variable: '--font-inter-mono',
  subsets: ['latin'],
})

const highgate = localFont({
  src: [
    {
      path: '../../public/font/Highgate_Trial_Th.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../public/font/Highgate_Trial_Hair.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../public/font/Highgate_Trial_Lt.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/font/Highgate_Trial_Rg.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/font/Highgate_Trial_Md.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/font/Highgate_Trial_SBd.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/font/Highgate_Trial_Bd.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/font/Highgate_Trial_XBd.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/font/Highgate_Trial_Blk.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../../public/font/Highgate_Trial_It.ttf',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-highgate',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Santa helena',
  description:
    'Mendorato - O Clássico. Experimente o sabor inconfundível do Mendorato, o biscoito amanteigado que conquista gerações. Perfeito para acompanhar seu café ou chá, o Mendorato é feito com ingredientes selecionados para garantir qualidade e sabor excepcionais. Leve para casa essa tradição e desfrute de momentos deliciosos com quem você ama.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head></head>
      <body
        className={`${inter.variable} ${interMono.variable} ${highgate.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
