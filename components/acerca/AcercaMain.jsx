import { useEffect } from 'react';
import { getAge } from '../../utils/getAge';

const AcercaMain = () => {
	let age = getAge('1995-03-19 03:30:00');

	return (
		<main className="main-acerca">
			<div className="main-acerca__card">
				<div className="main-acerca__card--container">
					<div className="main-acerca__card--title">
						<h1>Quién Soy</h1>
					</div>
					<div className="main-acerca__card--content">
						<img
							src="/images/frank-image.png"
							alt="Image-curriculum"
						/>
						<p>
							Soy Franco Elias Inzerillo, tengo {age} años y soy
							FrontEnd web developer. Me apasiona la tecnología, por
							ello me gusta aprender y poder manejar nuevas
							herramientas. Soy autodidacta, responsable, bueno
							trabajando en equipo, proactivo y con una gran capacidad
							de adaptación.
						</p>
					</div>
				</div>
			</div>
		</main>
	);
};

export default AcercaMain;
