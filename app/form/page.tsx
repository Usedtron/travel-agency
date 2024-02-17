// components/Form.js
"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Form = () => {
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
  return (
    <form className="flex justify-center items-center h-auto formulario">
      <div className="container mt-16 lg:mt-32 lg:mb-20 lg:mx-60 p-8 flex-1 lg:w-1/3 lg:h-1/3 bg-white  bg-opacity-40 shadow-xl border border-gray-300 rounded-md">
        <h1 className="text-2xl lg:text-4xl font-bold mb-4">Pedido de Orçamento</h1>
        <div className="mt-4 ">
          <label
            htmlFor="nome"
            className="block text-sm font-medium text-gray-600"
          >
            Nome:
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            required
            className="mt-1 p-2 w-full border rounded-md"
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
            className="mt-1 p-2 w-full border rounded-md"
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
            className="mt-1 p-2 w-full border rounded-md"
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
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            dateFormat="dd/MM/yyyy"
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mt-4">
          <label
            htmlFor="endDate"
            className="block text-sm font-medium text-gray-600"
          >
            Data de volta:
          </label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            dateFormat="dd/MM/yyyy"
            className="mt-1 p-2 w-full border rounded-md"
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
            className="mt-1 p-2 w-36 border rounded-md"
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
          <label
            htmlFor="numCriancas"
            className="block text-sm font-medium text-gray-600"
          >
            Número de crianças (até 12 anos):
          </label>
          <select
            id="numCriancas"
            name="numCriancas"
            required
            className="mt-1 p-2 w-36 border rounded-md "
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="Mais de 4">Mais de 4</option>
          </select>
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
            className="mt-1 p-2 w-36 border rounded-md"
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
            required
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Enviar
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
