import { useEffect, useRef, useState } from 'react'
import {
  FaArrowRight,
  FaArrowUpRightFromSquare,
  FaBars,
  FaBrain,
  FaBriefcase,
  FaCloud,
  FaCode,
  FaEnvelope,
  FaGithub,
  FaLaptopCode,
  FaMoon,
  FaSun,
  FaXmark,
} from 'react-icons/fa6'
import {
  FaBrain as FaSkillBrain,
  FaDatabase,
  FaMicrophone,
  FaProjectDiagram,
  FaRobot,
  FaServer,
  FaLinkedinIn,
} from 'react-icons/fa'
import {
  SiDocker,
  SiFastapi,
  SiGit,
  SiGithubactions,
  SiGooglegemini,
  SiJavascript,
  SiKubernetes,
  SiLinux,
  SiPostgresql,
  SiPython,
  SiRedis,
  SiReact,
  SiSqlalchemy,
  SiTailwindcss,
  SiTerraform,
  SiTypescript,
  SiVite,
} from 'react-icons/si'
import { VscCode } from 'react-icons/vsc'
import portrait from './assets/cutout.png.png'
import { links } from './data/links.js'
import projects from './data/projects.js'
import { skills } from './data/skills.js'
import './App.css'

const resumeUrl = ''

const skillIcons = {
  SiPython,
  SiJavascript,
  FaDatabase,
  FaBrain: FaSkillBrain,
  FaProjectDiagram,
  FaRobot,
  SiGooglegemini,
  FaMicrophone,
  SiFastapi,
  FaServer,
  SiReact,
  SiVite,
  SiTailwindcss,
  SiPostgresql,
  SiSqlalchemy,
  SiDocker,
  SiGit,
  SiGithubactions,
  SiLinux,
  VscCode,
  SiRedis,
  SiKubernetes,
  SiTerraform,
  SiTypescript,
}

function SocialLink({ href, label, children, className = '' }) {
  if (!href) {
    return (
      <span
        className={`${className} social-link-placeholder`}
        aria-label={`${label} profile URL not set`}
        aria-disabled="true"
        title={`Add ${label} profile URL`}
      >
        {children}
      </span>
    )
  }

  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
    >
      {children}
    </a>
  )
}

