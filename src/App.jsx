import { useEffect, useState } from 'react'
import portrait from './assets/cutout.png.png'
import './App.css'

const starterSkills = ['Python', 'Machine Learning', 'SQL', 'React', 'Data Analysis', 'Git & GitHub']

const starterProjects = [
  { title: 'Forecasting Studio', description: 'A clean dashboard for exploring time-series predictions and model confidence.', tags: ['Python', 'ML'], link: 'https://github.com/' },
  { title: 'Insight Engine', description: 'Turning messy datasets into clear, useful stories with a little statistical rigor.', tags: ['Data', 'Research'], link: 'https://github.com/' },
]

const loadStored = (key, fallback) => {
  try {
    const stored = localStorage.getItem(key)
    return stored ? JSON.parse(stored) : fallback
  } catch {
    return fallback
  }
}

function App() {
  const [skills, setSkills] = useState(() => loadStored('portfolio-skills', starterSkills))
  const [projects, setProjects] = useState(() => loadStored('portfolio-projects', starterProjects))
  const [skillInput, setSkillInput] = useState('')
  const [projectInput, setProjectInput] = useState({ title: '', link: '' })

  useEffect(() => {
    localStorage.setItem('portfolio-skills', JSON.stringify(skills))
  }, [skills])

  useEffect(() => {
    localStorage.setItem('portfolio-projects', JSON.stringify(projects))
  }, [projects])

  const addSkill = (event) => {
    event.preventDefault()
    const skill = skillInput.trim()
    if (skill && !skills.includes(skill)) setSkills([...skills, skill])
    setSkillInput('')
  }

  const addProject = (event) => {
    event.preventDefault()
    if (!projectInput.title.trim()) return
    setProjects([...projects, { title: projectInput.title.trim(), description: 'A new project ready for its story.', tags: ['New'], link: projectInput.link.trim() || '#' }])
    setProjectInput({ title: '', link: '' })
  }

  return (
    <main>
      <nav className="nav container"><a className="brand" href="#top">Chaitanya <span className="brand-code">&lt;/&gt;</span></a><div className="nav-links"><a className="active" href="#top">Home</a><a href="#about">About</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#experience">Experience</a><a href="#contact">Contact</a></div><div className="nav-actions"><button type="button" className="theme-button" aria-label="Toggle theme">☼</button><a className="nav-cta" href="#contact">Download CV <span>↓</span></a></div></nav>
      <section className="hero container" id="top"><div className="hero-copy reveal"><p className="hello-pill">👋 &nbsp; Hello, I'm</p><h1>Chaitanya<br /><strong>Shirsath</strong></h1><p className="role-line">| &nbsp; AI &amp; Full Stack Developer</p><p className="hero-intro">I build intelligent, scalable and user-friendly applications with a passion for AI, DevOps and Cloud technologies.</p><div className="hero-actions"><a className="button button-primary" href="#projects">View My Work <span>→</span></a><a className="button button-outline" href="mailto:hello@example.com">Contact Me <span>✉</span></a></div><div className="social-links hero-social"><a href="https://github.com/" target="_blank" rel="noreferrer">◉</a><a href="https://linkedin.com/" target="_blank" rel="noreferrer">in</a><a href="https://twitter.com/" target="_blank" rel="noreferrer">♥</a><a href="mailto:hello@example.com">✉</a></div></div><div className="portrait-wrap reveal reveal-delay"><div className="neon-ring ring-large"></div><div className="neon-ring ring-small"></div><div className="portrait-frame"><img src={portrait} alt="Chaitanya" /></div><span className="floating-card card-code">&lt;/&gt;<small>Full Stack<br />Developer</small></span><span className="floating-card card-ai">♧<small>AI / ML<br />Explorer</small></span><span className="floating-card card-cloud">☁<small>Cloud<br />Enthusiast</small></span><span className="floating-card card-problem">♧<small>Problem<br />Solver</small></span></div></section>
      <section className="stats-panel container"><div className="about-mini"><span className="panel-icon">✦</span><h3>About Me</h3><p>I'm a Computer Science Engineering student and a passionate developer who loves building AI-powered solutions and modern web applications.</p><a href="#about">Know More About Me　↗</a></div><div className="stat"><span>01</span><strong>Builder</strong><small>mindset</small></div><div className="stat"><span>02</span><strong>AI + Web</strong><small>focus areas</small></div><div className="stat"><span>03</span><strong>Curious</strong><small>by default</small></div><div className="stat"><span>04</span><strong>Available</strong><small>for good work</small></div></section>
      <section className="section container about-section" id="about"><div className="section-label">01 / ABOUT</div><div className="about-content"><h2>More than a student.<br /><span>A builder in progress.</span></h2><p>I care about the space where technology meets people. Right now, I'm deepening my foundations in machine learning, exploring the craft of frontend development, and building projects that make complex ideas feel simple.</p><div className="about-stats"><div><strong>∞</strong><span>Questions asked</span></div><div><strong>24</strong><span>Hours in a day</span></div><div><strong>01</strong><span>Direction: forward</span></div></div></div></section>
      <section className="section container" id="skills"><div className="section-heading"><div><div className="section-label">✦ &nbsp; Skills</div><h2>Tools I use<br /><span>to build with.</span></h2></div><a className="view-all" href="#skills">View All Skills　→</a></div><div className="skills-layout"><div className="skills-list">{skills.map((skill, index) => <div className="skill-item" key={skill}><span className="skill-number">0{index + 1}</span><span className="skill-mark">{index % 2 ? 'JS' : '<>'}</span><span>{skill}</span><button type="button" aria-label={`Delete ${skill}`} onClick={() => setSkills(skills.filter((item) => item !== skill))}>×</button></div>)}</div><form className="add-form" onSubmit={addSkill}><label htmlFor="skill">Add a skill</label><div><input id="skill" value={skillInput} onChange={(event) => setSkillInput(event.target.value)} placeholder="e.g. TensorFlow" /><button type="submit" aria-label="Add skill">+</button></div></form></div></section>
      <section className="section container projects-section" id="projects"><div className="section-heading"><div><div className="section-label">▣ &nbsp; Featured Projects</div><h2>Selected work<br /><span>in the wild.</span></h2></div><a className="view-all" href="#projects">View All Projects　→</a></div><div className="projects-grid">{projects.map((project, index) => <article className="project-card" key={`${project.title}-${index}`}><div className="project-top"><span className="project-index">0{index + 1}</span><a href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}>↗</a></div><div><h3>{project.title}</h3><p>{project.description}</p><div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div><button type="button" className="delete-project" onClick={() => setProjects(projects.filter((_, itemIndex) => itemIndex !== index))}>Remove project ×</button></article>)}</div><form className="project-form" onSubmit={addProject}><label>Add project</label><input value={projectInput.title} onChange={(event) => setProjectInput({ ...projectInput, title: event.target.value })} placeholder="Project name" /><input value={projectInput.link} onChange={(event) => setProjectInput({ ...projectInput, link: event.target.value })} placeholder="Project link (optional)" /><button className="button button-dark" type="submit">Add project <span>+</span></button></form></section>
      <footer className="footer container" id="contact"><div><div className="section-label">04 / CONTACT</div><h2>Let's make something<br /><em>meaningful.</em></h2></div><div className="footer-right"><p>Open to internships, collaborations, and conversations about the future of intelligent products.</p><div className="contact-details"><a href="mailto:chaitanyashirsath92@gmail.com">chaitanyashirsath92@gmail.com</a><a href="tel:+918329042487">+91 83290 42487</a></div><a className="button button-primary" href="mailto:chaitanyashirsath92@gmail.com">Say hello <span>↗</span></a><div className="social-links"><a href="https://github.com/" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://linkedin.com/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></div></footer><div className="footer-bottom container"><span>© 2025 Chaitanya's Portfolio</span><span>AI / Full Stack Developer</span></div>
    </main>
  )
}

export default App
