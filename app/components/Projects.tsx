export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "Plataforma de comercio electrónico completa con carrito de compras, pagos integrados y panel de administración avanzado.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "Aplicación de gestión de tareas con funcionalidades de colaboración en tiempo real y notificaciones.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "Dashboard del clima con pronósticos detallados, visualizaciones interactivas y alertas meteorológicas.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Vue.js", "Chart.js", "Weather API"],
      github: "#",
      demo: "#",
      featured: false,
    },
    {
      id: 4,
      title: "Social Media App",
      description: "Red social con funciones de posts, comentarios, likes, mensajería instantánea y stories.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React Native", "Firebase", "Redux"],
      github: "#",
      demo: "#",
      featured: false,
    },
  ]

  return (
    <section id="proyectos" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Mis <span className="text-purple-400">Proyectos</span>
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-purple-400 to-pink-400 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Una selección de proyectos que demuestran mis habilidades y experiencia en desarrollo web y móvil.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-slate-700/30 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              <div className="relative overflow-hidden">
                <div className="w-full h-64 bg-linear-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center">
                  <div className="text-6xl opacity-50">🚀</div>
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-purple-600 text-white text-sm rounded-full shadow-lg">Destacado</span>
                  </div>
                )}

                <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    className="p-2 bg-gray-800/80 rounded-full hover:bg-gray-700 transition-colors backdrop-blur-xs"
                    aria-label="Ver código en GitHub"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href={project.demo}
                    className="p-2 bg-purple-600/80 rounded-full hover:bg-purple-500 transition-colors backdrop-blur-xs"
                    aria-label="Ver demo en vivo"
                  >
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed text-sm">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-600/50 text-gray-300 rounded-full text-sm hover:bg-slate-600 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://frontendfrancoinzerillo.netlify.app/"
            className="inline-flex items-center px-6 py-3 border-2 border-purple-400 text-purple-400 rounded-full font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 group"
          >
            Ver Portfolio Completo
            <svg
              className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
