interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
}) => (
  <div>
    <h1>Pedido de Contacto</h1>
    <p>name: {name}</p>
    <p>email: {email}</p>
    <p>message: {message}</p>
  </div>
);
