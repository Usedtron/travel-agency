import { NextRequest, NextResponse } from "next/server";
import { EmailTemplate } from "../../components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type ResponseData = {
  message: string;
}

export async function POST(request: NextRequest, response: NextResponse<ResponseData>) {
  const formData = await request.formData();
  const name = formData.get('name')?.toString();
  const email = formData.get('email')?.toString();
  const message = formData.get('message')?.toString();

  if (!name || !email || !message) {
    return new NextResponse("Missing fields", { status: 500 });
  }

  try {
    const data = await resend.emails.send({
      from: "Cliente <noreply@paraaquelesqueamamviajar.pt>", // will change after domain verify
      to: ["usedtron@gmail.com"], // client's email
      subject: "Pedido de orçamento",
      react: EmailTemplate({ 
        name: name,
        email: email,
        message: message,
       }),
      text: "text",
    });

    return NextResponse.json({ message: "Success, email sent!" });
  } catch (error) {
    return new NextResponse("Resend send failed", { status: 500 });;
  }
}
