// src/app/api/send-inquiry/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, phone, message = "", productName } = await req.json();

  if (!name || !phone || !productName) {
    return NextResponse.json(
      { message: "Missing required fields" },
      { status: 400 }
    );
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

    await transporter.sendMail({
      from: `"Sat Pal & Sons Inquiry" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_RECEIVER,
      subject: `New Inquiry: ${productName}`,
     html: `
  <div style="font-family: 'Segoe UI', Tahoma, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px; padding: 24px; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
    <h2 style="color: #111827; font-size: 22px; margin-bottom: 20px; border-bottom: 1px solid #e5e7eb; padding-bottom: 10px;">
      📩 Product Inquiry - Sat Pal & Sons
    </h2>

    <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
      <tbody>
        <tr style="border-bottom: 1px solid #f1f5f9;">
          <td style="padding: 12px 8px; font-weight: 600; color: #1f2937;"> Product</td>
          <td style="padding: 12px 8px; color: #374151;">${productName}</td>
        </tr>
        <tr style="border-bottom: 1px solid #f1f5f9;">
          <td style="padding: 12px 8px; font-weight: 600; color: #1f2937;">Name</td>
          <td style="padding: 12px 8px; color: #374151;">${name}</td>
        </tr>
        <tr style="border-bottom: 1px solid #f1f5f9;">
          <td style="padding: 12px 8px; font-weight: 600; color: #1f2937;">Phone</td>
          <td style="padding: 12px 8px; color: #374151;">${phone}</td>
        </tr>
        ${
          message
            ? `
        <tr style="border-bottom: 1px solid #f1f5f9;">
          <td style="padding: 12px 8px; font-weight: 600; color: #1f2937;">Message</td>
          <td style="padding: 12px 8px; color: #374151;">${message}</td>
        </tr>
        `
            : ""
        }
      </tbody>
    </table>

    <p style="font-size: 13px; color: #6b7280; text-align: center; margin-top: 30px;">
      — Sent via <strong>Sat Pal & Sons</strong>  Inquiry Form
    </p>
  </div>
`,

    });

    return NextResponse.json({ message: "Inquiry sent successfully." });
  } catch (err: any) {
    console.error("❌ Email send error:", err);
    return NextResponse.json(
      { message: "Failed to send inquiry." },
      { status: 500 }
    );
  }
}
