import Image from 'next/image'

import LogoSH from '../../../public/assets/logo/Logo_SH.png'

export function AboutUs() {
  return (
    <div
      className="relative z-20 flex w-full flex-col items-center overflow-hidden px-4 py-16 md:py-24"
      id="sobre"
    >
      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center gap-8 text-center">
        {/* Santa Helena Logo */}
        <div className="relative sm:mb-4">
          <Image
            src={LogoSH}
            alt="Santa Helena"
            className="h-auto w-[200px] object-contain md:w-[250px]"
            priority
          />
        </div>

        {/* Main Title */}
        <h2 className="text-brown-light !font-family-highgate text-3xl font-black md:text-5xl lg:text-6xl">
          UMA HISTÓRIA <br /> BEM VIVIDA VIRA TRADIÇÃO.
        </h2>

        {/* Paragraph 1 */}
        <p className="text-brown-light max-w-3xl text-base leading-relaxed md:text-lg lg:text-xl">
          Há 82 anos, Santa Helena está presente nos melhores momentos dos
          brasileiros. Do primeiro amendoim torrado em Ribeirão Preto aos mais
          de 150 produtos que levamos para o mundo todo, nossa história é feita
          de sabor, qualidade e muita dedicação.
        </p>

        {/* Paragraph 2 */}
        <p className="text-brown-light max-w-3xl text-base leading-relaxed md:text-lg lg:text-xl">
          Somos líderes no mercado de amendoim, exportamos para América Latina,
          Europa e Ásia, mas o que mais nos orgulha é estar presente na vida dos
          brasileiros: em cada festa, em cada encontro, em cada verão.
        </p>
      </div>

      <Image
        src="/assets/pattern/pattern-2.png"
        alt="Pattern"
        width={600}
        height={600}
        className="absolute top-4 -right-0 w-[180px] sm:top-[120px] sm:w-[320px]"
      />

      <Image
        src="/assets/pattern/pattern-2.png"
        alt="Pattern"
        width={600}
        height={600}
        className="absolute top-[91%] -left-0 w-[180px] sm:w-[320px]"
      />
    </div>
  )
}
