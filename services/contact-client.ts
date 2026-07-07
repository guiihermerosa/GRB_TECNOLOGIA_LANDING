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
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const error = await response.json().catch(() => null);
    throw new Error(error?.message ?? 'Erro no envio do formulário');
  }

  return response.json();
}
