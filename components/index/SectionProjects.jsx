import { projects } from '../../profile';

const SectionPorjects = () => {
	return (
		<section className="section-projects">
			<h2>Proyectos</h2>
			<div className="section-projects__cards">
				{projects.map(
					({ image, title, description, link }, index) => (
						<div
							className="section-projects__cards__card"
							key={index}
						>
							<img src={image} alt={title} />
							<h3>{title}</h3>
							<p>{description}</p>
							<div className="section-projects__cards__card__link">
								<a href={link} rel="noreferrer" target="_blank">
									Visitar Sitio
								</a>
							</div>
						</div>
					)
				)}
			</div>
		</section>
	);
};

export default SectionPorjects;
