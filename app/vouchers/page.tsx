"use client";
import { useState } from "react";
import Image from "next/image";
import React from "react";
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

const Vouchers = () => {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    console.log("event: ", event);
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    try {
      const response = await fetch("/api/voucher", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        console.log("falling over");
        throw new Error(`response status: ${response.status}`);
      }
      const responseData = await response.json();
      console.log(responseData["message"]);

      alert("Mensagem Enviada com sucesso.");
    } catch (err) {
      console.error(err);
      alert("Erro, tente novamente.");
    }
  }

  return (
    <>
      <div className="max-w-4xl mx-auto mt-20 px-8 bg-white">
        <h2 className="text-3xl font-bold mb-4 text-[#3CAFA0]">Voucher</h2>
        <br />
        <div className="hidden lg:flex lg:flex-wrap">
          <div className="w-full md:w-1/2 lg:w-1/4 px-2 mb-4">
            <Image src="/v1.png" width={200} height={200} alt="Image 1" />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-2 mb-4">
            <Image src="/v2.png" width={200} height={200} alt="Image 2" />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-2 mb-4">
            <Image src="/v3.png" width={200} height={200} alt="Image 3" />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-2 mb-4">
            <Image src="/v4.png" width={200} height={200} alt="Image 4" />
          </div>
        </div>
        <style>{`
      .mySwiper {
        width: 100%;
        height: 100%;
      }
      
      .swiper-slide {
        max-width: 100px;
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

        <div className="lg:hidden justify-center">
          <swiper-container
            className=""
            pagination={true}
            pagination-clickable={true}
            space-between={1}
            slides-per-view={1}
          >
            <swiper-slide className="">
              <div className="polaroid shadow-xl border border-gray-300 rounded-md p-4 m-2 w-80 h-auto">
                <h3 className="text-sm font-semibold mb-1 text-center text-[#3CAFA0] ">
                  LUA DE MEL
                </h3>
                <Image
                  className="p-4"
                  src="/v1.png"
                  alt=""
                  height={100}
                  width={300}
                />
              </div>
            </swiper-slide>
            <swiper-slide>
              {" "}
              <div className="polaroid shadow-xl border border-gray-300 rounded-md p-4 m-2 w-80 h-auto ">
                <h3 className="text-sm font-semibold mb-1 text-center text-[#3CAFA0] ">
                  ANIVERSÁIO
                </h3>
                <Image
                  className="p-4"
                  src="/v2.png"
                  alt=""
                  height={100}
                  width={300}
                />
              </div>
            </swiper-slide>
            <swiper-slide>
              <div className="polaroid shadow-xl border border-gray-300 rounded-md p-4 m-2 w-80 h-auto">
                <h3 className="text-sm font-semibold mb-1 text-center text-[#3CAFA0] ">
                  NATAL
                </h3>
                <Image
                  className="p-4"
                  src="/v3.png"
                  alt="natal"
                  height={100}
                  width={300}
                />
              </div>
            </swiper-slide>
            <swiper-slide className="">
              <div className="polaroid shadow-xl border border-gray-300 rounded-md p-4 m-2 w-80 h-auto">
                <h3 className="text-sm font-semibold mb-1 text-center text-[#3CAFA0] ">
                  VIAGEM
                </h3>

                <Image
                  className="p-4"
                  src="/v4.png"
                  alt="viagem"
                  height={100}
                  width={300}
                />
              </div>
            </swiper-slide>
          </swiper-container>
        </div>
        <div className="flex flex-col">
          <p className="text-justify md:flex md:justify-center md:items-center">
            <br />
            Agora Pode Adquirir um Voucher de  oferta!
                        <br />
            <br />
            Podem ser utilizados para viagens após o final da data do voucher,
            desde que adquiridos antes da data de validade terminar;
            <br />
            <br />
            Só podem ser utilizados pelos titulares do voucher viagem, fazendo
            prova com documento de identificação válido. O titular do voucher
            viagem é quem fizer prova do mesmo com a consequente apresentação do
            documento de identificação e imagem ou fotografia do cheque viagem
            original.
            <br />
            <br />
            Podem ser utilizados em todos com serviços de PARA AQUELES QUE AMAM
            VIAJAR.
            <br />
            <br />O titular do voucher viagem pode fazer uso do mesmo para seu
            proveito enquanto viajante, ou utilizar o cheque viagem para a
            compra de serviços para outros passageiros.
            <br />
            <br />
            Todos os cheques têm a validade de um ano a contar da data de
            compra, após este prazo o titular do voucher perde o direto à sua
            utilização.
            <br />
            <br />
            Os voucher viagem não são convertidos em numerário;
            <br />
            <br />
            Não são aceites devoluções;
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex justify-center items-center h-auto"
        >
          <div className="container my-16 lg:mb-20 lg:mx-auto p-8 flex-1 lg:w-1/2 lg:h-1/3 bg-[#3CAFA0]  bg-opacity-40 shadow-xl border border-gray-300 rounded-md">
            <div>
              <div>
                <label htmlFor="name">Nome:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 p-2 w-full border rounded-md bg-white"
                />
                <br />
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 p-2 w-full border rounded-md bg-white"
                />
                <br />
                <label htmlFor="phoneNumber">Número de Telefone:</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  required
                  className="mt-1 p-2 w-full border rounded-md bg-white"
                />
                <br />
              </div>
              <div>
                <label htmlFor="voucherType">Tipo de Voucher:</label>
                <select
                  id="voucherType"
                  name="voucherType"
                  required
                  className="mt-2 p-2 w-full border rounded-md bg-white"
                >
                  <option value="">Selecionar</option>
                  <option value="lua_de_mel">Lua de Mel</option>
                  <option value="aniversario">Aniversário</option>
                  <option value="viagem">Viagem</option>
                  <option value="natal">Natal</option>
                </select>
                <br />
                <label htmlFor="offerValue">Valor de Oferta:</label>
                <select
                  id="offerValue"
                  name="offerValue"
                  required
                  className="mt-2 p-2 w-full border rounded-md bg-white"
                >
                  <option value="">Selecionar</option>
                  <option value="100">100 euros</option>
                  <option value="200">200 euros</option>
                  <option value="300">300 euros</option>
                  <option value="400">400 euros</option>
                  <option value="500">500 euros</option>
                  <option value="1000">1000 euros</option>
                  <option value="2000">2000 euros</option>
                  <option value="3000">3000 euros</option>
                  <option value="4000">4000 euros</option>
                  <option value="5000">5000 euros</option>
                </select>
                <br />
                <label htmlFor="recipientName">
                  Nome para quem é o Voucher:
                </label>
                <input
                  type="text"
                  id="recipientName"
                  name="recipientName"
                  required
                  className="mt-2 p-2 w-full border rounded-md bg-white"
                />
                <br />
              </div>
            </div>
            <button
              type="submit"
              className="bg-[#3CAFA0] text-white mt-4 px-4 py-4 rounded-md hover:bg-[#258f81]"
            >
              Pedir Voucher
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Vouchers;
