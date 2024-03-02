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
    <h1>name: {name}</h1>
    <h1>email: {email}</h1>
    <h1>message: {message}</h1>
  </div>
);
