"use client";
import React, { useEffect } from "react";
import Image from "next/image";

// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

const SwiperDemo = () => {
  return (
    <>
      <style>{`
        .mySwiper {
          width: 100%;
          height: 100%;
        }
        
        .swiper-slide {
          max-width: 90px;
          text-align: center;
          font-size: 18px;
          background: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .swiper-slide img {
          display:;
          width: 50%;
          height: 100%;
          object-fit: cover;
        }
        
        
      `}</style>
<div className="hidden lg:block">
      <swiper-container
        className="mySwiper"
        navigation={true}
        pagination={true}
        pagination-clickable={true}
        space-between={1}
        slides-per-view={3}

        >
          <swiper-slide className="">
            <div className="w-90 h-90 m-1 bg-white rounded-lg">
              <p className="rounded-lg bg-white py-2 px-4 max-w-xs ">
                <span className="font-bold">Teresa M.</span>
                <br />
                Viajei em Dezembro de 2022 para Cuba. Toda a viagem foi
                organizada por esta agência. Que recomendo vivamente excelente
                organização, e um fantastico apoio quando surgiram problemas ,
                ao longo da estadia em Cuba. Obrigado pela excelente viagem, até
                a próxima 🍀😃
              </p>
              <Image
                className="p-4"
                src="/cuba.jpg"
                alt="Burger"
                height={100}
                width={300}
              />{" "}
            </div>
          </swiper-slide>
          <swiper-slide>
            {" "}
            <div className="w-90 h-80 m-1">
              <p className="rounded-lg bg-white py-2 px-4 max-w-xs ">
                <span className="font-bold">Miguel T.</span>
                <br />
                Para começar gostei muito do local visitado. comecei por dizer à
                Márcia o que pretendia, os valores que podia gastar, os dias e
                horas que podia viajar, onde queria ficar. tudo foi organizado
                ao pormenor por ela. hotel, transfers, refeições, vouchers de
                refeição, etc. manteve um acompanhamento da nossa viagem,
                disponibilizando-se diversas vezes para responder a questões que
                surgiam durante a viagem. Recomendo a Márcia para vos tratar de
                tudo, mostrando as melhores opções. obrigado.
              </p>
            </div>
          </swiper-slide>
          <swiper-slide>
          <div className="w-90 h-90 m-1 bg-white rounded-lg">
              <p className="rounded-lg bg-white py-2 px-4 max-w-xs ">
                <span className="font-bold">Inês S.C.</span>
                <br />
                Excelente serviço. Ajudaram a escolher o destino e apresentaram
                opções excelentes e alinhadas com o que queríamos. Não tivemos
                que nos preocupar com nada, apenas com aproveitar a nossa
                viagem! 5⭐️
              </p>
              <Image
                className="p-4"
                src="/madeira.jpg"
                alt="madeira"
                height={100}
                width={300}
              />{" "}
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className="w-70 h-80 m-1">
              <p className="rounded-lg bg-white py-2 px-4 max-w-xs ">
                <span className="font-bold">Eduardo V.</span>
                <br />
                Atendimento personalizado, profissional e muito simpático. Foi
                muito atenciosa e flexível quanto às nossas necessidades. Nunca
                tentou impor a sua vontade ou uma determinada viagem ou
                itinerário, mas antes, adequou-se às nossas exigências e
                conseguiu superar as nossas expectativas, sugerindo sempre
                hipóteses muito interessantes e com um fantástico preço. O
                difícil foi escolher... 😉 Por mim, altamente recomendada...
              </p>
            </div>
          </swiper-slide>
          <swiper-slide>
            {" "}
            <div className="w-70 h-90 m-1 bg-white rounded-lg">
              <p className="rounded-lg bg-white py-2 px-4 max-w-xs ">
                <span className="font-bold">Andreína C.</span>
                <br />
                Serviço de qualidade! Já tive o privilégio de fazer 2 viagens e
                nada de negativo tenho a apontar. Desde o orçamento dentro do
                que pretendia à disponibilidade para ajudar em caso de dúvidas.
                Pela qualidade e plena confiança já tenho mais viagens
                reservadas para este ano. Super recomendo!
              </p>
            </div>
          </swiper-slide>
          <swiper-slide>
            {" "}
            <div className="w-70 h-90 m-1 bg-white rounded-lg">
              <p className="rounded-lg bg-white py-2 px-4 max-w-xs ">
                <span className="font-bold">Maria J.</span>
                <br />
                Numa indecisão tão grande de qual o destino que deveria escolher
                este ano para embarcar numa aventura, aí veio a desbloqueadora
                de viagens e ajudou nos a escolher este sítio fantástico! Foi
                uma viagem de esquecer o mundo que pertencia e transportar me
                para aquele mundo que literalmente parece á parte! Obrigada por
                toda a ajuda que me deste em todos os pormenores que eu penso ❤️
              </p>
            </div>
          </swiper-slide>
      </swiper-container>
</div>
<div className="lg:hidden">
      <swiper-container
        className=""
        pagination={true}
        pagination-clickable={true}
        space-between={1}
        slides-per-view={1}
      >
        <swiper-slide className="">
          <div className="flex justify-center items-center h-90 w-full">
            <div className="w-90 h-90 m-1 bg-white rounded-lg">
              <p className="rounded-lg bg-white py-2 px-4 max-w-xs ">
                <span className="font-bold">Teresa M.</span>
                <br />
                Viajei em Dezembro de 2022 para Cuba. Toda a viagem foi
                organizada por esta agência. Que recomendo vivamente excelente
                organização, e um fantastico apoio quando surgiram problemas ,
                ao longo da estadia em Cuba. Obrigado pela excelente viagem, até
                a próxima 🍀😃
              </p>
              <Image
                className="p-4"
                src="/cuba.jpg"
                alt="cuba"
                height={100}
                width={300}
              />{" "}
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          {" "}
          <div className="flex justify-center items-center h-90 w-full">
            <div className="w-90 h-80 m-1">
              <p className="rounded-lg bg-white py-2 px-4 max-w-xs ">
                <span className="font-bold">Miguel T.</span>
                <br />
                Para começar gostei muito do local visitado. comecei por dizer à
                Márcia o que pretendia, os valores que podia gastar, os dias e
                horas que podia viajar, onde queria ficar. tudo foi organizado
                ao pormenor por ela. hotel, transfers, refeições, vouchers de
                refeição, etc. manteve um acompanhamento da nossa viagem,
                disponibilizando-se diversas vezes para responder a questões que
                surgiam durante a viagem. Recomendo a Márcia para vos tratar de
                tudo, mostrando as melhores opções. obrigado.
              </p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
        <div className="w-90 h-90 m-1 bg-white rounded-lg">
              <p className="rounded-lg bg-white py-2 px-4 max-w-xs ">
                <span className="font-bold">Inês S.C.</span>
                <br />
                Excelente serviço. Ajudaram a escolher o destino e apresentaram
                opções excelentes e alinhadas com o que queríamos. Não tivemos
                que nos preocupar com nada, apenas com aproveitar a nossa
                viagem! 5⭐️
              </p>
              <Image
                className="p-4"
                src="/madeira.jpg"
                alt="madeira"
                height={100}
                width={300}
              />{" "}
            </div>
        </swiper-slide>
        <swiper-slide>
          <div className="flex justify-center items-center h-90 w-full">
            <div className="w-70 h-80 m-1">
              <p className="rounded-lg bg-white py-2 px-4 max-w-xs ">
                <span className="font-bold">Eduardo V.</span>
                <br />
                Atendimento personalizado, profissional e muito simpático. Foi
                muito atenciosa e flexível quanto às nossas necessidades. Nunca
                tentou impor a sua vontade ou uma determinada viagem ou
                itinerário, mas antes, adequou-se às nossas exigências e
                conseguiu superar as nossas expectativas, sugerindo sempre
                hipóteses muito interessantes e com um fantástico preço. O
                difícil foi escolher... 😉 Por mim, altamente recomendada...
              </p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          {" "}
          <div className="flex justify-center items-center h-90 w-full">
            <div className="w-70 h-90 m-1 bg-white rounded-lg">
              <p className="rounded-lg bg-white py-2 px-4 max-w-xs ">
                <span className="font-bold">Andreína C.</span>
                <br />
                Serviço de qualidade! Já tive o privilégio de fazer 2 viagens e
                nada de negativo tenho a apontar. Desde o orçamento dentro do
                que pretendia à disponibilidade para ajudar em caso de dúvidas.
                Pela qualidade e plena confiança já tenho mais viagens
                reservadas para este ano. Super recomendo!
              </p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          {" "}
          <div className="flex justify-center items-center h-90 w-full">
            <div className="w-70 h-90 m-1 bg-white rounded-lg">
              <p className="rounded-lg bg-white py-2 px-4 max-w-xs ">
                <span className="font-bold">Maria J.</span>
                <br />
                Numa indecisão tão grande de qual o destino que deveria escolher
                este ano para embarcar numa aventura, aí veio a desbloqueadora
                de viagens e ajudou nos a escolher este sítio fantástico! Foi
                uma viagem de esquecer o mundo que pertencia e transportar me
                para aquele mundo que literalmente parece á parte! Obrigada por
                toda a ajuda que me deste em todos os pormenores que eu penso ❤️
              </p>
            </div>
          </div>
        </swiper-slide>
      </swiper-container>
      </div>
    </>
  );
};

export default SwiperDemo;
