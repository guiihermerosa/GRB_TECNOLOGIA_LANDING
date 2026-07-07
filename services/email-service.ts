'use server';

import nodemailer from 'nodemailer';
import { sanitizeInput } from '@/utils/validators';

const smtpHost = process.env.SMTP_HOST;
const smtpPort = Number(process.env.SMTP_PORT || '587');
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;
const senderEmail = process.env.SENDER_EMAIL || 'contato@grbtecnologia.com.br';
const recipientEmail = process.env.RECIPIENT_EMAIL || 'grbtecnologia.cm@gmail.com';

export type ContactPayload = {
  name: string;
  company: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  subject: string;
  message: string;
};

export async function sendContactEmail(payload: ContactPayload) {
  if (!smtpHost || !smtpUser || !smtpPass) {
    throw new Error('SMTP configuration is incompleta. Verifique as variáveis de ambiente.');
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
    ...payload,
    name: sanitizeInput(payload.name),
    company: sanitizeInput(payload.company),
    email: sanitizeInput(payload.email),
    phone: sanitizeInput(payload.phone),
    city: sanitizeInput(payload.city),
    state: sanitizeInput(payload.state),
    subject: sanitizeInput(payload.subject),
    message: sanitizeInput(payload.message)
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
Mensagem: ${sanitized.message}`,
    html: `<div style="font-family: Inter, sans-serif; color: #0f172a;">
      <h2>Novo contato via landing page GRB Tecnologia</h2>
      <p><strong>Nome:</strong> ${sanitized.name}</p>
      <p><strong>Empresa:</strong> ${sanitized.company}</p>
      <p><strong>Email:</strong> ${sanitized.email}</p>
      <p><strong>Telefone:</strong> ${sanitized.phone}</p>
      <p><strong>Cidade:</strong> ${sanitized.city}</p>
      <p><strong>Estado:</strong> ${sanitized.state}</p>
      <p><strong>Assunto:</strong> ${sanitized.subject}</p>
      <p><strong>Mensagem:</strong><br/>${sanitized.message}</p>
    </div>`
  });
}
