import { Hero } from './Hero';
import { SocialMedia } from './SocialMedia';
import { WritingText } from './WritingText';

export default function WhoAmI() {
	return (
		<section
			id="init"
			className="min-h-screen flex items-center justify-center relative overflow-hidden"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
				{/* Hero Image */}
				<Hero />

				{/* Title */}
				<h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
					Hola, soy{' '}
					<span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-400">
						Franco Elias Inzerillo
					</span>
				</h1>

				<WritingText />

				<p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
					Desarrollador Fullstack con experiencia en entornos ágiles y
					tecnologías modernas como Next.js, Flutter y TypeScript.
					Actualmente ampliando mis conocimientos hacia el ecosistema
					mainframe con COBOL, JCL y DB2.
				</p>

				<SocialMedia />

				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					{/* <a
						href="#proyectos"
						className="px-8 py-4 bg-linear-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
					>
						Ver Proyectos
					</a> */}
					<a
						href="#contacto"
						className="px-8 py-4 border-2 border-purple-400 text-purple-400 rounded-full font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
					>
						Contáctame
					</a>
				</div>
			</div>
		</section>
	);
}
