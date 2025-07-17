'use client';

import { Input } from '../input/Input';
import { InputTextArea } from '../input/InputTextArea';
import { useContactForm } from './hooks/useContactForm';

export function ContactForm() {
	const { formData, submitStatus, isSubmitting, handleSubmit, handleChange } =
		useContactForm();

	return (
		<form onSubmit={handleSubmit} className="space-y-6">
			<div className="grid md:grid-cols-2 gap-6">
				<div>
					<label
						htmlFor="name"
						className="block text-white font-medium mb-2"
					>
						Nombre *
					</label>
					<Input
						type="text"
						id="name"
						name="name"
						value={formData.name}
						onChange={handleChange}
						required
						placeholder="Tu nombre"
					/>
				</div>
				<div>
					<label
						htmlFor="email"
						className="block text-white font-medium mb-2"
					>
						Email *
					</label>
					<Input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						required
						placeholder="tu@email.com"
					/>
				</div>
			</div>

			<div>
				<label
					htmlFor="subject"
					className="block text-white font-medium mb-2"
				>
					Asunto *
				</label>
				<Input
					type="text"
					id="subject"
					name="subject"
					value={formData.subject}
					onChange={handleChange}
					required
					placeholder="¿De qué quieres hablar?"
				/>
			</div>

			<div>
				<label
					htmlFor="message"
					className="block text-white font-medium mb-2"
				>
					Mensaje *
				</label>
				<InputTextArea
					id="message"
					name="message"
					value={formData.message}
					onChange={handleChange}
					required
					rows={6}
					placeholder="Cuéntame sobre tu proyecto..."
				/>
			</div>

			<button
				type="submit"
				disabled={isSubmitting}
				className="w-full px-8 py-4 bg-linear-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
			>
				{isSubmitting ? (
					<>
						<div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
						<span>Enviando...</span>
					</>
				) : (
					<span>Enviar Mensaje</span>
				)}
			</button>

			{submitStatus.state === 'success' && (
				<div className="p-4 bg-green-600/20 border border-green-600/30 rounded-lg">
					<p className="text-green-400 text-center">
						{submitStatus.message}
					</p>
				</div>
			)}

			{submitStatus.state === 'error' && (
				<div className="p-4 bg-red-600/20 border border-red-600/30 rounded-lg">
					<p className="text-red-400 text-center">
						{submitStatus.message}
					</p>
				</div>
			)}
		</form>
	);
}
