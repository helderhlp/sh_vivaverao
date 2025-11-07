'use client'

import Image from 'next/image'
import { useParams } from 'next/navigation'

export default function Home() {
  const params = useParams()
  console.log({ params })

  const actuallyType = typePage[params.type as keyof typeof typePage]

  if (!actuallyType) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-gray-900">
        <div className="rounded-lg bg-white/90 px-8 py-6 shadow-lg">
          <h2 className="mb-2 text-2xl font-bold text-red-600">
            Produto não encontrado
          </h2>
          <p className="text-gray-700">
            O tipo de produto selecionado não existe ou não foi encontrado.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-blue z-10 flex flex-col items-center overflow-hidden">
      <main className="z-0 flex w-full flex-col items-center">
        <div className="relative z-10 w-screen">
          <div className="flex w-screen items-center justify-center">
            <div className="relative h-fit w-screen">
              <div className="pointer-events-auto h-fit w-screen cursor-grab touch-pan-y select-none active:cursor-grabbing">
                <div className="relative mx-auto flex w-screen max-w-none justify-center">
                  <Image
                    src={actuallyType.image}
                    alt="Banner"
                    priority
                    draggable={false}
                    width={1920}
                    height={1080}
                    sizes="100vw"
                    className="object-contain duration-300 select-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TEXTO */}
        <div
          className="relative z-20 flex min-h-[100vh] w-full justify-center py-12 md:py-32"
          style={{
            backgroundImage: `url(${actuallyType.bg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom',
          }}
        >
          <div className="relative z-10 flex w-full max-w-5xl flex-col gap-4 text-white max-xl:px-4">
            <span className="font-family-printf mb-4 text-3xl md:text-4xl">
              {actuallyType.title}
            </span>

            {actuallyType.questions.map((q) => (
              <div
                className="flex flex-col gap-1 text-justify md:text-lg"
                key={q.answer}
              >
                <span className="font-semibold">{q.question}</span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: q.answer.replace(/\n/g, '<br/>'),
                  }}
                ></span>
              </div>
            ))}
          </div>

          <Image
            src="/assets/papel_recorte.png"
            alt="Papel Recorte"
            width={1920}
            height={1080}
            className="absolute -top-5 min-h-[40px] min-w-[105vw] object-cover object-center lg:-top-6 2xl:-top-7"
          />
        </div>
      </main>
    </div>
  )
}

const typePage = {
  'sem-pele': {
    image: '/assets/banners/banner_home_amendoim_02.png',
    title: 'GRELHADITOS / AMINDUS AGORA É MENDORATO',
    bg: '/assets/background/BG_perguntas_sem-pele.png',
    questions: [
      {
        question:
          '1. A receita do Amendoim Sem Pele Torrado da Santa Helena foi alterada?',
        answer:
          'Não. A receita continua exatamente a mesma. O que muda é a marca e a embalagem, que passam a ser da Mendorato — uma marca com mais de 35 anos de tradição e que já dá nome ao famoso amendoim japonês da Santa Helena.',
      },
      {
        question:
          '2. Notei que existe um texto Nova Fórmula no rodapé da embalagem, o que mudou?',
        answer:
          'A receita do produto continua a mesma, mas alguns alérgenos presentes na fabricação foram revisados. Por isso, é importante sinalizar essa atualização para você, consumidor. Algumas contaminações cruzadas com castanhas, que existiam na linha de produção, deixaram de existir com a retirada de linha de alguns itens e por isso não há mais a necessidade de informar nos rótulos. De acordo com a legislação, sempre que se altera a declaração de alergênicos nos rótulos, é preciso informar o consumidor com a expressão “nova fórmula”.',
      },
      {
        question: '3. Por que o produto está mudando de marca?',
        answer:
          'Essa mudança faz parte de uma nova fase da marca. Estamos atualizando a identidade dos produtos Grelhaditos/Amindus para tornar o portfólio mais claro e facilitar a nossa comunicação com você. Mas pode ficar tranquilo: ele continua sendo o mesmo “Verdinho” da Santa Helena que você já conhece e gosta.',
      },
      {
        question: '4. A qualidade continua a mesma?',
        answer:
          'Sim. O produto segue com a mesma qualidade, sabor e rigor no processo de produção que você já conhece e confia.',
      },
      {
        question: '5. Vai mudar o fabricante?',
        answer:
          'Não. O produto continua sendo fabricado pela Santa Helena, com o mesmo processo e equipe responsável.',
      },
      {
        question: '6. O nome antigo vai sair totalmente do mercado?',
        answer:
          'Sim, ao longo dos próximos meses, o produto com a marca antiga (Grelhaditos / Amindus) deixará de ser distribuído. A transição será gradual, mas a versão com a nova marca (Mendorato) irá substituí-lo.',
      },
      {
        question: '7. Como identificar o novo produto no ponto de venda?',
        answer:
          'Fique atento à nova identidade visual e ao nome da nova marca. Haverá também um aviso na embalagem indicando: “Grelhaditos agora é Mendorato” para facilitar o reconhecimento.',
      },
      {
        question: '8. Quando posso encontrar o produto com a nova marca?',
        answer:
          'O início da produção com a nova embalagem está previsto para a partir de agosto de 2025. No entanto, a disponibilidade de cada item (gramatura) nas gôndolas dos supermercados ocorrerá de forma gradual, conforme o giro dos estoques. Durante um curto período, poderá haver a convivência das duas marcas (Amindus e Mendorato) para o mesmo item.',
      },
      {
        question: '9. Onde posso encontrar o produto com a nova marca?',
        answer:
          'Ele continuará disponível nos mesmos pontos de venda da versão anterior — tanto em lojas físicas, como mercados de bairro, conveniências, atacadistas, supermercados e hipermercados, quanto em canais online.',
      },
      {
        question: '10. O preço vai mudar?',
        answer: 'Não haverá alteração no preço por conta da mudança de marca.',
      },
      {
        question:
          '11. Os produtos disponíveis na versão Amendoim Sem Pele Torrado da Santa Helena continuam os mesmos?',
        answer:
          'Com sal: 24g, 60g, 90g, 150g, 400g, 1kg e até 5kg.\nSem sal: 90g e 5kg.',
      },
      {
        question:
          '12. Tenho dúvidas ou quero dar um feedback. Como entro em contato?',
        answer:
          'Você pode entrar em contato com o nosso SAC: https://www.santahelena.com/sac ou 0800 727 3008 ou redes sociais @mendoratooficial. Estamos à disposição para esclarecer qualquer dúvida.',
      },
    ],
  },
  ovinho: {
    image: '/assets/banners/banner_home_ovinhos_semtxt.png',
    title: 'LANÇAMENTO DE MENDORATO OVINHOS',
    bg: '/assets/background/BG_perguntas_ovinhos.png',
    questions: [
      {
        question: '1. O que são os Ovinhos de Amendoim Mendorato?',
        answer:
          'São uma nova versão do amendoim Mendorato, em formato de ovinhos crocantes, com casquinha de polvilho, que unem sabor marcante e praticidade em um snack irresistível.',
      },
      {
        question: '2. Por que a Mendorato lançou essa novidade?',
        answer:
          'Os ovinhos de amendoim são hoje o 4º tipo mais consumido no Brasil. Agora, eles chegam para ampliar o portfólio da marca, oferecendo uma nova forma de saborear o amendoim — mais um clássico pensado para todas as ocasiões de consumo.',
      },
      {
        question: '3. Quais são os ingredientes que compõem Mendorato Ovinhos?',
        answer:
          'Ingredientes: Amendoim, fécula de mandioca, polvilho azedo, óleo vegetal e sal. Alérgenos: Contém amendoim. Pode conter traços de glúten, leite e soja, em razão do compartilhamento de linhas de produção com outros produtos que utilizam esses ingredientes.',
      },
      {
        question: '4. Mendorato Ovinhos Contém Glúten?',
        answer:
          'Os principais ingredientes de Mendorato Ovinhos não contém glúten. No entanto, devido ao processo produtivo e ao possível contato com outros ingredientes, o produto pode conter traços. Por esse motivo, é classificado como: contém glúten.',
      },
      {
        question: '5. Em quais versões estão disponíveis?',
        answer:
          'Disponível em embalagens de 120g e 350g —ideais tanto para consumo individual quanto para compartilhar.',
      },
      {
        question: '6. A embalagem parece cheia de ar, está faltando produto?',
        answer:
          'As embalagens de Ovinhos não contêm ar comum, mas sim nitrogênio — um gás inerte utilizado para proteger o produto. Esse processo ajuda a preservar a crocância por mais tempo e evita que os ovinhos quebrem durante o transporte, funcionando como um colchão protetor.',
      },
      {
        question:
          '7. Por que as embalagens de Mendorato Ovinhos parecem maiores que as de Mendorato Amendoim Japonês, mas têm menos produto dentro?',
        answer:
          'As embalagens podem variar de formato devido à produção em diferentes unidades fabris. No entanto, garantimos que a qualidade e o sabor seguem o padrão Santa Helena Mendorato que você já conhece e confia.',
      },
      {
        question: '8. Onde encontrar Mendorato Ovinhos?',
        answer:
          'O produto será gradualmente disponibilizado nas principais redes de supermercados, atacadistas, empórios e canais de venda online parceiros da Santa Helena. A disponibilidade pode variar de acordo com a região e a logística de distribuição.',
      },
      {
        question: '9. Qual é o preço sugerido dos produtos Mendorato Ovinhos?',
        answer: 'Embalagens de 120g = R$ 7,99\nEmbalagens de 350g = R$ 16,49',
      },
      {
        question:
          '10. Os Ovinhos de Amendoim mantêm a mesma qualidade do amendoim japonês Mendorato?',
        answer:
          'Com certeza. Os ovinhos seguem o mesmo padrão de qualidade da Santa Helena, com ingredientes selecionados e o  cuidado que  tornou o  Mendorato um clássico entre os  snacks de amendoim no Brasil. Agora a família Mendorato conta com 03 tipos de amendoins: o japonês, o sem pele torrado e os ovinhos - perfeitos para qualquer ocasião. Diferentemente do amendoim japonês, que é assado, os Ovinhos passam por um processo de fritura, oferecendo ao consumidor uma nova experiência em sabor e crocância.',
      },
    ],
  },
}
