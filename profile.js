import { Skill, Experience, Education, Project } from "./utils/classesProfile";

export const skills = [
    new Skill("Html", "HTML5.png", "html", "90%"),
    new Skill("Css", "CSS3.png", "css", "85%"),
    new Skill("Javascript", "Javascript.png", "javascript", "90%"),
    new Skill("React", "REACT.png", "react", "90%"),
    new Skill("Sass", "Sass.png", "sass", "80%"),
    new Skill("Java", "java.png", "java", "40%"),
    new Skill("NextJS", "NextJs.png", "nextjs", "30%"),
    new Skill("Git", "git.png", "git", "50%"),
];

export const experience = [
    //Experience => title, company, duration, description
    new Experience("Frontend Developer React", "Alkemy", "Enero-2022 Hasta el presente", ["Simulación de trabajo real en equipo.", "Manejo de repositorios Git con Github.", "Metodologías Ágiles (Scrum).", "Uso de la herramienta Jira"]),
    new Experience(
        "Técnico Electrónico",
        "Laboratorios Eléctricos Argentinos S.A",
        "2016-Hasta el presente",
        "Reparación, verificación y asistencia técnica de	equipos cable módem, decodificadores de CATV (analógicos y digitales). Experiencia en trabajo individual, en equipo y línea de producción.	Reparaciones a nivel soldadura superficial SMD",
    ),
    new Experience("Tecnico Electrónico", "STILUX. Electrónica industrial", "Mayo-2015 Julio-2015", "Montaje y soldado de componentes electrónicos. Empleado en pasantías por 200 horas."),
];

export const education = [
    //Education => institution, career, duration, description
    new Education("UDEMY", "", "", ["Desarrollo web HTML, CSS, Javascript.", "Javascript Moderno.", "React.", "Máster completo en Java."]),
    new Education("Autodidacta", "", "", ["Plataformas como youtube.", "Leyendo documentación oficial."]),
    new Education("Instituto Parroquial San Juan XXIII", "Técnico Electrónico", "2010-2015", ["Análisis, Medición y calculos de circuitos electrónicos.", "Programación en C y microcontroladores."]),
];

export const projects = [
    //Projects => image, title, description, link
    new Project("/images/portada somos mas.png", "Somos Más", "Página web para la ong Somos Más, centro de ayuda comunitaria", "https://ongsomosmasfrank076.netlify.app"),
    new Project("/images/marvel.jpg", "Buscador Héroes Marvel", "Página web buscador de heroes , armá tu equipo.", "https://buscadorheroesalkemy.netlify.app"),
    new Project("/images/where-in-the-world.jpg", "Buscador Países", "Página web para buscar países de todo el mundo", "https://where-in-the-world-frank076web.netlify.app/"),
];
