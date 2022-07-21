import React from "react";
import { Project } from "../../../utils/classesProfile";

interface Props {
    projects: Project[];
}

const Projects = ({ projects }: Props): JSX.Element => {
    return (
        <>
            {projects.map(({ image, title, description, link }, index) => (
                <div className="section-projects__cards__card" key={index}>
                    <img src={image} alt={title} />
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <div className="section-projects__cards__card__link">
                        <a href={link} rel="noreferrer" target="_blank">
                            Visitar Sitio
                        </a>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Projects;
