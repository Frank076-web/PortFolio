import { Skill } from "../../../utils/classesProfile";

interface Props {
    skills: Skill[];
}

const Skills = ({ skills }: Props): JSX.Element => {
    return (
        <>
            {skills.map(({ name, image, alt, level }, index) => (
                <div className="section-skills__skills" key={index}>
                    <div className="section-skills__skills--logo">
                        <h5>{name}</h5>
                        <img src={image} alt={alt} />
                    </div>
                </div>
            ))}
        </>
    );
};

export default Skills;
