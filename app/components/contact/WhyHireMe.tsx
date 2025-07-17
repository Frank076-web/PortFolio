export async function WhyHireMe() {
	return (
		<div className="mt-8 p-6 bg-linear-to-r from-purple-600/20 to-pink-600/20 rounded-lg border border-purple-500/30">
			<h4 className="text-white font-semibold mb-4">
				¿Por qué sumarme a tu equipo?
			</h4>
			<ul className="space-y-2 text-gray-300">
				<li className="flex items-center">
					<span className="text-purple-400 mr-2">✓</span>
					Me integro rápidamente a equipos y flujos de trabajo
					existentes
				</li>
				<li className="flex items-center">
					<span className="text-purple-400 mr-2">✓</span>
					Aprendo rápido y me ajusto a nuevas metodologías o
					tecnologías
				</li>
				<li className="flex items-center">
					<span className="text-purple-400 mr-2">✓</span>
					Código escalable y buenas prácticas
				</li>
				<li className="flex items-center">
					<span className="text-purple-400 mr-2">✓</span>
					Comprometido con mejorar procesos y aportar ideas
				</li>
			</ul>
		</div>
	);
}
