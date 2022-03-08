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
				<title>Franco Inzerillo</title>
			</Head>

			<Layout>
				<MainIndex />
				<div className="index__skills-experience">
					<SectionSkills />
					<SectionExperience />
				</div>
				<SectionPorjects />
			</Layout>
		</>
	);
};

export default Home;
