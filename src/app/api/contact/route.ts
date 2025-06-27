import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, phone, email, subject, message } = await req.json();

  if (!name) {
    return NextResponse.json({ error: "Name is required." }, { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const html = `
  <div style="font-family: 'Segoe UI', Tahoma, sans-serif; max-width: 640px; margin: 0 auto; padding: 32px; border: 1px solid #e5e7eb; border-radius: 10px; background-color: #ffffff;">
    <h2 style="color: #111827; font-size: 24px; margin-bottom: 20px; text-align: center; border-bottom: 1px solid #e5e7eb; padding-bottom: 12px;">
      📬 New Contact  Submission
    </h2>

    <table style="width: 100%; border-collapse: collapse; font-size: 15px; color: #374151;">
      <tbody>
        <tr>
          <td style="padding: 12px 8px; font-weight: 600; width: 35%; background-color: #f9fafb; border: 1px solid #e5e7eb;">Name</td>
          <td style="padding: 12px 8px; border: 1px solid #e5e7eb;">${name}</td>
        </tr>
        ${
          phone
            ? `
        <tr>
          <td style="padding: 12px 8px; font-weight: 600; background-color: #f9fafb; border: 1px solid #e5e7eb;">Phone</td>
          <td style="padding: 12px 8px; border: 1px solid #e5e7eb;">${phone}</td>
        </tr>`
            : ""
        }
        ${
          email
            ? `
        <tr>
          <td style="padding: 12px 8px; font-weight: 600; background-color: #f9fafb; border: 1px solid #e5e7eb;">Email</td>
          <td style="padding: 12px 8px; border: 1px solid #e5e7eb;">${email}</td>
        </tr>`
            : ""
        }
        ${
          subject
            ? `
        <tr>
          <td style="padding: 12px 8px; font-weight: 600; background-color: #f9fafb; border: 1px solid #e5e7eb;">Subject</td>
          <td style="padding: 12px 8px; border: 1px solid #e5e7eb;">${subject}</td>
        </tr>`
            : ""
        }
        ${
          message
            ? `
        <tr>
          <td style="padding: 12px 8px; font-weight: 600; background-color: #f9fafb; border: 1px solid #e5e7eb;">Message</td>
          <td style="padding: 12px 8px; border: 1px solid #e5e7eb;">${message.replace(
            /\n/g,
            "<br/>"
          )}</td>
        </tr>`
            : ""
        }
      </tbody>
    </table>

    <p style="font-size: 13px; color: #6b7280; margin-top: 32px; text-align: center;">
      This email was sent via the <strong>Contact Us</strong> form on your website.
    </p>
  </div>
`;

    await transporter.sendMail({
      from: email ? `"${name}" <${email}>` : `"${name}" <no-reply@example.com>`,
      to: process.env.SMTP_RECEIVER,
      subject: `Contact Form: ${subject || "No Subject"}`,
      html,
    });

    return NextResponse.json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending mail:", error);
    return NextResponse.json(
      { error: "Email send failed. Try again later." },
      { status: 500 }
    );
  }
}
