import Image from 'next/image';
import { skills } from '../../profile';

const SectionSkills = () => {
	return (
		<section className="col-md-4">
			<div className="card bg-light h-100">
				<div className="card-body">
					<h1 className="text-primary">Skills</h1>

					{skills.map(({ name, image, alt, level }, index) => (
						<div className="py-4" key={index}>
							<Image src={image} alt={alt} width={50} height={50} />
							<h5>{name}</h5>
							<div className="progress">
								<div
									className="progress-bar"
									role="progressbar"
									style={{ width: `${level}` }}
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default SectionSkills;
