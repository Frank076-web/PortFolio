import { skills } from "../../../utils/profile.config";
import Skills from "./Skills";

const SectionSkills = (): JSX.Element => {
      return (
            <section className="section-skills">
                  <div className="container">
                        <h2>Skills</h2>
                        <Skills skills={skills} />
                  </div>
            </section>
      );
};

export default SectionSkills;
