'use server';

import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { sanitizeInput } from '@/utils/validators';

const smtpHost = process.env.SMTP_HOST;
const smtpPort = Number(process.env.SMTP_PORT || '587');
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;
const senderEmail = process.env.SENDER_EMAIL || 'contato@grbtecnologia.com.br';
const recipientEmail = process.env.RECIPIENT_EMAIL || 'grbtecnologia.cm@gmail.com';

export async function POST(request: NextRequest) {
  const data = await request.json();

  if (!data?.name || !data?.email || !data?.phone || !data?.subject || !data?.message) {
    return NextResponse.json({ message: 'Campos obrigatórios faltando.' }, { status: 400 });
  }

  if (!smtpHost || !smtpUser || !smtpPass) {
    return NextResponse.json({ message: 'Configuração SMTP incompleta.' }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass
    }
  });

  const sanitized = {
    name: sanitizeInput(data.name),
    company: sanitizeInput(data.company || ''),
    email: sanitizeInput(data.email),
    phone: sanitizeInput(data.phone),
    city: sanitizeInput(data.city || ''),
    state: sanitizeInput(data.state || ''),
    subject: sanitizeInput(data.subject),
    message: sanitizeInput(data.message)
  };

  await transporter.sendMail({
    from: `${sanitized.name} <${senderEmail}>`,
    to: recipientEmail,
    subject: `Novo contato GRB Tecnologia: ${sanitized.subject}`,
    text: `Nome: ${sanitized.name}
Empresa: ${sanitized.company}
Email: ${sanitized.email}
Telefone: ${sanitized.phone}
Cidade: ${sanitized.city}
Estado: ${sanitized.state}
Assunto: ${sanitized.subject}
Mensagem: ${sanitized.message}`
  });

  return NextResponse.json({ success: true });
}
