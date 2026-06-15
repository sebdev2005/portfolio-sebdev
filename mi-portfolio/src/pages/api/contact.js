import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export async function POST({ request }) {
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

  return new Response('OK');
}