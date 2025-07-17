import { Email } from '../models/email.model';
import { useState } from 'react';
import { EmailTemplate } from '../EmailTemplate';
import { sendEmailAction } from '../action/send-email.action';
import { renderToStaticMarkup } from 'react-dom/server';

type SubmitStatus = 'idle' | 'success' | 'error';

interface SubmitState {
	state: SubmitStatus;
	message?: string;
}

export function useContactForm() {
	const [formData, setFormData] = useState<Email>({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<SubmitState>({
		state: 'idle',
	});

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitStatus({ state: 'idle', message: undefined });

		try {
			const html = renderToStaticMarkup(EmailTemplate(formData));

			const { ok, successMessage, errorMessage } = await sendEmailAction(
				formData,
				renderToStaticMarkup(EmailTemplate(formData))
			);

			if (!ok) {
				setSubmitStatus({ state: 'error', message: errorMessage });
				return;
			}

			setSubmitStatus({ state: 'success', message: successMessage });
		} finally {
			setIsSubmitting(false);

			setTimeout(() => {
				setFormData({ name: '', email: '', subject: '', message: '' });
			}, 4000);
		}
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return { formData, isSubmitting, submitStatus, handleSubmit, handleChange };
}