function App() {
  const [isDark, setIsDark] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const skillsSectionRef = useRef(null)

  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    const section = skillsSectionRef.current
    if (!section) return

    const cards = section.querySelectorAll('.skill-group')
    if (!('IntersectionObserver' in window)) {
      cards.forEach((card) => card.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })

    cards.forEach((card) => observer.observe(card))
    return () => observer.disconnect()
  }, [])

  return (
    <main data-theme={isDark ? 'dark' : 'light'}>
      <nav className="nav container" aria-label="Main navigation">
        <a className="brand" href="#top" onClick={closeMenu}>
          Chaitanya <span className="brand-code">&lt;/&gt;</span>
        </a>
        <button
          type="button"
          className="menu-button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaXmark aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </button>
        <div
          className={`nav-links${menuOpen ? ' nav-links-open' : ''}`}
          id="primary-navigation"
        >
          <a href="#top" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </div>
        <div className="nav-actions">
          <button
            type="button"
            className="theme-button"
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
            onClick={() => setIsDark(!isDark)}
          >
            {isDark ? <FaSun aria-hidden="true" /> : <FaMoon aria-hidden="true" />}
          </button>
          {resumeUrl && (
            <a className="nav-cta" href={resumeUrl} target="_blank" rel="noopener noreferrer">
              Download CV <span aria-hidden="true">↓</span>
            </a>
          )}
        </div>
      </nav>

      <section className="hero container" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="hello-pill">Hello, I&apos;m</p>
          <h1 id="hero-title">Chaitanya<br /><strong>Shirsath</strong></h1>
          <p className="role-line">
            <span className="typing-cursor" aria-hidden="true" />
            AI/ML Engineer &amp; Full Stack Developer
          </p>
          <p className="hero-intro">
            I build intelligent, scalable, and user-friendly applications with a focus on
            AI, full-stack engineering, and cloud technologies.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              View My Work <FaArrowRight aria-hidden="true" />
            </a>
            <a className="button button-outline" href={`mailto:${links.email}?subject=Hello%20Chaitanya`}>
              Contact Me <FaEnvelope aria-hidden="true" />
            </a>
          </div>
          <div className="social-links hero-social" aria-label="Social links">
            <SocialLink href={links.github} label="GitHub">
              <FaGithub aria-hidden="true" />
            </SocialLink>
            <SocialLink href={links.linkedin} label="LinkedIn">
              <FaLinkedinIn aria-hidden="true" />
            </SocialLink>
            <a href={`mailto:${links.email}?subject=Hello%20Chaitanya`} aria-label="Email" title="Email">
              <FaEnvelope aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="portrait-wrap" aria-label="Portrait and focus areas">
          <div className="portrait-glow" aria-hidden="true" />
          <div className="portrait-frame">
            <img src={portrait} alt="Portrait of Chaitanya Shirsath" fetchPriority="high" />
          </div>
          <div className="floating-card card-code">
            <FaLaptopCode aria-hidden="true" />
            <small>Full Stack<br />Developer</small>
          </div>
          <div className="floating-card card-ai">
            <FaBrain aria-hidden="true" />
            <small>LLM &amp; RAG<br />Apps</small>
          </div>
          <div className="floating-card card-cloud">
            <FaCloud aria-hidden="true" />
            <small>Cloud<br />Engineering</small>
          </div>
          <div className="floating-card card-build">
            <FaBriefcase aria-hidden="true" />
            <small>Project<br />Builder</small>
          </div>
        </div>
      </section>

      <section className="section container about-section" id="about" aria-labelledby="about-title">
        <div className="about-intro">
          <div className="section-label">01 / ABOUT</div>
          <h2 id="about-title">More than a student.<br /><span>A builder in progress.</span></h2>
        </div>
        <div className="about-content">
          <p>
            I&apos;m a Computer Science Engineering student who enjoys turning complex
            ideas into useful products. I&apos;m building a strong foundation across
            machine learning and frontend engineering, and I&apos;m open to internship
            opportunities where I can contribute and keep learning.
          </p>
          <div className="about-facts" aria-label="A few key facts">
            <div><strong>4+</strong><span>AI projects built</span></div>
            <div><strong>Open</strong><span>To internships</span></div>
            <div><strong>AI + Web</strong><span>Main stack focus</span></div>
          </div>
        </div>
      </section>

      <section className="section skills-section container" id="skills" aria-labelledby="skills-title" ref={skillsSectionRef}>
        <div className="section-heading">
          <div>
            <div className="section-label">02 / SKILLS</div>
            <h2 id="skills-title">Tools I use<br /><span>to build with.</span></h2>
          </div>
        </div>
        <div className="skills-grid">
          {skills.map((group, index) => (
            <article
              className={`skill-group${group.group === 'Currently Learning' ? ' skill-group-learning' : ''}`}
              key={group.group}
              style={{ '--skill-index': index }}
            >
              <h3>{group.group}</h3>
              <ul className="skill-chips">
                {group.items.map((skill) => {
                  const Icon = skillIcons[skill.icon] || FaCode
                  return (
                    <li className="skill-chip" key={skill.name}>
                      <Icon aria-hidden="true" />
                      <span>{skill.name}</span>
                    </li>
                  )
                })}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section container projects-section" id="projects" aria-labelledby="projects-title">
        <div className="section-heading">
          <div>
            <div className="section-label">03 / FEATURED PROJECTS</div>
            <h2 id="projects-title">Selected work<br /><span>in the wild.</span></h2>
          </div>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <div className="project-preview">
                {project.image ? (
                  <img src={project.image} alt={`${project.title} project preview`} loading="lazy" />
                ) : (
                  <div className="preview-placeholder" aria-label="Project image placeholder">
                    <FaCode aria-hidden="true" />
                    <span>PROJECT PREVIEW</span>
                  </div>
                )}
                <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-problem">{project.problem}</p>
                <p className="project-result">{project.result}</p>
                <div className="tag-row" aria-label="Technologies">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
              <div className="project-actions">
                {project.demoUrl && (
                  <a className="button button-primary" href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    Live Demo <FaArrowUpRightFromSquare aria-hidden="true" />
                  </a>
                )}
                {project.repoUrl && (
                  <a className="button button-outline" href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                    GitHub <FaGithub aria-hidden="true" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer container" id="contact">
        <div className="footer-heading">
          <div className="section-label">04 / CONTACT</div>
          <h2>Let&apos;s make something<br /><em>meaningful.</em></h2>
        </div>
        <div className="footer-right">
          <p>Open to internships, collaborations, and conversations about the future of intelligent products.</p>
          <div className="contact-actions">
            <a className="button button-primary" href={`mailto:${links.email}?subject=Hello%20Chaitanya`}>
              Email me <FaEnvelope aria-hidden="true" />
            </a>
            <SocialLink href={links.github} label="Visit GitHub" className="button button-outline">
              GitHub <FaArrowUpRightFromSquare aria-hidden="true" />
            </SocialLink>
            <SocialLink href={links.linkedin} label="Visit LinkedIn" className="button button-outline">
              LinkedIn <FaArrowUpRightFromSquare aria-hidden="true" />
            </SocialLink>
          </div>
        </div>
      </footer>
      <div className="footer-bottom container">
        <span>© {new Date().getFullYear()} Chaitanya Shirsath</span>
        <span>AI/ML Engineer &amp; Full Stack Developer</span>
      </div>
    </main>
  )
}

export default App
