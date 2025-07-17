import { WhyHireMe } from './WhyHireMe';
import { ContactForm } from './ContactForm';
import { ContactInformation } from './ContactInformation';

export default function Contact() {
	return (
		<section id="contacto" className="py-20">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Title */}
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
						Hablemos <span className="text-purple-400">Juntos</span>
					</h2>
					<div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6"></div>
					<p className="text-gray-300 text-lg max-w-2xl mx-auto">
						¿Buscas un profesional para unirte a tu equipo? Me
						encantaría conocer más sobre las oportunidades en tu
						compañía y cómo puedo contribuir con mis habilidades.
						¡Hablemos!
					</p>
				</div>

				<div className="grid lg:grid-cols-2 gap-12">
					<div>
						{/* Contact Information */}
						<ContactInformation />

						{/* Why Hire Me? */}
						<WhyHireMe />
					</div>

					<ContactForm />
				</div>
			</div>
		</section>
	);
}
