"use client";
import React from "react";
import Image from "next/image";

const Contacts = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="flex">
      <div className="container mx-auto ml-9 p-4 mt-20 flex-1">
        <h1 className="text-4xl font-bold mb-4">Contactos</h1>
        <p className="text-lg mb-6">
          Marcia Santos +351966420212 <br /> Marta Silva +351966296251 <br />{" "}
          <br /> geral@paraaquelesqueamamviajar.com
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
      <div className="flex-2 flex justify-center items-center mt-20 mr-9 mb-16">
        <Image src="/contacts.jpg" alt="Logo" width={400} height={350} />
      </div>
    </div>
  );
};

export default Contacts;
