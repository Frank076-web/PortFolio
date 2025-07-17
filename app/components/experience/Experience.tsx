import { educations } from './static/educations';
import { experiences } from './static/experiences';
import { EducationCard } from './EducationCard';
import { ExperienceCard } from './ExperienceCard';

export default function Experience() {
	return (
		<section id="experiencia" className="py-20 bg-slate-800/50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					{/* Title */}
					<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
						Mi <span className="text-purple-400">Trayectoria</span>
					</h2>
					<div className="w-24 h-1 bg-linear-to-r from-purple-400 to-pink-400 mx-auto"></div>
				</div>

				<div className="grid lg:grid-cols-2 gap-12">
					{/* Work Experience */}
					<div>
						<h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
							<div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-3">
								<span className="text-white text-sm">💼</span>
							</div>
							Experiencia Laboral
						</h3>

						<div className="space-y-6">
							{experiences.map((exp, i) => (
								<div key={exp.id} className="relative">
									{i !== experiences.length - 1 && (
										<span className="absolute left-6 top-16 w-0.5 h-full bg-slate-600" />
									)}
									<ExperienceCard experience={exp} />
								</div>
							))}
						</div>
					</div>

					{/* Training */}
					<div>
						<h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
							<div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center mr-3">
								<span className="text-white text-sm">🎓</span>
							</div>
							Formación
						</h3>

						<div className="space-y-6">
							{educations.map((edu, i) => (
								<div key={i} className="relative">
									{i !== educations.length - 1 && (
										<div className="absolute left-6 top-16 w-0.5 h-full bg-slate-600"/>
									)}
									<EducationCard education={edu} />
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
