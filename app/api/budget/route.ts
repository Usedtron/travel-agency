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
    const phoneNumber = formData.get("phoneNumber")?.toString();
    const destino = formData.get("destino")?.toString();
    const startDate = formData.get("startDate")?.toString();
    const endDate = formData.get("endDate")?.toString();
    const numAdultos = formData.get("numAdultos")?.toString();
    const numCriancas = formData.get("numCriancas")?.toString();
    const orcamento = formData.get("orcamento")?.toString();
    const message = formData.get("message")?.toString();
    const idadesCriancas: number[] = [];
    if (numCriancas) {
      const numCriancasInt = parseInt(numCriancas);
      for (let i = 0; i < numCriancasInt; i++) {
        const idade = formData.get(`idade_${i}`);
        if (idade) {
          idadesCriancas.push(parseInt(idade.toString()));
        }
      }
    }

    
    if (
      !name ||
      !email ||
      !phoneNumber ||
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
      from: "Cliente <noreply@paraaquelesqueamamviajar.pt>", // will change after domain verify
      to: ["geral@paraaquelesqueamamviajar.com"], // client's email
      subject: "Pedido de orçamento",
      react: EmailTemplate({
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        destino: destino,
        startDate: startDate,
        endDate: endDate,
        numAdultos: numAdultos,
        numCriancas: numCriancas,
        idadesCriancas: idadesCriancas, // Passar as idades das crianças para o template do email
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
