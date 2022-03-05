import { education, experience } from '../../profile';

const SectionExperience = () => {
	return (
		<section className="col-md-8">
			<div className="card bg-light">
				<div className="card-body">
					<h2 className="text-primary">Experiencia Profesional</h2>
					<ul>
						{experience.map(
							({ title, company, duration, description }, index) => (
								<li key={index}>
									<h4>
										<bold>{title}</bold>
									</h4>
									<h6>
										{company} | {duration}
									</h6>
									<p>{description}</p>
								</li>
							)
						)}
					</ul>

					<h2 className="text-primary">Historial Académico</h2>
					<ul>
						{education.map(
							(
								{ institution, career, duration, description },
								index
							) => (
								<li key={index}>
									<h4>
										<bold>{institution}</bold>
									</h4>
									<h6>
										{career ? career : null}{' '}
										{duration ? duration : null}
									</h6>
									<ul>
										{Object.keys(description).map(
											(element, index) => (
												<li
													style={{
														listStyle: 'none'
													}}
													key={index}
												>
													<p>{description[element]}</p>
												</li>
											)
										)}
									</ul>
								</li>
							)
						)}

						<h2 className="text-primary">Intereses</h2>
						<ul>
							<li style={{ listStyle: 'none' }}>
								<p>Desarrollo Web FrontEnd</p>
							</li>
							<li style={{ listStyle: 'none' }}>
								<p>Desarrollo Web BackEnd</p>
							</li>
						</ul>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default SectionExperience;
