import { Description } from './Description';
import { ProfessionalCareer } from './ProfesionalCareer';

export default function About() {
	return (
		<section
			id="about"
			className="py-20 bg-slate-800/50 min-h-screen flex items-center"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Title */}
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
						Sobre <span className="text-purple-400">Mí</span>
					</h2>
					<div className="w-24 h-1 bg-linear-to-r from-purple-400 to-pink-400 mx-auto"></div>
				</div>

				<div className="grid md:grid-cols-2 gap-12 items-center">
					{/* Description */}
					<Description />

					{/* Profesional Career */}
					<ProfessionalCareer />
				</div>
			</div>
		</section>
	);
}
