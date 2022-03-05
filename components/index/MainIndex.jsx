import Image from 'next/image';

const MainIndex = () => {
	return (
		<main>
			<div className="row">
				<div className="col-md-12">
					<div className="card card-body bg-secondary text-light">
						<div className="row">
							<div className="col-md-4 text-center">
								<Image
									src="/images/frank-image.png"
									alt="Image-curriculum"
									width={300}
									height={300}
									objectFit="contain"
								/>
							</div>
							<div className="col-md-8">
								<h1>Franco Inzerillo</h1>
								<h4>Desarrollador Web FrontEnd</h4>
								<h2 className="text-primary mt-5">Contactame</h2>
								<ul>
									<li>Móvil: (011) 1533260503</li>
									<li>
										Correo Electrónico: francoeinzerillo@gmail.com
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default MainIndex;
