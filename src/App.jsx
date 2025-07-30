"use client";

import { useState, useEffect } from "react";
import "./App.css";
import earthAmbiental from "./assets/earth.png";
import profile from "./assets/perfil.jpg";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      title: "Earth Ambiental",
      description:
        "Plataforma completa de comercio electrónico con React, Next.js y Stripe",
      image: earthAmbiental,
      tags: ["React", "Next.js", "Stripe", "CSS"],
      demo: "https://www.earthambiental.com/",
      featured: true,
    },
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const skills = [
    {
      name: "React & React Native",
      description: "Desarrollo frontend y móvil moderno",
      icon: "⚛️",
      color: "orange-red",
    },
    {
      name: "JavaScript & TypeScript",
      description: "Código robusto y tipado",
      icon: "📘",
      color: "pink-purple",
    },
    {
      name: "Node.js & Backend",
      description: "APIs y servicios escalables",
      icon: "🚀",
      color: "yellow-orange",
    },
    {
      name: "MongoDB & Firebase",
      description: "Bases de datos modernas",
      icon: "🗄️",
      color: "green-teal",
    },
    {
      name: "Git & Cypress",
      description: "Control de versiones y testing",
      icon: "🔧",
      color: "blue-indigo",
    },
    {
      name: "Trabajo en Equipo",
      description: "Comunicación y colaboración",
      icon: "🤝",
      color: "purple-pink",
    },
  ];

  const navigationItems = [
    { id: "hero", label: "Inicio", icon: "🏠" },
    { id: "about", label: "Sobre mí", icon: "👨‍💻" },
    { id: "skills", label: "Skills", icon: "⚡" },
    { id: "projects", label: "Proyectos", icon: "🚀" },
  ];

  const heroTags = [
    "✨ Innovador",
    "🚀 Rápido",
    "🎨 Creativo",
    "💡 Solucionador",
  ];

  const values = [
    {
      icon: "🤝",
      title: "Comunicación Clara",
      description:
        "Me apasionan las nuevas relaciones y la comunicación transparente. Creo en el poder del intercambio diario en equipos de trabajo.",
    },
    {
      icon: "💻",
      title: "Calidad del Código",
      description:
        "Comprometido con la calidad del código y la escalabilidad a largo plazo de las aplicaciones. Cada detalle importa.",
    },
    {
      icon: "🚀",
      title: "Crecimiento Constante",
      description:
        "Soy muy extrovertido y valoro las críticas constructivas. Siempre abierto a nuevos desafíos para seguir creciendo profesionalmente.",
    },
  ];

  const handleContactEmail = () => {
    window.location.href =
      "mailto:franciscoporta19@gmail.com?subject=Hablemos de tu proyecto&body=Hola Juan, me interesa trabajar contigo...";
  };

  const handleDownloadCV = () => {
    window.open(
      "https://drive.google.com/file/d/1Kn-MiL8tSktyDJZsmU3mzZf7yPrmJZL_/view?usp=sharing",
      "_blank"
    );
  };

  const handleLinkedIn = () => {
    window.open("https://www.linkedin.com/in/franciscoporta/", "_blank");
  };

  const handleGitHub = () => {
    window.open("https://github.com/franciscoporta", "_blank");
  };

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-content">
            <div className="logo">
              <span className="logo-juan">Francisco</span>
              <span className="logo-dev">Dev</span>
            </div>

            <div className={`nav-links ${mobileMenuOpen ? "mobile-open" : ""}`}>
              {navigationItems.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`nav-link ${
                    activeSection === section.id ? "active" : ""
                  }`}
                >
                  <span className="nav-icon">{section.icon}</span>
                  {section.label}
                </button>
              ))}
            </div>

            <button
              className="mobile-menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-bg">
          <div className="hero-bg-1"></div>
          <div className="hero-bg-2"></div>
          <div className="hero-bg-3"></div>
        </div>

        <div className="hero-container">
          <div className={`hero-content ${isVisible ? "visible" : ""}`}>
            <div className="avatar-container">
              <div className="avatar-glow"></div>
              <div className="avatar">
                <img src={profile} alt="Francisco Developer" />
              </div>
            </div>

            <div className="hero-title">
              <h1 className="main-title">
                <span className="gradient-text">Creativo</span>
              </h1>
              <h2 className="subtitle">Digital Developer</h2>
            </div>

            <p className="hero-description">
              Desarrollador Full Stack orientado al Front End con más de 2 años
              de experiencia. Especializado en React, Node.js y tecnologías
              modernas. Comprometido con la calidad del código y el trabajo en
              equipo.
            </p>

            <div className="hero-tags">
              {heroTags.map((tag, index) => (
                <span
                  key={tag}
                  className="hero-tag"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="hero-buttons">
              <button className="btn-primary" onClick={handleContactEmail}>
                <span>📧</span>
                Hablemos
              </button>
              <button className="btn-secondary" onClick={handleDownloadCV}>
                <span>📄</span>
                Mi CV
              </button>
            </div>

            <div className="social-links">
              <button
                onClick={handleGitHub}
                className="social-link"
                aria-label="GitHub"
              >
                <svg
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </button>
              <button
                onClick={handleLinkedIn}
                className="social-link"
                aria-label="LinkedIn"
              >
                <svg
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </button>
              <button
                onClick={handleContactEmail}
                className="social-link"
                aria-label="Email"
              >
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="scroll-indicator">
            <div className="scroll-arrow">
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-bg">
          <div className="about-bg-1"></div>
          <div className="about-bg-2"></div>
        </div>

        <div className="about-container">
          <div className="section-header">
            <h2 className="section-title">
              <span className="gradient-text">Mi Historia</span>
            </h2>
            <p className="section-description">
              Más que código, creo experiencias que transforman ideas en
              realidad digital
            </p>
          </div>

          <div className="about-content">
            <div className="about-cards">
              <div className="about-card">
                <div className="card-icon orange-pink">
                  <span>🎯</span>
                </div>
                <h3>Mi Misión</h3>
                <p>
                  Como desarrollador Full Stack orientado al Front End, me
                  comprometo con la calidad del código y la escalabilidad a
                  largo plazo de las aplicaciones. Cada línea que escribo tiene
                  un propósito: crear experiencias digitales que realmente
                  importen y perduren.
                </p>
              </div>

              <div className="about-card">
                <div className="card-icon yellow-orange">
                  <span>⚡</span>
                </div>
                <h3>Mi Enfoque</h3>
                <p>
                  Me considero una persona muy social, apasionado por las nuevas
                  relaciones y la comunicación clara. Disfruto del intercambio
                  diario en equipos de trabajo, tanto profesional como
                  humanamente. Valoro mucho las críticas constructivas para
                  seguir creciendo.
                </p>
              </div>

              <div className="about-card">
                <div className="card-icon pink-purple">
                  <span>🚀</span>
                </div>
                <h3>Mi Pasión</h3>
                <p>
                  Soy muy extrovertido y estoy abierto a nuevos desafíos en
                  busca de un crecimiento constante. Mi formación incluye más de
                  700 horas de práctica en el Bootcamp de Henry,
                  especializándome en React.js, Node.js y tecnologías modernas.
                </p>
              </div>
            </div>

            <div className="about-visual">
              <div className="about-image">
                <div className="image-glow"></div>
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=500&fit=crop"
                  alt="Mi workspace creativo"
                />
              </div>

              {/* <div className="stat-card stat-1">
                <div className="stat-number gradient-text">10+</div>
                <div className="stat-label">Proyectos</div>
              </div> */}

              <div className="stat-card stat-1">
                <div className="stat-number gradient-text">3+</div>
                <div className="stat-label">Años</div>
              </div>

              {/* <div className="stat-card stat-2">
                <div className="stat-number gradient-text-yellow">3</div>
                <div className="stat-label">Empresas</div>
              </div> */}

              <div className="stat-card stat-3">
                <div className="stat-icon">💻</div>
                <div className="stat-label">
                  Full Stack
                  <br />
                  Developer
                </div>
              </div>

              <div className="decorative-dot dot-1"></div>
              <div className="decorative-dot dot-2"></div>
            </div>
          </div>

          <div className="values-section">
            <h3 className="values-title">
              <span className="gradient-text">Mis Valores</span>
            </h3>

            <div className="values-grid">
              {values.map((value) => (
                <div key={value.title} className="value-item">
                  <div className="value-icon">
                    <span>{value.icon}</span>
                  </div>
                  <h4>{value.title}</h4>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="skills-container">
          <div className="section-header">
            <h2 className="section-title">Mi Arsenal Creativo</h2>
            <p className="section-description">
              Las herramientas que uso para crear magia digital
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div key={skill.name} className="skill-card">
                <div className={`skill-icon ${skill.color}`}>
                  <span>{skill.icon}</span>
                </div>
                <h3>{skill.name}</h3>
                <p>{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="projects-bg">
          <div className="projects-bg-1"></div>
          <div className="projects-bg-2"></div>
        </div>

        <div className="projects-container">
          <div className="section-header">
            <h2 className="section-title">
              <span className="gradient-text">Mis Creaciones</span>
            </h2>
            <p className="section-description">
              Cada proyecto es una historia única de creatividad, código y
              pasión
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`project-card ${index % 2 === 0 ? "offset" : ""}`}
              >
                {project.featured && (
                  <div className="featured-badge">⭐ Destacado</div>
                )}

                <div className="project-image">
                  <div className="image-overlay"></div>
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                  />

                  <div className="project-actions">
                    {project.github && (
                      <a
                        href={project.github}
                        className="action-btn github"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Ver código de ${project.title}`}
                      >
                        <svg
                          width="20"
                          height="20"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        className="action-btn demo"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Ver demo de ${project.title}`}
                      >
                        <svg
                          width="20"
                          height="20"
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
                    )}
                  </div>
                </div>

                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="project-tags">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tag}
                        className="project-tag"
                        style={{ animationDelay: `${tagIndex * 0.1}s` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project-decoration"></div>
                <div className="project-shadow"></div>
              </div>
            ))}
          </div>

          {/* <div className="projects-cta">
            <div className="cta-card">
              <h3>
                <span className="gradient-text">¿Te gusta lo que ves?</span>
              </h3>
              <p>
                Estos son solo algunos ejemplos. Tengo muchas más ideas
                esperando cobrar vida.
              </p>
              <button
                className="btn-primary"
                onClick={() => scrollToSection("contact")}
              >
                Ver más proyectos
              </button>
            </div>
          </div> */}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <h2 className="section-title">¡Trabajemos juntos!</h2>
          <p className="section-description">
            ¿Tienes un proyecto en mente? Me encantaría escuchar sobre él
          </p>

          <div className="contact-card">
            <h3>¿Listo para empezar?</h3>
            <p>
              Estoy disponible para proyectos freelance y oportunidades de
              trabajo remoto
            </p>
            <div className="contact-buttons">
              <button
                className="contact-btn primary"
                onClick={handleContactEmail}
              >
                <span>📧</span>
                franciscoporta19@gmail.com
              </button>
              <button
                className="contact-btn secondary"
                onClick={handleLinkedIn}
              >
                <span>💼</span>
                LinkedIn
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Francisco Developer. Hecho con ❤️ y mucho café</p>
      </footer>
    </div>
  );
}

export default App;
