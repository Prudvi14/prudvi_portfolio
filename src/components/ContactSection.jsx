import { useState } from 'react'
import { SectionHeader } from './SectionHeader'

export function ContactSection({ email, profileLinks }) {
  const [copyStatus, setCopyStatus] = useState('')

  async function handleCopyEmail() {
    if (!navigator.clipboard?.writeText) {
      setCopyStatus('Copy is unavailable here. Use the Email link instead.')
      return
    }

    try {
      await navigator.clipboard.writeText(email)
      setCopyStatus('Email copied.')
    } catch {
      setCopyStatus('Could not copy the email. Use the Email link instead.')
    }
  }

  return (
    <section className="section contact-section" id="contact" data-reveal>
      <div className="contact-copy">
        <SectionHeader tag="Contact" title="Let’s build something meaningful." />
        <p>Reach out about software development, .NET full-stack work, cloud, or AI/LLM evaluation opportunities.</p>
        <div className="contact-actions">
          <a className="primary-btn" href={`mailto:${email}`}>Email me</a>
          <button className="secondary-btn" type="button" onClick={handleCopyEmail}>Copy Email</button>
        </div>
        <p className="copy-status" aria-live="polite">{copyStatus}</p>
      </div>
      <div className="contact-profiles" aria-label="Professional profiles">
        {profileLinks.map((profile) => (
          <a key={profile.label} href={profile.href} target="_blank" rel="noreferrer">
            {profile.label}<span aria-hidden="true"> ↗</span>
          </a>
        ))}
      </div>
    </section>
  )
}
