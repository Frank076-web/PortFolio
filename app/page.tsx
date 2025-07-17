import About from './components/about/About';
import WhoAmI from './components/whoami/WhoAmI';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
// import Projects from "./components/Projects";
import Experience from './components/experience/Experience';
import Navigation from './components/navigation/Navigation';
import { Footer } from './components/Footer';

export default function Home() {
	return (
		<>
			<header>
				<Navigation />
			</header>
			<main>
				<WhoAmI />
				<About />
				<Experience />
				<Skills />
				{/* <Projects /> */}
				<Contact />
			</main>
			<footer className="mt-20 pt-8 border-t border-slate-700 text-center py-10">
				<Footer />
			</footer>
		</>
	);
}
