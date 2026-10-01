import { SectionHeader } from './SectionHeader'

export function FooterSection({ certifications }) {
  return (
    <footer className="footer section">
      <div className="section cert-section" data-reveal>
        <SectionHeader tag="Certifications" title="Learning and validation." />
        <div className="cert-grid">
          {certifications.map((item) => (
            <div className="cert-item" key={item} data-reveal>
              {item}
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}