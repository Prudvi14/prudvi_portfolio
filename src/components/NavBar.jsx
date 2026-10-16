export function Navbar({ items, activeSection, onSelect }) {
  return (
    <header className="topbar">
      <div className="brand">Prudvi</div>
      <nav className="nav" aria-label="Main navigation">
        {items.map((item) => (
          <a
            key={item}
            href={item === 'About' ? '#home' : item === 'Other' ? '#contact' : `#${item.toLowerCase().replace(/\s+/g, '-')}`}
            className={activeSection === item ? 'active' : ''}
            aria-current={activeSection === item ? 'page' : undefined}
            onClick={(event) => onSelect(event, item)}
          >
            {item}
          </a>
        ))}
      </nav>
      <a className="resume-btn" href={`${import.meta.env.BASE_URL}Prudvi_cv.pdf`} target="_blank" rel="noreferrer">
        Resume
      </a>
    </header>
  )
}
