import { SectionHeader } from './SectionHeader'

export function SkillsSection({ skills }) {
  return (
    <section className="section" id="skills" data-reveal>
      <SectionHeader tag="Skills" title="Stack and core strengths." />

      <div className="skills-grid">
        {skills.map((group) => (
          <div className="skill-card" key={group.title} data-reveal>
            <h3>{group.title}</h3>
            <div className="chip-row">
              {group.items.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
