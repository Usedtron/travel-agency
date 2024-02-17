"use client";
import React, { useEffect } from "react";
import Image from "next/image";

// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

const CarrDD = () => {
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
            <div className="polaroid shadow-xl border border-gray-300 rounded-md p-4 m-2 w-80 h-auto">
              <h3 className="text-sm font-semibold mb-1 text-center text-[#3CAFA0] ">
                ZANZIBAR
              </h3>
              <Image
                className="p-4 zanzibar"
                src="/zanzibar.jpg"
                alt=""
                height={100}
                width={300}
              />
              <p className="text-sm text-gray-600 px-4 m-2 text-justify h-40">
                Hakuna Matata, é tão fácil dizer! Apaixone-se pela ilhas das
                especiarias, relaxe nas praias de areia branca, visite a Ilha da
                Prisão para vivenciares momentos com as tartarugas gigantes!
                Zanzibar tem muito para oferecer!
              </p>
            </div>
          </swiper-slide>
          <swiper-slide>
            {" "}
            <div className="polaroid shadow-xl border border-gray-300 rounded-md p-4 m-2 w-80 h-auto ">
              <h3 className="text-sm font-semibold mb-1 text-center text-[#3CAFA0] ">
                PUNTA CANA
              </h3>
              <Image
                className="p-4 puntacana"
                src="/punta-cana.jpg"
                alt="punta-cana"
                height={100}
                width={300}
              />
              <p className="text-sm text-gray-600 px-4 m-2 text-justify h-40">
                Punta Cana é dos destinos mais procurados pelos viajantes de
                todo o mundo! É a sua vez de conhecer este paraíso! Dance ao
                ritmo da Bachata, mergulhe nas praias incríveis de areia branca,
                rume até Isla Saona e diverta-se no CocoBongo!
              </p>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className="polaroid shadow-xl border border-gray-300 rounded-md p-4 m-2 w-80 h-auto">
              <h3 className="text-sm font-semibold mb-1 text-center text-[#3CAFA0] ">
                CUBA
              </h3>
              <Image
                className="p-4 cuba"
                src="/cuba2.jpg"
                alt="cuba"
                height={100}
                width={300}
              />
              <p className="text-sm text-gray-600 px-4 m-2 text-justify h-40">
                Prepare-se para uma viagem até aos anos 50! Havana é uma das
                cidades mais singulares do mundo e você vais adorar conhecer!
                Desfrute da cultura Cubana, dance ao ritmo da salsa, beba um
                Mojito e faça um passeio num dos carros antigos!
              </p>
            </div>
          </swiper-slide>
          <swiper-slide className="">
            <div className="polaroid shadow-xl border border-gray-300 rounded-md p-4 m-2 w-80 h-auto">
              <h3 className="text-sm font-semibold mb-1 text-center text-[#3CAFA0] ">
                BRASIL
              </h3>

              <Image
                className="p-4 brasil"
                src="/brasil.jpg"
                alt="Burger"
                height={100}
                width={300}
              />
              <p className="text-sm text-gray-600 px-4 m-2 text-justify h-40">
                A cidade maravilhosa faz jus ao apelido! Festas, praias,
                cultura, gastronomia e clima tropical! Diverta-se no Rio de
                Janeiro ao ritmo do Samba!
              </p>
            </div>
          </swiper-slide>
          <swiper-slide>
            {" "}
            <div className="polaroid shadow-xl border border-gray-300 rounded-md p-4 m-2 w-80 ">
              <h3 className="text-sm font-semibold mb-1 text-center text-[#3CAFA0] ">
                DISNEYLAND PARIS
              </h3>
              <Image
                className="p-4 capadocia"
                src="/paris.jpg"
                alt="paris"
                height={100}
                width={300}
              />
              <p className="text-sm text-gray-600 px-4 m-2 text-justify h-40">
                Montanhas Russa, carrosséis, castelos de princesa, a casa do
                Mickey Mouse ou o mundo mágico do Ratatouille. Qual o seu
                preferido?
              </p>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className="polaroid shadow-xl border border-gray-300 rounded-md p-4 m-2 w-80 h-auto">
              <h3 className="text-sm font-semibold mb-1 text-center text-[#3CAFA0] ">
                CAPADOCIA
              </h3>
              <Image
                className="p-4 capadocia"
                src="/capadocia.jpg"
                alt="capadocia"
                height={100}
                width={300}
              />
              <p className="text-sm text-gray-600 px-4 m-2">
                Explore a mágica Capadócia e mergulhe em um mundo de maravilhas
                esculturais esculpidas pela natureza, onde os balões de ar
                quente dançam pelos céus pintados de tons dourados. Deixe-se
                encantar pela história, cultura e paisagens únicas desta terra
                dos contos de fadas.
              </p>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className="polaroid shadow-xl border border-gray-300 rounded-md p-4 m-2 w-80 h-auto">
              <h3 className="text-sm font-semibold mb-1 text-center text-[#3CAFA0] ">
                ESTADOS UNIDOS DA AMERICA
              </h3>
              <Image
                className="p-4 eua"
                src="/eua.jpg"
                alt="eua"
                height={100}
                width={300}
              />
              <p className="text-sm text-gray-600 px-4 m-2 text-justify h-40">
                Mergulhe na agitação e luzes brilhantes de Times Square e
                assista a um espetáculo da Broadway. Aproveite para conhecer a
                Grand Central Terminal e desfrute do Central Park, um dos
                destaques da cidade! Está preparado para a cidade que nunca
                dorme?
              </p>
            </div>
          </swiper-slide>
        </swiper-container>
      </div>
      <div className="lg:hidden align-center">
        <swiper-container
          className=""
          navigation={true}
          pagination={true}
          pagination-clickable={true}
          space-between={1}
          slides-per-view={1}
        >
          <swiper-slide className="">
            <div className="polaroid shadow-xl border border-gray-300 rounded-md p-4 m-2 w-80 h-auto">
              <h3 className="text-sm font-semibold mb-1 text-center text-[#3CAFA0] ">
                ZANZIBAR
              </h3>
              <Image
                className="p-4 zanzibar"
                src="/zanzibar.jpg"
                alt=""
                height={100}
                width={300}
              />
              <p className="text-sm text-gray-600 px-4 m-2 text-justify h-40">
                Hakuna Matata, é tão fácil dizer! Apaixone-se pela ilhas das
                especiarias, relaxe nas praias de areia branca, visite a Ilha da
                Prisão para vivenciares momentos com as tartarugas gigantes!
                Zanzibar tem muito para oferecer!
              </p>
            </div>
          </swiper-slide>
          <swiper-slide>
            {" "}
            <div className="polaroid shadow-xl border border-gray-300 rounded-md p-4 m-2 w-80 h-auto ">
              <h3 className="text-sm font-semibold mb-1 text-center text-[#3CAFA0] ">
                PUNTA CANA
              </h3>
              <Image
                className="p-4 puntacana"
                src="/punta-cana.jpg"
                alt="punta-cana"
                height={100}
                width={300}
              />
              <p className="text-sm text-gray-600 px-4 m-2 text-justify h-40">
                Punta Cana é dos destinos mais procurados pelos viajantes de
                todo o mundo! É a sua vez de conhecer este paraíso! Dance ao
                ritmo da Bachata, mergulhe nas praias incríveis de areia branca,
                rume até Isla Saona e diverta-se no CocoBongo!
              </p>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className="polaroid shadow-xl border border-gray-300 rounded-md p-4 m-2 w-80 h-auto">
              <h3 className="text-sm font-semibold mb-1 text-center text-[#3CAFA0] ">
                CUBA
              </h3>
              <Image
                className="p-4 cuba"
                src="/cuba2.jpg"
                alt="cuba"
                height={100}
                width={300}
              />
              <p className="text-sm text-gray-600 px-4 m-2 text-justify h-40">
                Prepare-se para uma viagem até aos anos 50! Havana é uma das
                cidades mais singulares do mundo e você vais adorar conhecer!
                Desfrute da cultura Cubana, dance ao ritmo da salsa, beba um
                Mojito e faça um passeio num dos carros antigos!
              </p>
            </div>
          </swiper-slide>
          <swiper-slide className="">
            <div className="polaroid shadow-xl border border-gray-300 rounded-md p-4 m-2 w-80 h-auto">
              <h3 className="text-sm font-semibold mb-1 text-center text-[#3CAFA0] ">
                BRASIL
              </h3>

              <Image
                className="p-4 brasil"
                src="/brasil.jpg"
                alt="Burger"
                height={100}
                width={300}
              />
              <p className="text-sm text-gray-600 px-4 m-2 text-justify h-40">
                A cidade maravilhosa faz jus ao apelido! Festas, praias,
                cultura, gastronomia e clima tropical! Diverta-se no Rio de
                Janeiro ao ritmo do Samba!
              </p>
            </div>
          </swiper-slide>
          <swiper-slide>
            {" "}
            <div className="polaroid shadow-xl border border-gray-300 rounded-md p-4 m-2 w-80 ">
              <h3 className="text-sm font-semibold mb-1 text-center text-[#3CAFA0] ">
                DISNEYLAND PARIS
              </h3>
              <Image
                className="p-4 capadocia"
                src="/paris.jpg"
                alt="paris"
                height={100}
                width={300}
              />
              <p className="text-sm text-gray-600 px-4 m-2 text-justify h-40">
                Montanhas Russa, carrosséis, castelos de princesa, a casa do
                Mickey Mouse ou o mundo mágico do Ratatouille. Qual o seu
                preferido?
              </p>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className="polaroid shadow-xl border border-gray-300 rounded-md p-4 m-2 w-80 h-auto">
              <h3 className="text-sm font-semibold mb-1 text-center text-[#3CAFA0] ">
                CAPADOCIA
              </h3>
              <Image
                className="p-4 capadocia"
                src="/capadocia.jpg"
                alt="capadocia"
                height={100}
                width={300}
              />
              <p className="text-sm text-gray-600 px-4 m-2 h-40">
                Explore a mágica Capadócia e mergulhe em um mundo de maravilhas
                esculturais esculpidas pela natureza, onde os balões de ar
                quente dançam pelos céus pintados de tons dourados. Deixe-se
                encantar pela história, cultura e paisagens únicas desta terra
                dos contos de fadas.
              </p>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div className="polaroid shadow-xl border border-gray-300 rounded-md p-4 m-2 w-80 h-auto">
              <h3 className="text-sm font-semibold mb-1 text-center text-[#3CAFA0] ">
                ESTADOS UNIDOS DA AMERICA
              </h3>
              <Image
                className="p-4 eua"
                src="/eua.jpg"
                alt="eua"
                height={100}
                width={300}
              />
              <p className="text-sm text-gray-600 px-4 m-2 text-justify h-40">
                Mergulhe na agitação e luzes brilhantes de Times Square e
                assista a um espetáculo da Broadway. Aproveite para conhecer a
                Grand Central Terminal e desfrute do Central Park, um dos
                destaques da cidade! Está preparado para a cidade que nunca
                dorme?
              </p>
            </div>
          </swiper-slide>
        </swiper-container>
      </div>
    </>
  );
};

export default CarrDD;
