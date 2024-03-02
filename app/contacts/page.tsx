"use client";
import React from "react";
import Image from "next/image";

const Contacts = () => {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>
    ) {
    console.log('event: ', event)
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    try {
      const response = await fetch("/api/contact", {
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
    <div className="flex imageContact">
      <div className="container  text-black lg:mt-32 lg:mb-20 lg:mx-60 p-8 lg:flex-1 lg:items-center justify-center lg:w-1/3 lg:h-1/3 bg-white   bg-opacity-60 lg:bg-opacity-80 shadow-xl border border-gray-300 rounded-md">
        <h1 className="lg:text-4xl font-bold mb-4">Contactos</h1>
        <p className="lg:text-lg mb-6 font-semibold">
          Márcia Santos +351966420212 <br /> Marta Silva +351966296251 <br />
          <br />
          geral@paraaquelesqueamamviajar.com
          <br />
          Rua do Movimento Republicano, 16, 1.º Esquerdo Parque Luso 2855-716
          Corroios
        </p>
        <form onSubmit={handleSubmit} className="max-w-md">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-600"
          >
            Nome:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mt-1 p-2 w-full border rounded-md bg-white"
          />

          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600 mt-4"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 p-2 w-full border rounded-md bg-white"
          />

          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-600 mt-4"
          >
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="mt-1 p-2 w-full border rounded-md bg-white"
          />

          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
