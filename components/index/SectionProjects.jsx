import { projects } from '../../profile';

const SectionPorjects = () => {
	return (
		<section className="row">
			<div className="col-md-12">
				<div className="card card-body bg-dark">
					<div className="row">
						<div className="col-md-12">
							<h2 className="text-center text-light">Projectos</h2>
						</div>

						{projects.map(
							({ image, title, description, link }, index) => (
								<div className="col-md-4 py-2" key={index}>
									<div className="card text-center h-100">
										<div className="overflow">
											<img
												className="card-img-top"
												src={image}
												alt={title}
											/>
										</div>
										<div className="card-body">
											<h3>{title}</h3>
											<p>{description}</p>
											<a href={link} rel="noreferrer" target="_blank">
												Ver Sitio
											</a>
										</div>
									</div>
								</div>
							)
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default SectionPorjects;
