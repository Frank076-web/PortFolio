import { education, experience } from "../../../utils/profile.config";
import Educations from "./Educations";
import Experiences from "./Experience";

const SectionExperience = (): JSX.Element => {
      return (
            <section className="section-experience">
                  <div className="container">
                        <h2>Experiencia Profesional</h2>
                        <ul>
                              <Experiences experience={experience} />
                        </ul>

                        <h2>Historial Académico</h2>
                        <ul>
                              <Educations education={education} />
                        </ul>

                        <div className="section-experience__interest">
                              <h2>Intereses</h2>
                              <p>Desarrollo Web FlullStack</p>
                              <p>Desarrollo API rest</p>
                              <p>Desarrollo Móvil</p>
                        </div>
                  </div>
            </section>
      );
};

export default SectionExperience;
