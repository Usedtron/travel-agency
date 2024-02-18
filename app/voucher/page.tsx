// pages/Voucher.js
"use client";
import { useState } from "react";
import Image from "next/image";

const Voucher = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    voucherType: "",
    offerValue: "",
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
    console.log(formData);
  };

  return (
    <div className="max-w-4xl mx-auto mt-20">
      <h2 className="text-3xl font-bold mb-4 text-[#3CAFA0]">Voucher</h2>
      <br />
      <div className="flex flex-wrap">
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
      <div className="flex flex-col">
        <p className="text-justify md:flex md:justify-center md:items-center">
          <br />
          Podes adquirir um cheque presente;
          <br />
          <br />
          Podem ser utilizados para viagens após o final da data do cheque desde
          que adquiridos antes da data de validade terminar;
          <br />
          <br />
          Só podem ser utilizados pelos titulares do cheque viagem, fazendo
          prova com documento de identificação válido. O titular do cheque
          viagem é quem fizer prova do mesmo com a consequente apresentação do
          documento de identificação e imagem ou fotografia do cheque viagem
          original.
          <br />
          <br />
          Podem ser utilizados em todos com serviços de PARA AQUELES QUE AMAM
          VIAJAR.
          <br />
          <br />O titular do cheque viagem pode fazer uso do mesmo, para seu
          proveito enquanto viajante ou utilizar o cheque viagem para a compra
          de serviços para outros passageiros.
          <br />
          <br />
          Todos os cheques tem a validade de um ano a contar da data de compra,
          após este prazo o titular do voucher perde o direto à sua utilização.
          <br />
          <br />
          Os cheques viagem não são convertidos em numerário;
          <br />
          <br />
          Não são aceites devoluções;
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center h-auto"
      >
        <div className="container mt-16 lg:mb-20 lg:mx-60 p-8 flex-1 lg:w-1/3 lg:h-1/3 bg-[#3CAFA0]  bg-opacity-40 shadow-xl border border-gray-300 rounded-md">
          <div>
            <div>
              <label htmlFor="name">Nome:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md bg-white"
              />
              <br />
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md bg-white"
              />
              <br />
              <label htmlFor="phoneNumber">Número de Telefone:</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md bg-white"
              />
              <br />
            </div>
            <div>
              <label htmlFor="voucherType">Tipo de Voucher:</label>
              <select
                id="voucherType"
                name="voucherType"
                value={formData.voucherType}
                onChange={handleChange}
                className="mt-2 p-2 w-36 border rounded-md bg-white"
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
                value={formData.offerValue}
                onChange={handleChange}
                className="mt-2 p-2 w-36 border rounded-md bg-white"
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
              <label htmlFor="recipientName">Nome para quem é o Voucher:</label>
              <input
                type="text"
                id="recipientName"
                name="recipientName"
                className="mt-2 p-2 w-full border rounded-md bg-white"
              />
              <br />
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white mt-4 px-4 py-4 rounded-md hover:bg-blue-600"
          >
            Pedir Voucher
          </button>
        </div>
      </form>
    </div>
  );
};

export default Voucher;
