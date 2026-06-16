// src/pages/api/contact.js
import { Resend } from 'resend';

export async function POST({ request }) {
  const resend = new Resend(import.meta.env.RESEND_API_KEY); // 👈 aquí adentro

  const data = await request.formData();

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'ssantacruznavarro@gmail.com',
    subject: 'Nuevo mensaje desde portfolio',
    html: `
      <p>Nombre: ${data.get('name')}</p>
      <p>Email: ${data.get('email')}</p>
      <p>Mensaje: ${data.get('message')}</p>
    `
  });

  return new Response(JSON.stringify({ ok: true }), {
  status: 200,
  headers: { 'Content-Type': 'application/json' }
});
}