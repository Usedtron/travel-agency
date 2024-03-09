interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
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
  message,
  destino,
  startDate,
  endDate,
  numAdultos,
  numCriancas,
  orcamento,
}) => (
  <div>
    <h1>name: {name}</h1>
    <h1>email: {email}</h1>
    <h1>destino: {destino}</h1>
    <h1>startDate: {startDate}</h1>
    <h1>endDate: {endDate}</h1>
    <h1>numAdultos: {numAdultos}</h1>
    <h1>numCriancas: {numCriancas}</h1>
    <h1>orcamento: {orcamento}</h1>
    <h1>message: {message}</h1>
  </div>
);
