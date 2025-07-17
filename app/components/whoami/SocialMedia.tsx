import Image from 'next/image';

export async function SocialMedia() {
	return (
		<div className="flex justify-center space-x-6 mb-12">
			<a
				href="https://github.com/Frank076-web"
				className="p-3 bg-gray-800 rounded-full hover:bg-purple-600 transition-colors duration-300 group"
				aria-label="GitHub"
				target="_blank"
			>
				<Image
					src={'icons/github-icon.svg'}
					alt="github-icon"
					width={25}
					height={25}
				/>
			</a>
			<a
				href="https://www.linkedin.com/in/francoeinzerillo"
				className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors duration-300 group"
				aria-label="LinkedIn"
				target="_blank"
			>
				<Image
					src={'icons/linkedin-icon.svg'}
					alt="linkedin-icon"
					width={25}
					height={25}
				/>
			</a>
			<a
				href="mailto:francoeinzerillo@gmail.com"
				className="p-3 bg-gray-800 rounded-full hover:bg-green-600 transition-colors duration-300 group"
				aria-label="Email"
				target="_blank"
			>
				<Image
					src={'icons/mail-icon.svg'}
					alt="mail-icon"
					width={25}
					height={25}
				/>
			</a>
		</div>
	);
}
