import { education, experience } from '../../profile';

const SectionExperience = () => {
	return (
		<section className="section-experience">
			<h2>Experiencia Profesional</h2>
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

			<h2>Historial Académico</h2>
			<ul>
				{education.map(
					({ institution, career, duration, description }, index) => (
						<li key={index}>
							<h4>
								<bold>{institution}</bold>
							</h4>
							<h6>
								{career ? career : null} {duration ? duration : null}
							</h6>
							<ul>
								{Object.keys(description).map((element, index) => (
									<li
										style={{
											listStyle: 'none'
										}}
										key={index}
									>
										<p>{description[element]}</p>
									</li>
								))}
							</ul>
						</li>
					)
				)}

				<h2>Intereses</h2>
				<div className="section-experience__interest">
					<p>Desarrollo Web FrontEnd</p>
					<p>Desarrollo Web BackEnd</p>
				</div>
			</ul>
		</section>
	);
};

export default SectionExperience;
