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
              />
            </div>{" "}
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle opacity-50">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle opacity-50">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
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
            <div className="w-80 h-80 m-1">
              <p className="rounded-lg bg-white py-2 px-4 max-w-xs ">
                <span className="font-bold">Inês S.C.</span>
                <br />
                Excelente serviço. Ajudaram a escolher o destino e apresentaram
                opções excelentes e alinhadas com o que queríamos. Não tivemos
                que nos preocupar com nada, apenas com aproveitar a nossa
                viagem! 5⭐️
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
            <div className="w-80 h-80 m-1">
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
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle opacity-50">
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
              />
            </div>
          </div>
          <div
            className={`carousel-item ${
              currentItemIndex === 1 ? "active" : ""
            }`}
          >
            <div className="w-80 h-80 m-1">
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
          <div
            className={`carousel-item ${
              currentItemIndex === 2 ? "active" : ""
            }`}
          >
            <div className="w-80 h-80 m-1">
              <p className="rounded-lg bg-white py-2 px-4 max-w-xs ">
                <span className="font-bold">Inês S.C.</span>
                <br />
                Excelente serviço. Ajudaram a escolher o destino e apresentaram
                opções excelentes e alinhadas com o que queríamos. Não tivemos
                que nos preocupar com nada, apenas com aproveitar a nossa
                viagem! 5⭐️
              </p>
            </div>
          </div>
          <div
            className={`carousel-item ${
              currentItemIndex === 3 ? "active" : ""
            }`}
          >
            <div className="w-80 h-80 m-1">
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
          <div
            className={`carousel-item ${
              currentItemIndex === 4 ? "active" : ""
            }`}
          >
            <div className="w-80 h-80 m-1">
              <p className="rounded-lg bg-white py-2 px-4 max-w-xs ">
                <span className="font-bold">Estefania T.</span>
                <br />
                Adoramos! A Márcia foi fantástica, sempre disponível para os
                nossos esclarecimentos. Percebeu exatamente o que pretendíamos
                para a nossa lua-de-mel. Com a ajuda dela tornou possível que
                viagem já pensada durante muito tempo fosse possível e ao mesmo
                tempo ajustada para nós e para os nossos pedidos. Ficamos fãs,
                obrigada por tudo! 🙂
              </p>
            </div>
          </div>
          <div
            className={`carousel-item ${
              currentItemIndex === 5 ? "active" : ""
            }`}
          >
            <div className="w-80 h-80 m-1">
              <p className="rounded-lg bg-white py-2 px-4 max-w-xs ">
                <span className="font-bold">Sonia G.</span>
                <br />
                Quero aqui agradecer o excelente profissionalismo da Márcia
                🤩deu nos as melhores sugestões e tratou de tudo. Foi
                simplesmente maravilhosa💖tivemos uma lua de mel excelente
                também graças a ela🙏🙏Obrigada😘😘 a próxima viagem será com
                ela de certeza 😍aonde será o próximo destino?? 😁
              </p>
            </div>
          </div>
          <div
            className={`carousel-item ${
              currentItemIndex === 6 ? "active" : ""
            }`}
          >
            <div className="w-80 h-80 m-1">
              <p className="rounded-lg bg-white py-2 px-4 max-w-xs ">
                <span className="font-bold">Claudia S.</span>
                <br />
                Muito obrigado por toda a ajuda e disponibilidade na organização
                da minha viagem a Madrid. Toda a atenção aos pormenores, aos
                conselhos e uma procura incrível dos melhores preços e lugares
                dentro do que pretendia. A viagem foi maravilhosa, desde dos
                horários dos voos, o alojamento super central e confortável e o
                contacto durante a viagem. Recomendado a 100%, e espero poder
                realizar mais viagens com todo o apoio e acompanhamento por
                parte da Marcia. Mais uma vez obrigado por tudo 🙏😁.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
