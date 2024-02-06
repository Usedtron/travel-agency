import Image from "next/image";
export default function Home() {
  return (
    <>
      <div>
        <section className="">
          {/* Seção Home e Foto */}
          <div className="">
            <p>Home</p>
            <div className="heroImage " />
            
          </div>
        </section>
        {/* Seção Missão */}
        <section className="bg-gray-100 p-8 mt-5" id="missao">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-[#3CAFA0]">A nossa missão</h3>
            <h2 className="text-3xl font-bold mb-4 text-[#3CAFA0]">
              Viagens planeadas à sua medida
            </h2>
            <p className="">
              Um conjunto abrangente de serviços que lhe permitem descobrir o
              mundo de forma independente, segura e confortável.
            </p>
            <br />
            {/* Conteúdo da seção Home */}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2 mx-auto max-w-4xl">
            {/* Div 1 */}
            <div className="p-4 bg-white rounded-md shadow-md">
              <div className="flex flex-col items-center">
                <Image
                  src="/itenerario.svg"
                  alt="Icon"
                  className="w-16 h-16 mb-2"
                />
                <p className="text-center">ITENERÁRIO À MEDIDA</p>
              </div>
            </div>

            {/* Div 2 */}
            <div className="p-4 bg-white rounded-md shadow-md">
              <div className="flex flex-col items-center">
                <Image
                  src="/ic_hotel.svg"
                  alt="Icon"
                  className="w-16 h-16 mb-2"
                />
                <p className="text-center">HOTEL, TRANSPORTE e ATIVIDADES</p>
              </div>
            </div>

            {/* Div 3 */}
            <div className="p-4 bg-white rounded-md shadow-md">
              <div className="flex flex-col items-center">
                <Image src="/welcome.svg" alt="Icon" className="w-16 h-16 mb-2" />
                <p className="text-center">CONFIANÇA</p>
              </div>
            </div>

            {/* Div 4 */}
            <div className="p-4 bg-white rounded-md shadow-md">
              <div className="flex flex-col items-center">
                <Image
                  src="/ic_support.svg"
                  alt="Icon"
                  className="w-16 h-16 mb-2"
                />
                <p className="text-center">SUPORTE 24/7</p>
              </div>
            </div>
          </div>
          {/*  FIM Seção Missão */}
        </section>

        {/* Seção Quem Somos */}
        <section className="bg-white" id="quemsomos">
        <div className="hero2Image mb-10" />

          <div className="max-w-4xl mx-auto px-8">
            <h2 className="text-3xl font-bold mb-4 text-[#3CAFA0]">
              Quem Somos
            </h2>
            {/* Conteúdo da seção Quem Somos */}
            <p>
              Olá e bem vindos ao Para aqueles que amam Viajar!
              <br />
              <br /> O Para aqueles que Amam Viajar conta com duas amigas,
              Márcia Santos e Marta Silva que além de serem duas apaixonadas em
              viajar, gostam de juntar a paixão à concretização de sonhos em
              realidade.
              <br />
              <br /> Criamos o Para Aqueles que Amam Viajar com a missão de
              acima de tudo oferecer uma experiência exclusiva, 100%
              personalizada ao seu gosto e principalmente ao seu bolso!
              <br />
              <br /> Propomo-nos a ajudar com toda a nossa paixão que temos por
              esta área e queremos poder tornar todos os seus sonhos, em
              momentos únicos inesquecíveis.
              <br />
              <br /> Temos todas as ferramentas que nos permitem aceder a todas
              as principais Companhias Aéreas low-cost e regulares, cadeias
              hoteleiras, operadores turísticos, transferes, excursões e
              seguros, de uma forma rápida e 100% disponível.
              <br />
              <br /> Vem connosco embarcar nesta aventura!
            </p>
          </div>
        </section>

        {/* Seção Testemunhos */}
        <section id="testemunhos" className="bg-gray-200 mt-4">
        <div className="hero3Image mb-10" />

          <div className="max-w-4xl mx-auto px-8">
            <h2 className="text-3xl font-bold mb-4 text-[#3CAFA0]">
              Testemunhos
            </h2>
            {/* Conteúdo da seção Testemunhos */}
          </div>
        </section>
      </div>
    </>
  );
}
import React from "react";
