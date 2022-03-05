import Head from 'next/head';
import MainIndex from '../components/index/MainIndex';
import SectionExperience from '../components/index/SectionExperience';
import SectionPorjects from '../components/index/SectionProjects';
import SectionSkills from '../components/index/SectionSkills';
import Layout from '../components/Layout/Layout';

const Home = () => {
	return (
		<>
			<Head>
				<title>My portfolio</title>
			</Head>

			<Layout>
				<div className="container p-4">
					<MainIndex />
					<div className="row py-2">
						<SectionSkills />
						<SectionExperience />
					</div>
					<SectionPorjects />
				</div>
			</Layout>
		</>
	);
};

export default Home;
