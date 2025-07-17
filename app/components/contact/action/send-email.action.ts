'use server';

import { Email } from '../models/email.model';
import { Resend } from 'resend';

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const SUCCESS_MESSAGE = '¡Mensaje enviado correctamente! Te responderé pronto.';
const ERROR_MESSAGE =
	'Ups, hubo un problema al enviar el mensaje. Podés intentarlo más tarde o escribirme directamente a francoeinzerillo@gmail.com. ¡Gracias por tu paciencia!';

export async function sendEmailAction(
	emailBody: Email,
	html: string
): Promise<{ ok: boolean; errorMessage?: string; successMessage?: string }> {
	const resend = new Resend(RESEND_API_KEY);

	try {
		const { data, error } = await resend.emails.send({
			from: 'onboarding@resend.dev',
			to: ['francoeinzerillo@gmail.com'],
			subject: emailBody.subject,
			html,
		});

		if (error) {
			return { ok: false, errorMessage: ERROR_MESSAGE };
		}

		return { ok: true, successMessage: SUCCESS_MESSAGE };
	} catch (error) {
		return { ok: false, errorMessage: ERROR_MESSAGE };
	}
}
