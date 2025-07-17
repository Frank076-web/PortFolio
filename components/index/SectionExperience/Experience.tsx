import { Experience } from "../../../utils/classesProfile";

interface Props {
    experience: Experience[];
}

const Experiences = ({ experience }: Props): JSX.Element => {
    return (
        <>
            {experience.map(({ title, company, duration, description }, index) => (
                <li key={index} className="section-experience__experience">
                    <h4>{title}</h4>
                    <div className="container">
                        <h6>
                            {company} | {duration}
                        </h6>
                        <ul>
                            {typeof description === "object" ? (
                                Object.keys(description).map((element, index) => (
                                    <li
                                        style={{
                                            listStyle: "circle",
                                        }}
                                        key={index}
                                    >
                                        <p>{description[element]}</p>
                                    </li>
                                ))
                            ) : (
                                <p>{description}</p>
                            )}
                        </ul>
                    </div>
                </li>
            ))}
        </>
    );
};

export default Experiences;
