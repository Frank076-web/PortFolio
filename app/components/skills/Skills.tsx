import { tools } from './static/tools';
import { technologies } from './static/technologies';
import { methodologies } from './static/methodologies';
import { TechnologyCard } from './TechnologyCard';
import Image from 'next/image';

export default function Skills() {
	return (
		<section id="habilidades" className="py-20">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
						Mis <span className="text-purple-400">Habilidades</span>
					</h2>
					<div className="w-24 h-1 bg-linear-to-r from-purple-400 to-pink-400 mx-auto" />
				</div>

				<div className="grid lg:grid-cols-2 gap-12">
					<div>
						<h3 className="text-2xl font-semibold text-white mb-8">
							Tecnologías
						</h3>
						<div className="grid grid-cols-2 gap-4">
							{technologies.map((technology) => (
								<TechnologyCard
									key={technology.name}
									technology={technology}
								/>
							))}
						</div>
					</div>

					<div>
						<h3 className="text-2xl font-semibold text-white mb-8">
							Herramientas
						</h3>
						<div className="grid grid-cols-2 gap-4 mb-8">
							{tools.map((tool) => (
								<div
									key={tool.title}
									className="flex gap-2 justify-center items-center p-4 bg-slate-700/50 rounded-lg text-center hover:bg-slate-700 transition-colors duration-300"
								>
									<Image
										src={tool.iconSrc}
										alt={tool.alt}
										width={30}
										height={30}
										className='object-contain'
									/>
									<span className="text-gray-300 font-medium hover:text-white transition-colors">
										{tool.title}
									</span>
								</div>
							))}
						</div>

						<div className="p-6 bg-linear-to-r from-purple-600/20 to-pink-600/20 rounded-lg border border-purple-500/30">
							<h4 className="text-xl font-semibold text-white mb-4">
								Metodologías
							</h4>
							<div className="flex flex-wrap gap-3">
								{methodologies.map((methodology) => (
									<span
										key={methodology}
										className="px-3 py-1 bg-purple-600/30 text-purple-300 rounded-full text-sm hover:bg-purple-600/50 transition-colors"
									>
										{methodology}
									</span>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
