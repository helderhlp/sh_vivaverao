import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export function ClassicProductsHome() {
  return (
    <div
      className="relative z-20 flex w-full flex-col items-center"
      id="curiosidades"
      style={{
        backgroundImage: 'url(/assets/background/BGS_02.png)',
        backgroundSize: 'contain',
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative z-20 flex w-full max-w-7xl flex-col items-center py-20 max-xl:px-4 md:py-32">
        <div className="flex flex-col gap-8">
          <span className="font-family-printf text-orange text-center text-2xl md:text-3xl lg:text-4xl">
            DE OLHO NO CLÁSSICO. <br /> CONHEÇA ALGUMAS CURIOSIDADES <br />{' '}
            SOBRE MENDORATO!
          </span>
        </div>

        <div className="mt-24 flex max-md:flex-col max-md:gap-24 lg:gap-24">
          <div className="relative flex flex-col">
            <Image
              src="/assets/products/MOCKUP-MENDORATO-SEM-PELE-400g.png"
              alt="MOCKUP-MENDORATO-SEM-PELE-400g.png"
              width={340}
              height={800}
              className="z-10"
            />

            <Image
              src="/assets/coroa/Coroa_angulo.png"
              alt="Papel Recorte"
              width={240}
              height={40}
              // coloque o left com 50% do width da coroa, ela precisa ficar na esquerda porem somente metade dela aparecendo
              className="absolute -top-20 -right-7 z-0 min-w-[100px] object-cover"
            />

            <span className="font-family-printf text-orange text-center text-2xl lg:text-3xl">
              MENDORATO SEM PELE
            </span>

            <Link href="/action/sem-pele">
              <Button
                className="text-brown font-family-printf mt-4 w-fit cursor-pointer self-center text-xl font-bold lg:text-2xl"
                size={'lg'}
              >
                CLIQUE AQUI E SAIBA MAIS
              </Button>
            </Link>
          </div>

          <div className="relative flex flex-col">
            <Image
              src="/assets/products/MOCKUP-MENDORATO-OVINHOS-350g.png"
              alt="MOCKUP-MENDORATO-OVINHOS-350g.png"
              width={340}
              height={800}
              className="z-10"
            />

            <Image
              src="/assets/coroa/Coroa_angulo.png"
              alt="Papel Recorte"
              width={240}
              height={40}
              // coloque o left com 50% do width da coroa, ela precisa ficar na esquerda porem somente metade dela aparecendo
              className="absolute -top-20 -right-7 z-0 min-w-[100px] object-cover"
            />

            <span className="font-family-printf text-orange text-center text-2xl lg:text-3xl">
              MENDORATO OVINHOS
            </span>

            <Link href="/action/ovinho">
              <Button
                className="text-brown font-family-printf mt-4 w-fit cursor-pointer self-center text-xl font-bold lg:text-2xl"
                size={'lg'}
              >
                CLIQUE AQUI E SAIBA MAIS
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute z-10 flex h-full w-full flex-col items-center overflow-hidden py-32 max-xl:px-4">
        <Image
          src="/assets/coroa/Coroa_textura_01.png"
          alt="Papel Recorte"
          width={1100}
          height={40}
          // coloque o left com 50% do width da coroa, ela precisa ficar na esquerda porem somente metade dela aparecendo
          className="absolute -bottom-7 -left-[52%] z-0 min-w-[100px] object-cover max-md:hidden"
        />
      </div>

      <Image
        src="/assets/papel_recorte.png"
        alt="Papel Recorte"
        width={1920}
        height={1080}
        className="absolute -top-5 min-h-[40px] min-w-[105vw] object-cover object-center lg:-top-6 2xl:-top-7"
      />
    </div>
  )
}
