import { Experience } from '../models/experience.model';

export const experiences: Experience[] = [
	{
		id: 1,
		title: 'Desarrollador Frontend',
		company: 'Optimus Fleet',
		period: 'Marzo 2024 - Julio 2025',
		location: 'Buenos Aires',
		description: [
			`
				Desarrollo móvil con Flutter:
				Creación de aplicaciones cross-platform (iOS/Android) con
				Flutter Framework, implementando arquitecturas limpias
				(Clean Architecture, Riverpod) y optimización de rendimiento.
				Integración de APIs RESTful/GraphQL para funcionalidades
				como autenticación personalizada (JWT, OAuth), gestión de
				usuarios.
			`,
			`
				Desarrollo web con Next.js:
				Construcción de aplicaciones web escabables y SSR (Server-
				Side Rendering) usando Next.js, React Hooks y Tailwind CSS
				para interfaces responsivas y modernas.
				Implementación de rutas dinámicas, autenticación
				(NextAuth.js) y gestión de estado (Zustand).
				Conexión con backends
				Optimización de SEO y desempeño (Lighthouse, Web Vitals).
				Soporte multilenguaje (i18n) y accesibilidad, asegurando
				compatibilidad con estándares internacionales.
				`,
		],
		technologies: ['Next.js', 'Typescript', 'Flutter', 'Dart', 'Tailwind'],
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
			'Diagnóstico, reparación y mantenimiento de equipos electrónicos, principalmente cablemódems y decodificadores, asegurando su correcto funcionamiento.',
			'Realización de pruebas técnicas (testeos) para verificar el rendimiento de los dispositivos, identificando fallas en componentes  lectrónicos (placas, fuentes de alimentación, circuitos integrados, etc.).',
			'Reemplazo de piezas defectuosas y soldadura de componentes SMD y THT.',
			'Manejo de herramientas e instrumentos de medición (multímetros, osciloscopios, fuentes de alimentación)'
		],
		technologies: ['Soporte Técnico'],
		current: false,
	},
];
