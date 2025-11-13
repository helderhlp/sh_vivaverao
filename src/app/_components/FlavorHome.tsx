"use client";

import { useState } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import Vivaverao from "../../../public/assets/vira-verao-01.png";

import SunWhite from "../../../public/assets/icons/sun-white.png";
import FlagWhite from "../../../public/assets/icons/flag-white.png";
import KingWhite from "../../../public/assets/icons/king-white.png";
import StarWhite from "../../../public/assets/icons/star-white.png";

import Image01_01 from "../../../public/assets/cards/01_img 01.png";
import Image01_02 from "../../../public/assets/cards/01_img 02.png";
import Image02_01 from "../../../public/assets/cards/02_img 01.png";
import Image02_02 from "../../../public/assets/cards/02_img 02.png";
import Image03_01 from "../../../public/assets/cards/03_img 01.png";
import Image03_02 from "../../../public/assets/cards/03_img 02.png";
import Image04_01 from "../../../public/assets/cards/04_img 01.png";
import Image04_02 from "../../../public/assets/cards/04_img 02.png";
import Image05_01 from "../../../public/assets/cards/05_img 01.png";
import Image05_02 from "../../../public/assets/cards/05_img 02.png";
import Image06_01 from "../../../public/assets/cards/06_img 01.png";
import Image06_02 from "../../../public/assets/cards/06_img 02.png";
import Image07_01 from "../../../public/assets/cards/07_img 01.png";
import Image07_02 from "../../../public/assets/cards/07_img 02.png";
import Image08_01 from "../../../public/assets/cards/08_img 01.png";
import Image08_02 from "../../../public/assets/cards/08_img 02.png";

export function FlavorHome() {
  return (
    <div id="como-curtir" className="bg-orange relative z-20 flex w-full flex-col items-center px-4 py-16 md:py-24">
      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-2">
          <Image src={Vivaverao} alt="Vivaverao" width={600} height={600} />
        </div>

        {/* Text Content */}
        <div className="flex w-full flex-col gap-6 text-left">
          <p className="text-center text-lg sm:text-xl md:text-2xl leading-relaxed text-white">
            Sejamos sinceros: o brasileiro sabe viver o verão como ninguém!
            Nosso país é sinônimo de praia, churrasco, música boa, caipirinha e
            petiscos que combinam com cada momento. Somos criativos,
            transformamos tudo em festa e, no verão, tudo é mais intenso.
          </p>

          <p className="text-center text-lg sm:text-xl md:text-2xl leading-relaxed text-white">
            Quando o assunto é curtir os dias quentes, o amendoim é presença
            garantida: tem amendoim japonês, amendoim torrado, doce de
            amendoim... E Santa Helena está presente em cada um desses momentos,
            com Mendorato, Crokíssimo, Troféu e muito mais. Seja na praia ou na
            piscina, com amigos ou família. Onde tem verão, tem petisco Santa
            Helena e muita curtição.
          </p>
        </div>

        {/* Icons Section */}
        <div className="sm:mt-4 flex items-center justify-center gap-8 md:gap-12">
          <Image
            src={SunWhite}
            alt=""
            className="h-10 w-10 object-contain md:h-10 md:w-16"
          />
          <Image
            src={FlagWhite}
            alt=""
            className="h-10 w-10 object-contain md:h-10 md:w-16"
          />
          <Image
            src={KingWhite}
            alt=""
            className="h-10 w-10 object-contain md:h-10 md:w-16"
          />
          <Image
            src={StarWhite}
            alt=""
            className="h-10 w-10 object-contain md:h-10 md:w-16"
          />
        </div>
      </div>

      {/* Cards Section */}
      <Cards />

      <Image
        src="/assets/pattern/pattern-1.png"
        alt="Pattern"
        width={600}
        height={600}
        className="absolute top-[70%] left-0 w-[320px]"
      />

      <Image
        src="/assets/pattern/pattern-1.png"
        alt="Pattern"
        width={600}
        height={600}
        className="absolute top-[45%] right-0 w-[320px]"
      />
    </div>
  );
}

const Cards = () => {
  const cardsData = [
    {
      normal: Image01_01,
      hover: Image01_02,
    },
    {
      normal: Image02_01,
      hover: Image02_02,
    },
    {
      normal: Image03_01,
      hover: Image03_02,
    },
    {
      normal: Image04_01,
      hover: Image04_02,
    },
    {
      normal: Image05_01,
      hover: Image05_02,
    },
    {
      normal: Image06_01,
      hover: Image06_02,
    },
    {
      normal: Image07_01,
      hover: Image07_02,
    },
    {
      normal: Image08_01,
      hover: Image08_02,
    },
  ];

  return (
    <div className="relative z-10 mt-8 sm:mt-16 flex w-full max-w-7xl flex-col items-center gap-6 px-4">
      {/* Chevron pattern background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,212,0,0.3) 10px, rgba(255,212,0,0.3) 20px)",
        }}
      ></div>

      <span className="relative z-10 mb-4 text-center text-lg font-medium text-gray-400 italic opacity-50 md:text-xl">
        Passe o mouse por cima e confira
      </span>

      <div className="relative z-10 grid w-full grid-cols-2 gap-4 md:grid-cols-4 lg:gap-6">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            normal={card.normal}
            hover={card.hover}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

interface CardProps {
  normal: StaticImageData;
  hover: StaticImageData;
  index: number;
}

const Card = ({ normal, hover, index }: CardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full"
      style={{ perspective: "1000px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Container with 3D transform */}
      <div
        className="relative h-full w-full"
        style={{
          transformStyle: "preserve-3d",
          transform: isHovered ? "rotateY(180deg)" : "rotateY(0deg)",
          transition: "transform 0.6s ease-in-out",
        }}
      >
        {/* Front of Card - Normal Image */}
        <div
          className="flex flex-col overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <div className="relative h-fit sm:min-h-[300px] w-full overflow-hidden bg-white">
            <Image
              src={normal}
              alt={`Card ${index + 1}`}
              height={300}
              width={300}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Back of Card - Hover Image */}
        <div
          className="absolute inset-0 flex flex-col overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="relative h-fit sm:min-h-[300px] w-full overflow-hidden bg-white">
            <Image
              src={hover}
              alt={`Card ${index + 1 + 1}`}
              height={300}
              width={300}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
