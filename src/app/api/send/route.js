import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const fromEmail = process.env.FROM_EMAIL;
const toEmail = process.env.TO_EMAIL;
const webFormEmail = process.env.WEB_FORM_EMAIL;

export async function POST(req, res) {
  const { firstName, email, subject, message } = await req.json();

  try {
    const thankYou = await resend.emails.send({
      from: `CHMechaDev <${fromEmail}>`,
      to: [email],
      subject: "Thank You.",
      react: (
        <>
          <h1>{`Hello ${firstName ? firstName : "friend"},`}</h1>
          <p>Thank you for reaching out to me.</p>
          <p>I have received your email and will respond shortly.</p>
          <p>V/r,</p>
          <p>Cody Hearell</p>
        </>
      ),
    });

    const data = await resend.emails.send({
      from: `Web Form <${webFormEmail}>`,
      to: [toEmail],
      subject: subject,
      react: (
        <>
          <h1>{`From: ${firstName}`}</h1>
          <h3>{email}</h3>
          <p>{message}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}

// export async function POST(req, res) {
//     const { body } = req;
//     const { email, subject, message} = body;
//   try {
//     const data = await resend.emails.send({
//       from: "",
//       to: [""],
//       subject: "Hello world",
//       react: (
//         <>
//           <p>Email Body</p>
//         </>
//       ),
//     });

//     return NextResponse.json(data);
//   } catch (error) {
//     return NextResponse.json({ error });
//   }
// }
