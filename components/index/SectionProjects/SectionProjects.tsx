import { projects } from "../../../utils/profile";
import Projects from "./Projects";

const SectionPorjects = (): JSX.Element => {
    return (
        <section className="section-projects">
            <h2>Proyectos</h2>
            <div className="section-projects__cards">
                <Projects projects={projects} />
            </div>
        </section>
    );
};

export default SectionPorjects;
