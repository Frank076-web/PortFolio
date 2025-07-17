export async function ProfessionalCareer() {
	return (
		<div className="space-y-6">
			<div className="flex items-start space-x-4 p-6 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors">
				<div className="p-3 bg-purple-600 rounded-lg">
					<svg
						className="w-6 h-6 text-white"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
						/>
					</svg>
				</div>
				<div>
					<h4 className="text-xl font-semibold text-white mb-2">
						Desarrollo Frontend Web &amp; Móvil
					</h4>
					<p className="text-gray-300">
						Especializado en Next.js, React, TypeScript, TailwindCSS
						y Flutter para aplicaciones web y móviles escalables.
					</p>
				</div>
			</div>

			<div className="flex items-start space-x-4 p-6 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors">
				<div className="p-3 bg-pink-600 rounded-lg">
					<svg
						className="w-6 h-6 text-white"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M13 10V3L4 14h7v7l9-11h-7z"
						/>
					</svg>
				</div>
				<div>
					<h4 className="text-xl font-semibold text-white mb-2">
						Backend &amp; Sistemas Legacy
					</h4>
					<p className="text-gray-300">
						Experiencia con FastAPI, Python, REST APIs y actualmente
						formándome en tecnologías mainframe como COBOL y DB2.
					</p>
				</div>
			</div>
		</div>
	);
}
