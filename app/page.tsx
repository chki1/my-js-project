import Link from 'next/link';
import { profile, projects, skills } from './portfolio-data';
import styles from './portfolio.module.css';

export default function Home() {
  return (
    <div className={styles.site}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link href="/" className={styles.logo} aria-label="Home">
            <span className={styles.logoMark}>{profile.initials}</span>
            <span>{profile.name}</span>
          </Link>
          <nav className={styles.navigation} aria-label="Main navigation">
            <Link href="/about">About</Link>
            <Link href="/resume">Résumé</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </header>

      <main>
        <section className={styles.hero} aria-labelledby="hero-title">
          <div className={styles.container}>
            <div className={styles.heroGrid}>
              <div className={styles.heroCopy}>
                <p className={styles.eyebrow}><span className={styles.eyebrowDot} /> Personal website / Portfolio</p>
                <h1 id="hero-title" className={styles.heroTitle}>
                  Hi, I'm <em>{profile.name}.</em>
                </h1>
                <p className={styles.heroHeadline}>{profile.headline}</p>
                <p className={styles.intro}>{profile.introduction}</p>
                <div className={styles.actions}>
                  <Link className={styles.primaryButton} href="/resume">View my résumé <span aria-hidden="true">↗</span></Link>
                  <Link className={styles.textButton} href="/about">More about me <span aria-hidden="true">→</span></Link>
                </div>
                <p className={styles.location}><span aria-hidden="true">◎</span> {profile.location}</p>
              </div>
              <div className={styles.heroVisual} aria-label="Personal portrait placeholder">
                <div className={styles.portraitCard}>
                  <span className={styles.cornerLabel}>PORTFOLIO / 2026</span>
                  <div className={styles.portraitCircle}>
                    <span>{profile.initials}</span>
                  </div>
                  <div className={styles.portraitBottom}>
                    <span>{profile.role}</span>
                    <span className={styles.portraitStar} aria-hidden="true">✳</span>
                  </div>
                </div>
                <p className={styles.portraitCaption}>Learning, building, and growing one project at a time.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className={styles.section} aria-labelledby="about-title">
          <div className={styles.container}>
            <div className={styles.sectionGrid}>
              <div>
                <p className={styles.sectionLabel}>01 / About</p>
                <h2 id="about-title" className={styles.sectionTitle}>Curious by nature.<br /><em>Driven to build.</em></h2>
              </div>
              <div className={styles.sectionBody}>
                <p>{profile.about}</p>
                <p>I am especially interested in the intersection of software, networks, and security.</p>
                <Link className={styles.inlineLink} href="/about">Read my story <span aria-hidden="true">↗</span></Link>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className={`${styles.section} ${styles.tintedSection}`} aria-labelledby="projects-title">
          <div className={styles.container}>
            <div className={styles.sectionHeadingRow}>
              <div>
                <p className={styles.sectionLabel}>02 / Selected work</p>
                <h2 id="projects-title" className={styles.sectionTitle}>Things I've <em>worked on.</em></h2>
              </div>
              <Link className={styles.inlineLink} href="/projects">All projects ↗</Link>
            </div>
            <div className={styles.projectGrid}>
              {projects.map((project) => (
                <article className={styles.projectCard} key={project.number}>
                  <div className={styles.cardTop}>
                    <span className={styles.projectNumber}>{project.number}</span>
                    <span className={styles.projectType}>{project.type}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className={styles.tags}>
                    {project.tools.map((tool) => <span key={tool}>{tool}</span>)}
                  </div>
                  {project.url ? (
                    <a className={styles.cardLink} href={project.url} target="_blank" rel="noopener noreferrer">
                      View project <span aria-hidden="true">↗</span>
                    </a>
                  ) : <span className={styles.cardMuted}>Coursework project</span>}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="skills-title">
          <div className={styles.container}>
            <div className={styles.sectionGrid}>
              <div>
                <p className={styles.sectionLabel}>03 / Toolkit</p>
                <h2 id="skills-title" className={styles.sectionTitle}>What I <em>work with.</em></h2>
              </div>
              <div className={styles.skillList}>
                {skills.map((skill) => (
                  <div className={styles.skillRow} key={skill.category}>
                    <h3>{skill.category}</h3>
                    <p>{skill.items}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className={styles.contactSection} aria-labelledby="contact-title">
          <div className={styles.container}>
            <p className={styles.sectionLabel}>04 / Get in touch</p>
            <h2 id="contact-title">Have something in mind?<br /><em>Let's connect.</em></h2>
            <p>I'm always interested in learning, collaborations, and new opportunities.</p>
            <div className={styles.actions}>
              <a className={styles.primaryButton} href={`mailto:${profile.email}`}>Send an email <span aria-hidden="true">↗</span></a>
              <a className={styles.textButton} href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>Made with Next.js · <a href={profile.repository} target="_blank" rel="noopener noreferrer">Source code ↗</a></span>
        </div>
      </footer>
    </div>
  );
}
