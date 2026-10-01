import profileImage from '../../img.jpg'

export function Hero({ stats }) {
  return (
    <section className="hero section" id="home" data-reveal>
      <div className="hero-copy">
        <h1>
          I design and build <span>digital experiences</span>
        </h1>
        <p className="lead">
          I&apos;m Prudvi Gadeshula — a Computer Science graduate focused on full-stack development, clean architecture, and practical AI-assisted workflows. I build polished web applications, solve real product problems, and turn tech ideas into usable solutions.
        </p>

        <div className="cta-row">
          <a className="primary-btn" href="#projects">
            View Projects
          </a>
        </div>

        <div className="stats-grid">
          {stats.map((stat) => (
            <a className="stat-card" href={stat.href} key={stat.label} target="_blank" rel="noreferrer">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="hero-visual">
        <div className="image-frame">
          <img src={profileImage} alt="Prudvi Gadeshula" loading="eager" />
        </div>
      </div>
    </section>
  )
}
