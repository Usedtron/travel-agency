// pages/privacy-policy.tsx

import React from 'react';

const Conditions: React.FC = () => {
  return (
    <div>
      <h2 className="text-lg font-bold">Política de Privacidade</h2>

      <ol className="list-decimal pl-6 text-sm text-justify">
        <li>
          <h3 className="text-base font-bold">Seção 1</h3>
          <p>Conteúdo da Seção 1.</p>
        </li>
        <li>
          <h3 className="text-base font-bold">Seção 2</h3>
          <p>Conteúdo da Seção 2.</p>
        </li>
        {/* Adicione os outros itens da lista conforme necessário */}
      </ol>
    </div>
  );
};

export default Conditions;
