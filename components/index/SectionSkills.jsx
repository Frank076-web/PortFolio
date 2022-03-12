import { skills } from '../../profile';

const SectionSkills = () => {
	return (
		<section className="section-skills">
			<div className="container">
				<h2>Skills</h2>

				{skills.map(({ name, image, alt, level }, index) => (
					<div className="section-skills__skills" key={index}>
						<div className="section-skills__skills--logo">
							<h5>{name}</h5>
							<img src={image} alt={alt} />
						</div>
						<div className="section-skills__progressbar">
							<div
								className="section-skills__progressbar__bar"
								style={{ width: `${level}` }}
							></div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default SectionSkills;
