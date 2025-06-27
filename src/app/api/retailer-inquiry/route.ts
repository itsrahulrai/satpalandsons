// src/app/api/retailer-inquiry/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { retailerName, storeName, phone, email, address, message } = await req.json();

  if (!retailerName || !phone) {
    return NextResponse.json({ error: 'Name and Phone are required.' }, { status: 400 });
  }

 const html = `
  <div style="font-family: 'Inter', sans-serif; max-width: 640px; margin: auto; padding: 24px; background-color: #ffffff; border-radius: 12px; border: 1px solid #e5e7eb;">
    <h2 style="font-size: 20px; font-weight: 700; color: #1f2937; border-bottom: 1px solid #e5e7eb; padding-bottom: 12px; margin-bottom: 24px;">
      📩 Retailer Inquiry Received
    </h2>

    <table style="width: 100%; font-size: 14px; color: #111827; border-collapse: collapse; border: 1px solid #e5e7eb;">
      <thead>
        <tr style="background-color: #f9fafb;">
          <th colspan="2" style="text-align: left; padding: 12px; font-size: 15px; font-weight: 600; color: #374151; border-bottom: 1px solid #e5e7eb;">
            Retailer Details
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="padding: 12px; font-weight: 500; background-color: #f9fafb; border-bottom: 1px solid #e5e7eb;">Name</td>
          <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">${retailerName}</td>
        </tr>
        <tr>
          <td style="padding: 12px; font-weight: 500; background-color: #f9fafb; border-bottom: 1px solid #e5e7eb;">Phone</td>
          <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">${phone}</td>
        </tr>
        ${storeName ? `
          <tr>
            <td style="padding: 12px; font-weight: 500; background-color: #f9fafb; border-bottom: 1px solid #e5e7eb;">Store Name</td>
            <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">${storeName}</td>
          </tr>` : ''}
        ${email ? `
          <tr>
            <td style="padding: 12px; font-weight: 500; background-color: #f9fafb; border-bottom: 1px solid #e5e7eb;">Email</td>
            <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">${email}</td>
          </tr>` : ''}
        ${address ? `
          <tr>
            <td style="padding: 12px; font-weight: 500; background-color: #f9fafb; border-bottom: 1px solid #e5e7eb;">Address</td>
            <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">${address}</td>
          </tr>` : ''}
        ${message ? `
          <tr>
            <td style="padding: 12px; font-weight: 500; background-color: #f9fafb;">Message</td>
            <td style="padding: 12px;">${message.replace(/\n/g, '<br/>')}</td>
          </tr>` : ''}
      </tbody>
    </table>

    <p style="font-size: 13px; color: #6b7280; text-align: center; margin-top: 32px;">
      This message was submitted from your website’s <strong>Retailer Enquiry Form</strong>.
    </p>
  </div>
`;


  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${retailerName}" <no-reply@example.com>`,
      to: process.env.SMTP_RECEIVER,
      subject: `Retailer Inquiry: ${retailerName}`,
      html,
    });

    return NextResponse.json({ message: 'Inquiry sent successfully!' });
  } catch (err) {
    console.error('Email error:', err);
    return NextResponse.json({ error: 'Failed to send email. Please try again.' }, { status: 500 });
  }
}
