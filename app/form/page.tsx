// components/Form.js
"use client";
import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Form = () => {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    console.log("event: ", event);
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    idadesCriancas.forEach((idade, index) => {
      formData.append(`idade_${index}`, idade.toString());
    });
    try {
      const response = await fetch("/api/budget", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        console.log("falling over");
        console.log("response: ", response);
        throw new Error(`response status: ${response.status}`);
      }
      const responseData = await response.json();
      console.log(responseData["message"]);

      alert("Mensagem Enviada com sucesso.");
    } catch (err) {
      console.error("error handleSubmit: ", err);
    }
  }
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleStartDateChange = (date: Date | null) => {
    if (date && endDate && date > endDate) {
      // If the new start date is after the end date, adjust the end date to be the same as the start date
      setEndDate(date);
    }
    setStartDate(date);
  };

  const handleEndDateChange = (date: Date | null) => {
    if (date && startDate && date < startDate) {
      // If the new end date is before the start date, adjust the start date to be the same as the end date
      setStartDate(date);
    }
    setEndDate(date);
  };
  const [numCriancas, setNumCriancas] = useState(0);
  const [idadesCriancas, setIdadesCriancas] = useState<number[]>([]);

  const handleNumCriancasChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const quantidade = parseInt(event.target.value);
    setNumCriancas(quantidade);

    // Gerar idades para as crianças
    const novasIdades = Array.from({ length: quantidade }, () => 0); // Inicializa todas as idades como 0
    setIdadesCriancas(novasIdades);
  };

  const handleIdadeChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const novasIdades = [...idadesCriancas];
    novasIdades[index] = parseInt(event.target.value);
    setIdadesCriancas(novasIdades);
  };
  return (
    <div className="flex justify-center items-center h-auto formulario">
      <div className="container mt-16 lg:mt-32 lg:mb-20 lg:mx-60 p-8 flex-1 lg:w-1/3 lg:h-1/3 bg-white  bg-opacity-40 shadow-xl border border-gray-300 rounded-md">
        <h1 className="text-2xl lg:text-4xl font-bold mb-4 text-black">
          Pedido de Orçamento
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mt-4 ">
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
          </div>
          <div className="mt-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
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
            <label htmlFor="phoneNumber" className="text-gray-600">
              Número de Telefone:
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              required
              className="mt-1 p-2 w-full border rounded-md bg-white"
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="destino"
              className="block text-sm font-medium text-gray-600"
            >
              Destino:
            </label>
            <input
              type="text"
              id="destino"
              name="destino"
              required
              className="mt-1 p-2 w-full border rounded-md bg-white"
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="startDate"
              className="block text-sm font-medium text-gray-600"
            >
              Data de ida:
            </label>
            <DatePicker
              name="startDate"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              dateFormat="dd/MM/yyyy"
              className="mt-1 p-2 w-full border rounded-md bg-white"
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="endDate"
              className="block text-sm font-medium text-gray-600 bg"
            >
              Data de volta:
            </label>
            <DatePicker
              name="endDate"
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              dateFormat="dd/MM/yyyy"
              className="mt-1 p-2 w-full border rounded-md bg-white"
            />
          </div>

          <div className="mt-4">
            <label
              htmlFor="numAdultos"
              className="block text-sm font-medium text-gray-600"
            >
              Número de adultos:
            </label>
            <select
              id="numAdultos"
              name="numAdultos"
              required
              className="mt-1 p-2 w-36 border rounded-md bg-white"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="Mais de 6">Mais de 6</option>
            </select>
          </div>
          <div className="mt-4">
          <label htmlFor="numCriancas" className="block text-sm font-medium text-gray-600">
        Número de crianças (até 12 anos):
      </label>
      <select
        id="numCriancas"
        name="numCriancas"
        required
        className="mt-1 p-2 w-36 border rounded-md bg-white"
        value={numCriancas}
        onChange={handleNumCriancasChange}
      >
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
      </select>

      {numCriancas > 0 && (
        <div>
          <p>Idades das crianças:</p>
          {idadesCriancas.map((idade, index) => (
            <input
              key={index}
              type="number"
              min="0"
              max="17"
              value={idade}
              onChange={(event) => handleIdadeChange(index, event)}
              className="border rounded px-2 py-1 mb-2"
            />
          ))}
        </div>
      )}
          </div>
          <div className="mt-4">
            <label
              htmlFor="orcamento"
              className="block text-sm font-medium text-gray-600"
            >
              Orçamento (em euros):
            </label>
            <input
              type="number"
              id="orcamento"
              name="orcamento"
              min={0}
              required
              className="mt-1 p-2 w-36 border rounded-md bg-white"
            />
            <label
              htmlFor="orcamento"
              className="block text-sm font-medium text-gray-600"
            >
              Informações Relevantes:{" "}
            </label>
            <textarea
              id="message"
              name="message"
              rows={2}
              className="mt-1 p-2 w-full border rounded-md bg-white"
            />
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="bg-[#3CAFA0] text-white mt-4 px-4 py-4 rounded-md hover:bg-[#258f81]"
            >
              Enviar Pedido
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
