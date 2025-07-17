import Image from 'next/image';

export async function ContactInformation() {
	return (
		<>
			<h3 className="text-2xl font-semibold text-white mb-8">
				Información de Contacto
			</h3>

			<div className="space-y-6">
				<div className="flex items-center space-x-4 p-4 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors">
					<div className="p-3 bg-purple-600 rounded-lg">
						<Image
							src="icons/mail-icon.svg"
							alt="mail-icon"
							width={25}
							height={25}
						/>
					</div>
					<div>
						<h4 className="text-white font-semibold">Email</h4>
						<a
							href="mailto:francoeinzerillo@gmail.com"
							className="text-gray-300 hover:text-purple-400 transition-colors"
						>
							francoeinzerillo@gmail.com
						</a>
					</div>
				</div>

				<div className="flex items-center space-x-4 p-4 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors">
					<div className="p-3 bg-purple-600 rounded-lg">
						<Image
							src="icons/phone-icon.svg"
							alt="mail-icon"
							width={25}
							height={25}
						/>
					</div>
					<div>
						<h4 className="text-white font-semibold">Teléfono</h4>
						<a
							href="tel:+5491133260503"
							className="text-gray-300 hover:text-purple-400 transition-colors"
						>
							+54 9(011) 3326-0503
						</a>
					</div>
				</div>

				<div className="flex items-center space-x-4 p-4 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors">
					<div className="p-3 bg-purple-600 rounded-lg">
						<Image
							src="icons/location-icon.svg"
							alt="mail-icon"
							width={25}
							height={25}
						/>
					</div>
					<div>
						<h4 className="text-white font-semibold">Ubicación</h4>
						<p className="text-gray-300">Buenos Aires, Argentina</p>
					</div>
				</div>

				<div className="flex items-center space-x-4 p-4 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors">
					<div className="p-3 bg-purple-600 rounded-lg">
						<Image
							src="icons/linkedin-icon.svg"
							alt="linkedin-icon"
							width={25}
							height={25}
						/>
					</div>
					<div>
						<h4 className="text-white font-semibold">LinkedIn</h4>
						<a
							href="https://www.linkedin.com/in/francoeinzerillo"
							className="text-gray-300 hover:text-purple-400 transition-colors"
							target="_blank"
							rel="noopener noreferrer"
						>
							Franco Elias Inzerillo
						</a>
					</div>
				</div>
			</div>
		</>
	);
}
