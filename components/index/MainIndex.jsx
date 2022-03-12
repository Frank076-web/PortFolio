import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

const MainIndex = () => {
	const animatedLink = useRef();
	useEffect(() => {
		animatedLink.current.classList.toggle('animation-bounce');
		const interval = setInterval(() => {
			animatedLink.current.classList.toggle('animation-bounce');
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<main className="main">
			<div className="main__image">
				<img src="/images/frank-image.png" alt="Imagen autor" />
			</div>

			<div className="main__text-container">
				<div className="main__title">
					<h1>Franco Elias Inzerillo</h1>
					<h4 ref={animatedLink}>
						<Link href="/acerca">Desarrollador Web FrontEnd</Link>
					</h4>
				</div>

				<div className="main__contact-media">
					<div className="main__contact-media__contact">
						<h2>Contactame:</h2>
						<p>Móvil: (011) 1533260503</p>
						<p>Correo Electrónico: francoeinzerillo@gmail.com</p>
					</div>
					<div className="main__contact-media__social">
						<h2>Redes Sociales</h2>
						<div className="main__contact-media__social__images">
							<a href="https://ultramsg.com/m/3vIWHnu">
								<img src="/images/whatsapp.svg" alt="whatsapp" />
							</a>
							<a href="mailto:francoeinzerillo@gmai.com?">
								<img src="/images/gmail.svg" alt="gmail" />
							</a>
							<a
								href="https://www.linkedin.com/in/franco-elias-inzerillo-9b1a37163"
								rel="noreferrer"
								target="_blank"
							>
								<img src="/images/linkedin.svg" alt="linkedin" />
							</a>
							<a
								href="https://github.com/Frank076-web"
								rel="noreferrer"
								target="_blank"
							>
								<img src="/images/gitHub.png" alt="linkedin" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default MainIndex;
