'use client'

import { Email } from './models/email.model';

export function EmailTemplate({ email, name, subject, message }: Email) {
	return (
		<div className="max-w-lg mx-auto p-6 bg-gray-100 rounded-lg font-sans text-gray-800">
			<h2 className="text-xl font-bold text-blue-600 mb-4">
				Nuevo mensaje desde tu portfolio
			</h2>

			<div className="bg-white rounded-lg shadow-sm p-4 space-y-3">
				<div>
					<p className="text-gray-500 text-sm">Nombre:</p>
					<p className="font-semibold">{name}</p>
				</div>
				<div>
					<p className="text-gray-500 text-sm">Email:</p>
					<p className="font-semibold">{email}</p>
				</div>
				<div>
					<p className="text-gray-500 text-sm">Asunto:</p>
					<p className="font-semibold">{subject}</p>
				</div>
				<div>
					<p className="text-gray-500 text-sm mb-1">Mensaje:</p>
					<p className="bg-gray-50 border border-gray-200 rounded p-3 whitespace-pre-line">
						{message}
					</p>
				</div>
			</div>
		</div>
	);
}
