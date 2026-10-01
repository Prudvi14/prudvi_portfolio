import { SectionHeader } from './SectionHeader'

export function AboutSection({ education }) {
  return (
    <section className="section" id="about" data-reveal>
      <SectionHeader tag="About Me" title="Engineering mindset with product thinking." />

      <div className="about-grid">
        <div className="panel">
          <p>
            I am a Computer Science graduate with a strong interest in full-stack engineering, AI-assisted workflows, and product-focused problem solving. My background combines frontend development, backend architecture, data analysis, and research-driven evaluation work.
          </p>
          <p>
            I enjoy building responsive applications, creating dashboards that turn data into decisions, and solving algorithmic problems that improve digital experiences and real-world outcomes.
          </p>
          <div className="meta-list">
            <span>📍 Vizianagaram, Andhra Pradesh</span>
            <span>🌐 English, Telugu, Hindi, German</span>
            <span>💼 Available for SDE opportunities</span>
          </div>
        </div>

        <div className="panel">
          <h3>Education</h3>
          <div className="timeline-list">
            {education.map((item) => (
              <div className="timeline-item" key={item.school}>
                <div className="dot" />
                <div>
                  <strong>{item.school}</strong>
                  <p>{item.degree}</p>
                  <small>
                    {item.timeline} • {item.mark}
                  </small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
