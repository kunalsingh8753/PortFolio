import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Menu, X,
  Code2, BrainCircuit, Layers3, Terminal, ExternalLink, Sparkles,
  GraduationCap, MapPin, Send, ChevronRight
} from "lucide-react";

const links = [
  ["About", "#about"], ["Skills", "#skills"], ["Projects", "#projects"], ["Contact", "#contact"]
];

const skills = [
  { title: "Programming", items: ["Java", "Python", "JavaScript", "SQL"], icon: Code2 },
  { title: "Web Development", items: ["React.js", "Node.js", "Express.js", "HTML & CSS", "REST APIs"], icon: Layers3 },
  { title: "Core CS", items: ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems"], icon: Terminal },
  { title: "AI & Tools", items: ["Machine Learning", "Git & GitHub", "VS Code", "Google Colab"], icon: BrainCircuit }
];

const projects = [
  {
    number: "01", name: "StyleX", type: "FULL-STACK PRODUCT CONCEPT",
    description: "A salon discovery and booking platform concept that helps customers explore nearby salons, compare barber services, check availability and plan appointments.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    accent: "violet", status: "In development"
  },
  {
    number: "02", name: "Chiku AI", type: "PERSONAL AI ASSISTANT",
    description: "A desktop-style AI assistant concept with voice interaction, conversational responses and system-control capabilities.",
    tags: ["Python", "Eel", "Groq API", "Voice AI"],
    accent: "cyan", status: "In development"
  }
];

function Reveal({ children, delay = 0, className = "" }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    // Replace this placeholder with your email before publishing.
    const email = "your.email@example.com";
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <header className="topbar">
        <a className="brand" href="#home"><span className="brand-mark">K<span>.</span></span><span className="brand-name">KUNAL<span> / PORTFOLIO</span></span></a>
        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
          {links.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <a className="nav-cta" href="#contact">Let's talk <ArrowUpRight size={15} /></a>
        </nav>
        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <Reveal><div className="eyebrow"><span className="pulse-dot" /> AVAILABLE FOR OPPORTUNITIES <span className="eyebrow-line" /></div></Reveal>
            <Reveal delay={0.08}><h1>Building digital<br /><span className="gradient-text">experiences</span><br />with purpose<span className="period">.</span></h1></Reveal>
            <Reveal delay={0.16}><p className="hero-intro">Hey, I'm <strong>Kunal Kumar Singh</strong> — a Computer Science student passionate about software development, problem-solving and turning ideas into useful products.</p></Reveal>
            <Reveal delay={0.24}><div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a><a className="button button-ghost" href="#contact">Get in touch <ChevronRight size={16} /></a></div></Reveal>
            <Reveal delay={0.32}><div className="social-row"><a href="https://www.linkedin.com/in/kunal-kumar-singh-45a457313/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a><a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a><span className="social-divider" /><span className="location"><MapPin size={14} /> Greater Noida, India</span></div></Reveal>
          </div>
          <Reveal delay={0.2} className="hero-visual">
            <div className="visual-grid" />
            <div className="orbit orbit-a" /><div className="orbit orbit-b" />
            <div className="profile-orb"><div className="orb-inner"><span className="orb-k">K<span>.</span></span><span className="orb-caption">DEVELOPER MODE</span></div></div>
            <div className="floating-card card-code"><span className="mini-icon"><Code2 size={15} /></span><span><b>Clean code</b><small>Built with intent</small></span><span className="card-check">↗</span></div>
            <div className="floating-card card-ai"><span className="mini-icon purple"><Sparkles size={15} /></span><span><b>Curious mind</b><small>Always learning</small></span></div>
            <div className="visual-index">01 — INTRODUCTION</div>
          </Reveal>
          <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} /></a>
        </section>

        <section className="section-wrap about-section" id="about">
          <Reveal><div className="section-kicker">01 / ABOUT ME</div><div className="section-heading-row"><h2>Curiosity drives.<br /><span className="muted-heading">Code brings it to life.</span></h2><p className="section-side-copy">I enjoy learning how technology works and using that knowledge to build practical, thoughtful solutions.</p></div></Reveal>
          <div className="about-grid">
            <Reveal className="about-card about-main"><div className="about-card-label"><GraduationCap size={17} /> THE JOURNEY</div><h3>Computer Science<br />& Engineering</h3><p>I'm currently pursuing my B.Tech in Computer Science and Engineering, with my third year underway. I'm strengthening my foundations in Java, Data Structures & Algorithms, web development and AI/ML while building projects that help me learn by doing.</p><div className="education-foot"><span>UNDERGRADUATE</span><span>2024 — PRESENT</span></div></Reveal>
            <Reveal delay={0.1} className="about-card focus-card"><div className="about-card-label"><Sparkles size={17} /> WHAT I FOCUS ON</div><div className="focus-list"><div><span>01</span> Problem solving & DSA</div><div><span>02</span> Full-stack development</div><div><span>03</span> AI-powered applications</div><div><span>04</span> Continuous learning</div></div></Reveal>
          </div>
        </section>

        <section className="section-wrap skills-section" id="skills">
          <Reveal><div className="section-kicker">02 / TOOLKIT</div><div className="section-heading-row"><h2>Skills that turn<br /><span className="muted-heading">ideas into reality.</span></h2><p className="section-side-copy">A growing toolkit across programming, web technologies and computer science fundamentals.</p></div></Reveal>
          <div className="skills-grid">{skills.map((skill, i) => { const Icon = skill.icon; return <Reveal key={skill.title} delay={i * 0.07} className="skill-card"><div className="skill-top"><span className="skill-icon"><Icon size={19} /></span><span className="skill-count">0{i + 1}</span></div><h3>{skill.title}</h3><div className="tag-list">{skill.items.map(item => <span className="tag" key={item}>{item}</span>)}</div></Reveal>; })}</div>
        </section>

        <section className="section-wrap projects-section" id="projects">
          <Reveal><div className="section-kicker">03 / SELECTED WORK</div><div className="section-heading-row"><h2>Ideas in<br /><span className="muted-heading">progress.</span></h2><p className="section-side-copy">A couple of projects where I'm exploring product thinking, development and AI.</p></div></Reveal>
          <div className="project-list">{projects.map((project, i) => <Reveal key={project.name} delay={i * 0.1} className={`project-card ${project.accent}`}><div className="project-number">{project.number}</div><div className="project-content"><div className="project-type">{project.type}</div><h3>{project.name}</h3><p>{project.description}</p><div className="tag-list">{project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div></div><div className="project-aside"><span className="project-status"><i /> {project.status}</span><span className="project-arrow"><ArrowUpRight size={23} /></span></div></Reveal>)}</div>
        </section>

        <section className="section-wrap contact-section" id="contact">
          <Reveal><div className="section-kicker">04 / CONTACT</div><div className="contact-panel"><div className="contact-glow" /><div className="contact-content"><span className="contact-overline"><Send size={14} /> HAVE A PROJECT IN MIND?</span><h2>Let's build<br /><span className="gradient-text">something great.</span></h2><p>I'm open to learning opportunities, internships and conversations around software development and technology.</p><div className="contact-actions"><button className="button button-primary" onClick={copyEmail}>{copied ? "Email copied!" : "Copy email"} <Mail size={16} /></button><a className="button button-ghost" href="https://www.linkedin.com/in/kunal-kumar-singh-45a457313/" target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight size={16} /></a></div></div><div className="contact-decoration">K<span>.</span></div></div></Reveal>
        </section>
      </main>

      <footer className="footer section-wrap"><a className="brand" href="#home"><span className="brand-mark">K<span>.</span></span><span className="brand-name">KUNAL<span> / PORTFOLIO</span></span></a><span>DESIGNED & BUILT WITH CURIOSITY</span><a href="#home" className="back-top">BACK TO TOP ↑</a><small>© {new Date().getFullYear()} Kunal Kumar Singh</small></footer>
    </div>
  );
}