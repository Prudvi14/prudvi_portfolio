import introVideo from '../data/portfolio_video.mp4'

export function Hero() {
  return (
    <section className="hero section" id="home" data-reveal>
      <div className="hero-media" aria-hidden="true">
        <video autoPlay muted loop playsInline preload="metadata" tabIndex={-1}>
          <source src={introVideo} type="video/mp4" />
        </video>
      </div>
      <div className="hero-overlay" aria-hidden="true" />

      <div className="hero-content hero-content-lower">
        <div className="hero-copy hero-copy-lower">
          <h1>.Net Full-stack developer</h1>
          <p className="lead">
            I&apos;m a Computer Science graduate focused on .NET full-stack development, React applications, and AI/LLM evaluation. I enjoy building practical software, solving technical problems, and improving application quality through testing and iteration.
          </p>
          <a className="more-about-link" href="#about">
            <span aria-hidden="true">↓</span>
            More about me
          </a>
        </div>
      </div>
    </section>
  )
}
