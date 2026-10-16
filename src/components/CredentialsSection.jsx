import { SectionHeader } from './SectionHeader'

export function CredentialsSection({ certifications, training, achievements }) {
  return (
    <section className="section cert-section" data-reveal>
      <SectionHeader tag="Credentials" title="Training, certifications & achievements." />
      <div className="credentials-grid">
        <section className="credential-group">
          <h3>Technical training</h3>
          {training.map((item) => <p className="credential-item" key={item}>{item}</p>)}
        </section>
        <section className="credential-group">
          <h3>Achievements</h3>
          {achievements.map((item) => (
            <p className="credential-item" key={item.title}>
              {item.title}<small>{item.verified}</small>
            </p>
          ))}
        </section>
        <section className="credential-group">
          <h3>Certification</h3>
          {certifications.map((item) => <p className="credential-item" key={item}>{item}</p>)}
        </section>
      </div>
    </section>
  )
}