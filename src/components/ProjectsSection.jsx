import { SectionHeader } from './SectionHeader'

export function ProjectsSection({ projects }) {
  return (
    <section className="section" id="projects" data-reveal>
      <SectionHeader tag="Projects" title="Recent work and product builds." />

      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title} data-reveal>
            <p className="project-type">{project.category}</p>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="chip-row">
              {project.stack.map((tech) => (
                <span key={tech} className="chip">
                  {tech}
                </span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noreferrer">
              View repository →
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
