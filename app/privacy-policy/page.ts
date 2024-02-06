// components/ReviewForm.
"use client"
import { useState } from 'react';

const ReviewForm = () => {
  const [ratings, setRatings] = useState({
    satisfaction: 0,
    quality: 0,
    price: 0,
    communication: 0,
  });

  const handleRatingChange = (category, value) => {
    setRatings({ ...ratings, [category]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar as avaliações (pode ser implementada aqui)
    console.log('Avaliações enviadas:', ratings);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 mt-8 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Deixe sua Avaliação</h2>

      {/* Satisfação */}
      <div className="mb-4">
        <label htmlFor="satisfaction" className="block text-sm font-medium text-gray-600">Satisfação:</label>
        <div className="flex items-center">
          {[1, 2, 3, 4, 5].map((value) => (
            <input
              key={value}
              type="radio"
              id={`satisfaction-${value}`}
              name="satisfaction"
              value={value}
              onChange={(e) => handleRatingChange(e, 'satisfaction')}
              className="sr-only"
            />
          ))}
          {[1, 2, 3, 4, 5].map((value) => (
            <label
              key={value}
              htmlFor={`satisfaction-${value}`}
              className={`cursor-pointer ${
                value <= ratings.satisfaction ? 'text-yellow-500' : 'text-gray-300'
              }`}
            >
              ★
            </label>
          ))}
        </div>
      </div>

      {/* Qualidade */}
      <div className="mb-4">
        <label htmlFor="quality" className="block text-sm font-medium text-gray-600">Qualidade:</label>
        {/* Adicione componentes de estrelas para a qualidade da mesma forma que para a satisfação */}
      </div>

      {/* Preço */}
      <div className="mb-4">
        <label htmlFor="price" className="block text-sm font-medium text-gray-600">Preço:</label>
        {/* Adicione componentes de estrelas para o preço da mesma forma que para a satisfação */}
      </div>

      {/* Comunicação */}
      <div className="mb-4">
        <label htmlFor="communication" className="block text-sm font-medium text-gray-600">Comunicação:</label>
        {/* Adicione componentes de estrelas para a comunicação da mesma forma que para a satisfação */}
      </div>

      {/* Botão de Envio */}
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Enviar Avaliação
      </button>
    </form>
  );
};

export default ReviewForm;
