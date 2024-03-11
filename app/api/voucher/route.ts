import { NextRequest, NextResponse } from "next/server";
import { EmailTemplate } from "../../components/email-templatevoucher";
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
    const voucherType = formData.get("voucherType")?.toString();
    const offerValue = formData.get("offerValue")?.toString();
    const recipientName = formData.get("recipientName")?.toString();
    
    
    if (
      !name ||
      !email ||
      !phoneNumber ||
      !voucherType ||
      !offerValue ||
      !recipientName 
      
      ) {
        return new NextResponse("Missing fields", { status: 500 });
      }

    const data = await resend.emails.send({
      from: "Cliente <noreply@paraaquelesqueamamviajar.pt>", // will change after domain verify
      to: ["usedtron@gmail.com"], // client's email
      subject: "Pedido de Voucher",
      react: EmailTemplate({
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        voucherType: voucherType,
        offerValue: offerValue,
        recipientName: recipientName,
       
      }),
      text: "text",
    });

    return NextResponse.json({ message: "Success, email sent!" });
  } catch (error) {
    console.log(error);
    return new NextResponse("Resend send failed", { status: 500 });
  }
}
