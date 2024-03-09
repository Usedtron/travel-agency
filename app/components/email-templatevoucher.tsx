interface EmailTemplateProps {
    name: string;
    email: string;
    phoneNumber: string;
    voucherType: string;
    offerValue: string;
    recipientName: string;
    
  }
  
  export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    name,
    email,
    phoneNumber,
    voucherType,
    offerValue,
    recipientName,
  }) => (
<div className="max-w-md mx-auto bg-white p-8 mt-10 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Detalhes do Voucher</h1>
        <p className="mb-2"><strong>Nome:</strong> {name}</p>
        <p className="mb-2"><strong>Email:</strong> {email}</p>
        <p className="mb-2"><strong>Telefone:</strong> {phoneNumber}</p>
        <p className="mb-2"><strong>Tipo de Voucher:</strong> {voucherType}</p>
        <p className="mb-2"><strong>Valor do Voucher:</strong> {offerValue}</p>
        <p className="mb-2"><strong>Destinatario</strong> {recipientName}</p>
    </div>
  );