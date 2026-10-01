import { useEffect } from 'react'
import './App.css'
import { navItems, stats, skills, projects, experiences, education, certifications } from './data/portfolioData'
import { Navbar } from './components/NavBar'
import { Hero } from './components/Hero'
import { AboutSection } from './components/AboutSection'
import { ProjectsSection } from './components/ProjectsSection'
import { ExperienceSection } from './components/ExperienceSection'
import { SkillsSection } from './components/SkillsSection'
import { FooterSection } from './components/FooterSection'

function App() {
  useEffect(() => {
    const revealItems = document.querySelectorAll('[data-reveal]')
    const navLinks = [...document.querySelectorAll('.nav a')]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    revealItems.forEach((item) => observer.observe(item))

    const navObserver = new IntersectionObserver(
      (entries) => {
        const currentSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0]

        if (!currentSection) return

        navLinks.forEach((link) => {
          const isActive = link.hash === `#${currentSection.target.id}`
          link.classList.toggle('active', isActive)

          if (isActive) {
            link.setAttribute('aria-current', 'location')
          } else {
            link.removeAttribute('aria-current')
          }
        })
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    )

    navLinks.forEach((link) => {
      const section = document.querySelector(link.hash)
      if (section) navObserver.observe(section)
    })

    return () => {
      observer.disconnect()
      navObserver.disconnect()
    }
  }, [])

  return (
    <div className="page-shell">
      <Navbar items={navItems} />

      <main>
        <Hero stats={stats} />
        <AboutSection education={education} />
        <ProjectsSection projects={projects} />
        <ExperienceSection experiences={experiences} />
        <SkillsSection skills={skills} />
      </main>

      <FooterSection certifications={certifications} />
    </div>
  )
}

export default App
