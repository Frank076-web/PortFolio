import { Education } from "../../../utils/classesProfile";

interface Props {
    education: Education[];
}

const Educations = ({ education }: Props) => {
    return (
        <>
            {education.map(({ institution, career, duration, description }, index) => (
                <li className="section-experience__studies" key={index}>
                    <h4>{institution}</h4>
                    <div className="container">
                        <h6>
                            {career ? career : null} {duration ? duration : null}
                        </h6>

                        <ul>
                            {Object.keys(description).map((element, index) => (
                                <li
                                    style={{
                                        listStyle: "none",
                                    }}
                                    key={index}
                                >
                                    <p>{description[element]}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </li>
            ))}
        </>
    );
};

export default Educations;
