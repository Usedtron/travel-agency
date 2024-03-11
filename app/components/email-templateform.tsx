interface EmailTemplateProps {
  name: string;
  email: string;
  phoneNumber: string;
  message?: string;
  destino: string;
  startDate: string;
  endDate: string;
  numAdultos: string;
  numCriancas: string;
  orcamento: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  phoneNumber,
  message = "",
  destino,
  startDate,
  endDate,
  numAdultos,
  numCriancas,
  orcamento,
}) => (
<div className="max-w-md mx-auto p-8 mt-10 rounded-lg shadow-md">
            <h1 className="text-lg font-semibold mb-4">Pedido de Orçamento</h1>
            <p className="mb-2">Nome: {name}</p>
            <p className="mb-2">Destino: {destino}</p>
            <p className="mb-2">Email: {email}</p>
            <p className="mb-2">Telefone: {phoneNumber}</p>
            <p className="mb-2">Data de Inicio: {startDate}</p>
            <p className="mb-2">Data do Fim: {endDate}</p>
            <p className="mb-2">Numero de Adultos: {numAdultos}</p>
            <p className="mb-2">Numero de Crianças: {numCriancas}</p>
            <p className="mb-2">Orçamento: {orcamento}</p>
            <p className="mb-2">Outras informações: {message}</p>
        </div>
);
