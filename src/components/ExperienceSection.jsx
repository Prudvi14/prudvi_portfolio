import { SectionHeader } from './SectionHeader'

export function ExperienceSection({ experiences }) {
  return (
    <section className="section" id="experience" data-reveal>
      <SectionHeader tag="Experience" title="Career progression and impact." />

      <div className="experience-list">
        {experiences.map((job) => (
          <article key={job.role} className="experience-item panel" data-reveal>
            <div className="job-header">
              <div>
                <h3>{job.role}</h3>
                <p>{job.company}</p>
              </div>
              <span>{job.period}</span>
            </div>
            <p>{job.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
