export function Navbar({ items }) {
  return (
    <header className="topbar">
      <div className="brand">Prudvi</div>
      <nav className="nav" aria-label="Main navigation">
        {items.map((item, index) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className={index === 0 ? 'active' : ''}
            aria-current={index === 0 ? 'page' : undefined}
          >
            {item}
          </a>
        ))}
      </nav>
      <a className="resume-btn" href="/Prudvi_cv.pdf" target="_blank" rel="noreferrer">
        Resume
      </a>
    </header>
  )
}
