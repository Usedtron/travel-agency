import { NextRequest, NextResponse } from "next/server";
import { EmailTemplate } from "../../components/email-templateform";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type ResponseData = {
  message: string;
};
export async function POST(
  request: NextRequest,
  response: NextResponse<ResponseData>
) {
  try {

    const formData = await request.formData();
    const name = formData.get("name")?.toString();
    const email = formData.get("email")?.toString();
    const destino = formData.get("destino")?.toString();
    const startDate = formData.get("startDate")?.toString();
    const endDate = formData.get("endDate")?.toString();
    const numAdultos = formData.get("numAdultos")?.toString();
    const numCriancas = formData.get("numCriancas")?.toString();
    const orcamento = formData.get("orcamento")?.toString();
    const message = formData.get("message")?.toString();
    
    if (
      !name ||
      !email ||
      !destino ||
      !startDate ||
      !endDate ||
      !numAdultos ||
      !numCriancas ||
      !orcamento 
      ) {
        return new NextResponse("Missing fields", { status: 500 });
      }

    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>", // will change after domain verify
      to: ["usedtron@gmail.com"], // client's email
      subject: "Pedido de orçamento",
      react: EmailTemplate({
        name: name,
        email: email,
        destino: destino,
        startDate: startDate,
        endDate: endDate,
        numAdultos: numAdultos,
        numCriancas: numCriancas,
        orcamento: orcamento,
        message: message,
      }),
      text: "text",
    });

    return NextResponse.json({ message: "Success, email sent!" });
  } catch (error) {
    console.log(error);
    return new NextResponse("Resend send failed", { status: 500 });
  }
}
