import { education, experience } from '../../profile';

const SectionExperience = () => {
	return (
		<section className="section-experience">
			<div className="container">
				<h2>Experiencia Profesional</h2>
				<ul>
					{experience.map(
						({ title, company, duration, description }, index) => (
							<li
								key={index}
								className="section-experience__experience"
							>
								<h4>
									<bold>{title}</bold>
								</h4>
								<div className="container">
									<h6>
										{company} | {duration}
									</h6>
									<ul>
										{typeof description === 'object' ? (
											Object.keys(description).map(
												(element, index) => (
													<li
														style={{
															listStyle: 'circle'
														}}
														key={index}
													>
														<p>{description[element]}</p>
													</li>
												)
											)
										) : (
											<p>{description}</p>
										)}
									</ul>
								</div>
							</li>
						)
					)}
				</ul>

				<h2>Historial Académico</h2>
				<ul>
					{education.map(
						(
							{ institution, career, duration, description },
							index
						) => (
							<li className="section-experience__studies" key={index}>
								<h4>{institution}</h4>
								<div className="container">
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
								</div>
							</li>
						)
					)}
				</ul>

				<div className="section-experience__interest">
					<h2>Intereses</h2>
					<p>Desarrollo Web FrontEnd</p>
					<p>Desarrollo Web BackEnd</p>
				</div>
			</div>
		</section>
	);
};

export default SectionExperience;
