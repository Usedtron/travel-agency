"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const Carousel = () => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItemIndex((prevIndex) => (prevIndex + 1) % 7); // Change item every 5 seconds
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className=" md:hidden flex justify-center items-center h-90 w-full">
        <div className="carousel">
          <div id="slide1" className="carousel-item relative w-full">
            <div className="polaroid shadow-xl border border-gray-300 rounded-md p-4 m-2 w-80 h-auto">
              <h3 className="text-sm font-semibold mb-1 text-center text-[#3CAFA0] ">
                ZANZIBAR
              </h3>
              <Image
                className="p-4 zanzibar"
                src="/zanzibar.jpg"
                alt="Burger"
                height={100}
                width={300}
              />
              <p className="text-sm text-gray-600 px-4 m-2">
                Hakuna Matata, é tão fácil dizer! Apaixona-te pela ilhas das
                especiarias, relaxa nas praias de areia branca, visita a Ilha da
                Prisão para vivenciares momentos com as tartarugas gigantes!
                Zanzibar tem muito para oferecer! Arriscas?
              </p>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide7" className="btn btn-circle opacity-50">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle opacity-50">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <div className="polaroid shadow-xl border border-gray-300 rounded-md p-4 m-2 w-80 h-auto ">
              <h3 className="text-sm font-semibold mb-1 text-center text-[#3CAFA0] ">
                PUNTA CANA
              </h3>
              <Image
                className="p-4 puntacana"
                src="/punta-cana.jpg"
                alt="Burger"
                height={100}
                width={300}
              />
              <p className="text-sm text-gray-600 px-4 m-2">
                Punta Cana é dos destinos mais procurados pelos viajantes de
                todo o mundo! É a tua vez de conheceres este paraíso! Dança ao
                ritmo da Bachata, mergulha nas praias incríveis de areia branca,
                ruma até Isla Saona e diverte-te no CocoBongo!
              </p>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle opacity-50">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle opacity-50">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
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
              <p className="text-sm text-gray-600 px-4 m-2">
                A cidade maravilhosa faz jus ao apelido! Festas, praias,
                cultura, gastronomia e clima tropical! Diverte-te no Rio de
                Janeiro ao ritmo do Samba!
              </p>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle opacity-50">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle opacity-50">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <div className="polaroid shadow-xl border border-gray-300 rounded-md p-4 m-2 w-80 h-auto">
              <h3 className="text-sm font-semibold mb-1 text-center text-[#3CAFA0] ">
                DISNEYLAND PARIS
              </h3>
              <Image
                className="p-4 capadocia"
                src="/paris.jpg"
                alt="Burger"
                height={100}
                width={300}
              />
              <p className="text-sm text-gray-600 px-4 m-2">
                Montanhas Russa, carrosséis, castelos de princesa, a casa do
                Mickey Mouse ou o mundo mágico do Ratatouille. Qual o teu
                preferido?
              </p>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle opacity-50">
                ❮
              </a>
              <a href="#slide5" className="btn btn-circle opacity-50">
                ❯
              </a>
            </div>
          </div>
          <div id="slide5" className="carousel-item relative w-full">
            <div className="polaroid shadow-xl border border-gray-300 rounded-md p-4 m-2 w-80 h-auto">
              <h3 className="text-sm font-semibold mb-1 text-center text-[#3CAFA0] ">
                CUBA
              </h3>
              <Image
                className="p-4 cuba"
                src="/cuba2.jpg"
                alt="Burger"
                height={100}
                width={300}
              />
              <p className="text-sm text-gray-600 px-4 m-2">
                Prepara-te para uma viagem até aos anos 50! Havana é uma das
                cidades mais singulares do mundo e tu vais adorar conhecer!
                Desfruta da cultura Cubana, dança ao ritmo da salsa, bebe um
                Mojito e faz um passeio num dos carros antigos!
              </p>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle opacity-50">
                ❮
              </a>
              <a href="#slide6" className="btn btn-circle opacity-50">
                ❯
              </a>
            </div>
          </div>
          <div id="slide6" className="carousel-item relative w-full">
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
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide5" className="btn btn-circle opacity-50">
                ❮
              </a>
              <a href="#slide7" className="btn btn-circle opacity-50">
                ❯
              </a>
            </div>
          </div>
          <div id="slide7" className="carousel-item relative w-full">
            <div className="polaroid shadow-xl border border-gray-300 rounded-md p-4 m-2 w-80 h-auto">
              <h3 className="text-sm font-semibold mb-1 text-center text-[#3CAFA0] ">
                ESTADOS UNIDOS DA AMERICA
              </h3>
              <Image
                className="p-4 eua"
                src="/eua.jpg"
                alt="Burger"
                height={100}
                width={300}
              />
              <p className="text-sm text-gray-600 px-4 m-2">
                Mergulha na agitação e luzes brilhantes de Times Square, assiste
                a um espetáculo da Broadway. Aproveita para conhecer a Grand
                Central Terminal e perde-te no Central Park, um dos destaques da
                cidade! Estás preparado para a cidade que nunca dorme?
              </p>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide6" className="btn btn-circle opacity-50">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle opacity-50">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="hidden md:carousel md:rounded-box md:overflow-hidden md:w-full"
        id="carousel-item"
      >
        <div className="carousel-inner" style={{ display: "flex" }}>
          <div
            className={`carousel-item ${
              currentItemIndex === 0 ? "active" : ""
            }`}
            style={{ transition: "opacity 1s ease-in-out" }}
          >
            <div className="polaroid shadow-xl border border-gray-300 rounded-md p-4 m-2 w-80 h-auto ">
              <h3 className="text-sm font-semibold mb-1 text-center text-[#3CAFA0] ">
                PUNTA CANA
              </h3>
              <Image
                className="p-4 puntacana"
                src="/punta-cana.jpg"
                alt="Burger"
                height={100}
                width={300}
              />
              <p className="text-sm text-gray-600 px-4 m-2">
                Punta Cana é dos destinos mais procurados pelos viajantes de
                todo o mundo! É a tua vez de conheceres este paraíso! Dança ao
                ritmo da Bachata, mergulha nas praias incríveis de areia branca,
                ruma até Isla Saona e diverte-te no CocoBongo!
              </p>
            </div>
          </div>
          <div
            className={`carousel-item ${
              currentItemIndex === 1 ? "active" : ""
            }`}
          >
            <div className="polaroid shadow-xl border border-gray-300 rounded-md p-4 m-2 w-80 h-auto">
              <h3 className="text-sm font-semibold mb-1 text-center text-[#3CAFA0] ">
                ZANZIBAR
              </h3>

              <Image
                className="p-4 zanzibar"
                src="/zanzibar.jpg"
                alt="Burger"
                height={100}
                width={300}
              />
              <p className="text-sm text-gray-600 px-4 m-2">
                Hakuna Matata, é tão fácil dizer! Apaixona-te pela ilhas das
                especiarias, relaxa nas praias de areia branca, visita a Ilha da
                Prisão para vivenciares momentos com as tartarugas gigantes!
                Zanzibar tem muito para oferecer! Arriscas?
              </p>
            </div>
          </div>
          <div
            className={`carousel-item ${
              currentItemIndex === 2 ? "active" : ""
            }`}
          >
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
              <p className="text-sm text-gray-600 px-4 m-2">
                A cidade maravilhosa faz jus ao apelido! Festas, praias,
                cultura, gastronomia e clima tropical! Diverte-te no Rio de
                Janeiro ao ritmo do Samba!
              </p>
            </div>
          </div>
          <div
            className={`carousel-item ${
              currentItemIndex === 3 ? "active" : ""
            }`}
          >
            <div className="polaroid shadow-xl border border-gray-300 rounded-md p-4 m-2 w-80 h-auto">
              <h3 className="text-sm font-semibold mb-1 text-center text-[#3CAFA0] ">
                DISNEYLAND PARIS
              </h3>
              <Image
                className="p-4 capadocia"
                src="/paris.jpg"
                alt="Burger"
                height={100}
                width={300}
              />
              <p className="text-sm text-gray-600 px-4 m-2">
                Montanhas Russa, carrosséis, castelos de princesa, a casa do
                Mickey Mouse ou o mundo mágico do Ratatouille. Qual o teu
                preferido?
              </p>
            </div>
          </div>
          <div
            className={`carousel-item ${
              currentItemIndex === 4 ? "active" : ""
            }`}
          >
            <div className="polaroid shadow-xl border border-gray-300 rounded-md p-4 m-2 w-80 h-auto">
              <h3 className="text-sm font-semibold mb-1 text-center text-[#3CAFA0] ">
                CUBA
              </h3>
              <Image
                className="p-4 cuba"
                src="/cuba2.jpg"
                alt="Burger"
                height={100}
                width={300}
              />
              <p className="text-sm text-gray-600 px-4 m-2">
                Prepara-te para uma viagem até aos anos 50! Havana é uma das
                cidades mais singulares do mundo e tu vais adorar conhecer!
                Desfruta da cultura Cubana, dança ao ritmo da salsa, bebe um
                Mojito e faz um passeio num dos carros antigos!
              </p>
            </div>
          </div>
          <div
            className={`carousel-item ${
              currentItemIndex === 5 ? "active" : ""
            }`}
          >
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
          </div>
          <div
            className={`carousel-item ${
              currentItemIndex === 6 ? "active" : ""
            }`}
          >
            <div className="polaroid shadow-xl border border-gray-300 rounded-md p-4 m-2 w-80 h-auto">
              <h3 className="text-sm font-semibold mb-1 text-center text-[#3CAFA0] ">
                ESTADOS UNIDOS DA AMERICA
              </h3>
              <Image
                className="p-4 eua"
                src="/eua.jpg"
                alt="Burger"
                height={100}
                width={300}
              />
              <p className="text-sm text-gray-600 px-4 m-2">
                Mergulha na agitação e luzes brilhantes de Times Square, assiste
                a um espetáculo da Broadway. Aproveita para conhecer a Grand
                Central Terminal e perde-te no Central Park, um dos destaques da
                cidade! Estás preparado para a cidade que nunca dorme?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
