import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="bg-white">
        <section id="home">
          {/* Seção Home e Foto */}
          <div className="heroImage mt-6"></div>
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
              <a href="https://paraaquelesqueamamviajar.traveltool.pt/">
                <div className="flex flex-col items-center">
                  <Image
                    src="/itenerario.svg"
                    alt="Icon"
                    height={64}
                    width={64}
                  />
                  <p className="text-center mt-2">ITINERÁRIO À MEDIDA</p>
                </div>
              </a>
            </div>

            {/* Div 2 */}
            <div className="p-4 bg-white rounded-md shadow-md">
              <a href="https://paraaquelesqueamamviajar.traveltool.pt/">
                <div className="flex flex-col items-center">
                  <Image
                    src="/ic_hotel.svg"
                    alt="Icon"
                    height={64}
                    width={64}
                  />
                  <p className="text-center mt-2">
                    HOTEL, TRANSPORTE e ATIVIDADES
                  </p>
                </div>
              </a>
            </div>

            {/* Div 3 */}
            <div className="p-4 bg-white rounded-md shadow-md">
              <a href="/#testemunhos">
                <div className="flex flex-col items-center mt-2">
                  <Image src="/welcome.svg" alt="Icon" height={64} width={64} />
                  <p className="text-center mt-6">CONFIANÇA</p>
                </div>
              </a>
            </div>

            {/* Div 4 */}
            <div className="p-4 bg-white rounded-md shadow-md">
              <a href="/contacts">
                <div className="flex flex-col items-center">
                  <Image
                    className=""
                    src="/ic_support.svg"
                    alt="Icon"
                    width={64}
                    height={64}
                  />
                  <p className="text-center mt-2">SUPORTE 24/7</p>
                </div>
              </a>
            </div>
          </div>
          {/*  FIM Seção Missão */}
        </section>
        {/* Seção Destinos */}

        <section className="bg-white p-8 mt-5" id="destinos">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-[#3CAFA0]">Estes e muitos mais...</h3>
            <h2 className="text-3xl font-bold mb-4 text-[#3CAFA0]">Destinos</h2>
            <Destinos />
          </div>
        </section>
        {/* fim Seção  Destinos */}

        {/* Seção Quem Somos */}
        <section className="bg-white" id="quemsomos">
          <div className="hero2Image mb-10" />

          <div className="max-w-4xl mx-auto px-8">
            <h2 className="text-3xl font-bold mb-4 text-[#3CAFA0]">
              Quem Somos
            </h2>
            <div className="md:hidden polaroid border border-gray-300 rounded-md p-4  mb-2 w-80 h-auto">
              <h3 className="text-sm font-semibold mb-1 text-center text-[#3CAFA0] ">
                MÁRCIA SANTOS E MARTA SILVA
              </h3>

              <Image
                className="p-4 owner"
                src="/owner.png"
                alt="owner"
                height={100}
                width={300}
              />
            </div>
            {/* Conteúdo da seção Quem Somos */}
            <div className="flex flex-row">
              <p className="text-justify md:w-3/5 md:flex md:justify-center md:items-center">
                Olá e bem vindos ao PARA AQUELES QUE AMAM VIAJAR!
                <br />
                <br /> O PARA AQUELES QUE AMAM VIAJAR conta com duas amigas,
                Márcia Santos e Marta Silva que além de serem duas apaixonadas
                por viajar, gostam de juntar a sua paixão à concretização de
                sonhos em realidade.
                <br />
                <br />
                Criámos PARA AQUELES QUE AMAM VIAJAR com a missão de, acima de
                tudo oferecer uma experiência exclusiva, 100% personalizada ao
                seu gosto e principalmente ao seu bolso!
              </p>
              <div className=" hidden md:w-2/5 md:flex md:justify-center md:items-center">
                <Image
                  className="owner"
                  src="/owner.png"
                  alt="Icon"
                  width={180}
                  height={180}
                />
              </div>
            </div>
            <p className="text-justify">
              Propomo-nos a ajudar com toda a nossa paixão que temos por esta
              área e queremos poder tornar todos os seus sonhos em momentos e
              únicos inesquecíveis.
              <br />
              <br /> Temos todas as ferramentas que nos permitem aceder a todas
              as principais companhias aéreas low-cost e regulares, cadeias
              hoteleiras, operadores turísticos, transferes, excursões e
              seguros, de uma forma rápida e 100% disponível.
              <br />
              <br /> Venha connosco embarcar nesta aventura!
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
            <SwiperDemo></SwiperDemo>
          </div>
        </section>
      </div>
    </>
  );
}
import React from "react";
import Destinos from "./components/destinos";
import SwiperDemo from "./components/Swiper";
