import { useEffect, useState } from 'react'
import './App.css'
import {
  navItems,
  skills,
  projects,
  experiences,
  education,
  certifications,
  training,
  achievements,
  contactEmail,
  profileLinks,
} from './data/portfolioData'
import { Navbar } from './components/NavBar'
import { Hero } from './components/Hero'
import { AboutSection } from './components/AboutSection'
import { ProjectsSection } from './components/ProjectsSection'
import { ExperienceSection } from './components/ExperienceSection'
import { SkillsSection } from './components/SkillsSection'
import { CredentialsSection } from './components/CredentialsSection'
import { FooterSection } from './components/FooterSection'
import { ContactSection } from './components/ContactSection'

const sectionIds = {
  About: 'home',
  Skills: 'skills',
  Experience: 'experience',
  Projects: 'projects',
  Other: 'contact',
}

function sectionFromHash() {
  const sectionId = decodeURIComponent(window.location.hash.slice(1))
  return Object.entries(sectionIds).find(([, id]) => id === sectionId)?.[0] ?? 'About'
}

function App() {
  const [activeSection, setActiveSection] = useState(sectionFromHash)

  useEffect(() => {
    const revealItems = document.querySelectorAll('[data-reveal]')

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
    return () => {
      observer.disconnect()
    }
  }, [activeSection])

  useEffect(() => {
    const syncSection = () => setActiveSection(sectionFromHash())
    window.addEventListener('popstate', syncSection)
    window.addEventListener('hashchange', syncSection)
    return () => {
      window.removeEventListener('popstate', syncSection)
      window.removeEventListener('hashchange', syncSection)
    }
  }, [])

  function selectSection(event, section) {
    event.preventDefault()
    const sectionId = sectionIds[section]
    window.history.pushState(null, '', `#${sectionId}`)
    setActiveSection(section)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const activeView = {
    About: <><Hero /><AboutSection education={education} /></>,
    Skills: <SkillsSection skills={skills} />,
    Experience: <ExperienceSection experiences={experiences} />,
    Projects: <ProjectsSection projects={projects} />,
    Other: <>
      <CredentialsSection certifications={certifications} training={training} achievements={achievements} />
      <ContactSection email={contactEmail} profileLinks={profileLinks} />
    </>,
  }[activeSection]

  return (
    <div className="page-shell">
      <Navbar items={navItems} activeSection={activeSection} onSelect={selectSection} />
      <main key={activeSection}>{activeView}</main>
      {activeSection === 'Other' && (
        <FooterSection />
      )}
    </div>
  )
}

export default App
