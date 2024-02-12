"use client";
import React from "react";
import Image from "next/image";

const Contacts = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="flex imageContact">
      <div className="container mt-32 mb-20 mx-60 p-8 flex-1 items-center justify-center w-1/3 h-1/3 bg-white  bg-opacity-80 shadow-xl border border-gray-300 rounded-md">
        <h1 className="text-4xl font-bold mb-4">Contactos</h1>
        <p className="text-lg mb-6 font-semibold">
          Marcia Santos +351966420212 <br /> Marta Silva +351966296251 <br />

          <br />Email: geral@paraaquelesqueamamviajar.com
          <br />Rua do Movimento Republicano, 16, 1.º Esquerdo Parque Luso 2855-716
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
            className="mt-1 p-2 w-full border rounded-md"
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
            className="mt-1 p-2 w-full border rounded-md"
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
            className="mt-1 p-2 w-full border rounded-md"
          />

          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Enviar
          </button>
        </form>
      </div>
                {/*  FIM Seção Missão 

      <div className="flex-2 flex justify-center items-center mt-20 mr-9 mb-16">
        <Image src="/contacts.jpg" alt="Logo" width={400} height={350} />
      </div>
      */}
    </div>
  );
};

export default Contacts;
