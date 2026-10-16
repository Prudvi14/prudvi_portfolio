import { SectionHeader } from './SectionHeader'

export function ProjectsSection({ projects }) {
  return (
    <section className="section" id="projects" data-reveal>
      <SectionHeader tag="Projects" title="Recent work and product builds." />

      <div className="project-grid">
        {projects.map((project) => (
          <article className={`project-card${project.featured ? ' project-card-featured' : ''}`} key={project.title} data-reveal>
            <div className="project-preview">
              {project.preview ? (
                <img src={`${import.meta.env.BASE_URL}${project.preview}`} alt={project.previewAlt} loading="lazy" decoding="async" />
              ) : (
                <div className="architecture-preview" role="img" aria-label="Capstone architecture: React client, ASP.NET Core API, and data access layer using EF Core and SQLite">
                  {project.architecture.map((layer, index) => (
                    <div className="architecture-step" key={layer}>
                      <span>{layer}</span>
                      {index < project.architecture.length - 1 && <span className="architecture-arrow" aria-hidden="true">↓</span>}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="project-body">
              <p className="project-type">{project.category}</p>
              <h3>{project.title}</h3>
              <dl className="project-details">
                <div><dt>Problem</dt><dd>{project.problem}</dd></div>
                <div><dt>Built</dt><dd>{project.built}</dd></div>
                <div><dt>Technical decision</dt><dd>{project.decision}</dd></div>
                <div><dt>Learning</dt><dd>{project.learning}</dd></div>
              </dl>
              <div className="chip-row" aria-label="Technologies used">
                {project.stack.map((tech) => <span key={tech} className="chip">{tech}</span>)}
              </div>
              <a className="project-repository-link" href={project.link} target="_blank" rel="noreferrer">
                View repository <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
