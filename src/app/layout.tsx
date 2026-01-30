import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import Script from 'next/script'
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
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZWQ1D47G3Y"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZWQ1D47G3Y');
          `}
        </Script>

        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1193705561987087');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1193705561987087&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {/* TikTok Pixel Code */}
        <Script id="tiktok-pixel" strategy="afterInteractive">
          {`
            !function (w, d, t) {
              w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};
              ttq.load('D3NV6RBC77UACP3VSRLG');
              ttq.page();
            }(window, document, 'ttq');
          `}
        </Script>

        {children}
      </body>
    </html>
  )
}
