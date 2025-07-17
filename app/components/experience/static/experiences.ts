import { Experience } from '../models/experience.model';

export const experiences: Experience[] = [
	{
		id: 1,
		title: 'Desarrollador Frontend',
		company: 'Optimus Fleet',
		period: 'Marzo 2024 - Julio 2025',
		location: 'Buenos Aires',
		description: [
			'Desarrollo de aplicaciones web escalables con Next.js y Tailwind',
			'Implementación de autenticación personalizada y multilenguaje',
			'Soporte a aplicaciones móviles con Flutter',
			'Colaboración en un entorno ágil con gestión en Jira',
		],
		technologies: ['Next.js', 'Tailwind', 'Flutter', 'Jira'],
		current: false,
	},
	{
		id: 2,
		title: 'Desarrollador Front End',
		company: 'Alkemy',
		period: 'Enero 2022 - Marzo 2022',
		location: 'Buenos Aires - Pasantía laboral',
		description: [
			'Participación en proyectos colaborativos bajo metodología Scrum',
			'Uso de Git y GitHub para control de versiones',
			'Aplicación de buenas prácticas de desarrollo frontend',
		],
		technologies: ['React', 'Git', 'GitHub', 'Scrum'],
		current: false,
	},
	{
		id: 3,
		title: 'Técnico Electrónico',
		company: 'Laboratorios Eléctricos Argentinos',
		period: 'Abril 2016 - Febrero 2024',
		location: 'Buenos Aires',
		description: [
			'Desarrollo de aplicaciones y software',
			'Formación continua y actualización de habilidades técnicas',
			'Implementación y mantenimiento de soluciones de software',
		],
		technologies: ['Software Development', 'Technical Support'],
		current: false,
	},
];
