export async function Description() {
	return (
		<div>
			<h3 className="text-2xl font-semibold text-white mb-6">
				Desarrollador apasionado por la innovación
			</h3>
			<p className="text-gray-300 mb-6">
				Desarrollador Fullstack con experiencia en entornos ágiles y
				tecnologías modernas. Mi trayectoria incluye desarrollo frontend
				con React y Next.js, aplicaciones móviles con Flutter, y
				actualmente me estoy especializando en sistemas mainframe con
				COBOL y DB2.
			</p>
			<p className="text-gray-300 mb-8">
				Apasionado por el aprendizaje continuo, la escritura de código
				limpio y el trabajo en equipo. Con experiencia en metodologías
				ágiles y fuerte interés en sistemas legacy y tecnologías
				críticas empresariales.
			</p>

			<div className="grid grid-cols-3 gap-4 text-center">
				<div className="p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 transition-colors">
					<div className="text-2xl font-bold text-purple-400">3+</div>
					<div className="text-gray-400 text-sm">Años Exp.</div>
				</div>
				<div className="p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 transition-colors">
					<div className="text-2xl font-bold text-purple-400">
						10+
					</div>
					<div className="text-gray-400 text-sm">Proyectos</div>
				</div>
				<div className="p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 transition-colors">
					<div className="text-2xl font-bold text-purple-400">A2</div>
					<div className="text-gray-400 text-sm">Inglés</div>
				</div>
			</div>
		</div>
	);
}
