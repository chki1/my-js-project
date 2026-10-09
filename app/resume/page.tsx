import type { Metadata } from "next";
import Link from "next/link";
import { education, languages, profile, projects, skills } from "../portfolio-data";
import site from "../portfolio.module.css";
import ui from "./resume.module.css";
import PrintButton from "./PrintButton";

export const metadata: Metadata = {
  title: `Résumé | ${profile.name}`,
  description: `Education, technical skills, and selected projects of ${profile.name}.`,
};

export default function ResumePage() {
  return (
    <div className={site.site}>
      <header className={site.header}>
        <div className={site.headerInner}>
          <Link href="/" className={site.logo} aria-label="Go to homepage">
            <span className={site.logoMark}>{profile.initials}</span>
            <span>{profile.name}</span>
          </Link>
          <nav className={site.navigation} aria-label="Main navigation">
            <Link href="/about">About</Link>
            <Link href="/resume" aria-current="page">Résumé</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </header>

      <main>
        <section className={ui.hero} aria-labelledby="resume-title">
          <div className={ui.heroGlow} aria-hidden="true" />
          <div className={ui.wrap}>
            <div className={ui.heroTop}>
              <p className={ui.eyebrow}><span className={ui.eyebrowLine} /> CURRICULUM VITAE / 2026</p>
              <p className={ui.heroIndex}>01 — PROFILE</p>
            </div>
            <div className={ui.heroGrid}>
              <div>
                <h1 id="resume-title" className={ui.heroTitle}>
                  {profile.name}<span className={ui.heroPeriod}>.</span>
                </h1>
                <p className={ui.heroRole}>{profile.role}</p>
                <p className={ui.heroIntro}>{profile.introduction}</p>
                <div className={ui.heroActions}>
                  <PrintButton />
                  <a className={ui.heroLink} href={`mailto:${profile.email}`}>
                    Get in touch <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
              <div className={ui.heroMonogram} aria-hidden="true">
                <span>{profile.initials}</span>
                <small>PORTFOLIO / RESUME</small>
              </div>
            </div>
            <div className={ui.heroBottom}>
              <span>BASED IN {profile.location.toUpperCase()}</span>
              <span>SCROLL TO EXPLORE ↓</span>
            </div>
          </div>
        </section>

        <div className={ui.wrap}>
          <div className={ui.contentGrid}>
            <div className={ui.mainColumn}>
              <section className={ui.section} aria-labelledby="education-heading">
                <div className={ui.sectionHeading}>
                  <span className={ui.sectionNumber}>01</span>
                  <div>
                    <p className={ui.kicker}>BACKGROUND</p>
                    <h2 id="education-heading">Education<span className={ui.greenDot}>.</span></h2>
                  </div>
                </div>
                <div className={ui.timeline}>
                  {education.map((entry, index) => (
                    <article className={ui.timelineItem} key={`${entry.institution}-${index}`}>
                      <span className={ui.timelineNode} aria-hidden="true" />
                      <div className={ui.entryHeader}>
                        <h3>{entry.degree}</h3>
                        <span className={ui.period}>{entry.period}</span>
                      </div>
                      <p className={ui.institution}>{entry.institution}</p>
                      <p className={ui.entryDescription}>{entry.detail}</p>
                    </article>
                  ))}
                </div>
              </section>

              <section className={ui.section} aria-labelledby="projects-heading">
                <div className={ui.sectionHeading}>
                  <span className={ui.sectionNumber}>02</span>
                  <div>
                    <p className={ui.kicker}>SELECTED WORK</p>
                    <h2 id="projects-heading">Projects<span className={ui.greenDot}>.</span></h2>
                  </div>
                </div>
                <div className={ui.projectStack}>
                  {projects.map((project) => (
                    <article className={ui.projectCard} key={project.number}>
                      <div className={ui.projectTop}>
                        <span className={ui.projectNumber}>{project.number} / PROJECT</span>
                        <span className={ui.projectType}>{project.type}</span>
                      </div>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <div className={ui.projectBottom}>
                        <div className={ui.tags} aria-label="Tools used">
                          {project.tools.map((tool) => (
                            <span key={tool}>{tool}</span>
                          ))}
                        </div>
                        {project.url ? (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={ui.projectLink}
                          >
                            View <span aria-hidden="true">↗</span>
                          </a>
                        ) : null}
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              <section className={ui.section} aria-labelledby="experience-heading">
                <div className={ui.sectionHeading}>
                  <span className={ui.sectionNumber}>03</span>
                  <div>
                    <p className={ui.kicker}>HANDS-ON LEARNING</p>
                    <h2 id="experience-heading">Experience<span className={ui.greenDot}>.</span></h2>
                  </div>
                </div>
                <div className={ui.experienceCard}>
                  <div className={ui.experienceSymbol} aria-hidden="true">↗</div>
                  <div>
                    <h3>Technical coursework & labs</h3>
                    <p>
                      Practical academic experience in web development,
                      computer networking, virtual machines, and Linux systems.
                      Add professional roles or internship information here when applicable.
                    </p>
                  </div>
                </div>
              </section>
            </div>

            <aside className={ui.sideColumn} aria-label="Resume details">
              <div className={ui.sideCard}>
                <p className={ui.sideEyebrow}>AT A GLANCE</p>
                <h2>Details</h2>
                <dl className={ui.facts}>
                  <div><dt>Location</dt><dd>{profile.location}</dd></div>
                  <div>
                    <dt>Email</dt>
                    <dd><a href={`mailto:${profile.email}`}>{profile.email}</a></dd>
                  </div>
                  <div>
                    <dt>GitHub</dt>
                    <dd><a href={profile.github} target="_blank" rel="noopener noreferrer">View profile ↗</a></dd>
                  </div>
                </dl>
              </div>

              <div className={ui.sideCard}>
                <p className={ui.sideEyebrow}>WHAT I WORK WITH</p>
                <h2>Technical skills</h2>
                {skills.map((skill) => (
                  <div key={skill.category} className={ui.skillGroup}>
                    <h3>{skill.category}</h3>
                    <div className={ui.skillTags}>
                      {skill.items.split(",").map((item) => (
                        <span key={item.trim()}>{item.trim()}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className={ui.sideCard}>
                <p className={ui.sideEyebrow}>COMMUNICATION</p>
                <h2>Languages</h2>
                <ul className={ui.languageList}>
                  {languages.map((language) => (
                    <li key={language}>{language}</li>
                  ))}
                </ul>
              </div>

              <div className={ui.asideNote}>
                <span className={ui.noteStar} aria-hidden="true">✳</span>
                <p>Always learning.<br />Always building.</p>
                <Link href="/contact">Let's connect ↗</Link>
              </div>
            </aside>
          </div>

          <div className={ui.bottomRow}>
            <Link href="/" className={ui.backLink}>← Back to portfolio</Link>
            <span>END OF RÉSUMÉ — THANK YOU FOR READING</span>
          </div>
        </div>
      </main>

      <footer className={site.footer}>
        <div className={site.container}>
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>Built with Next.js · Designed with care</span>
        </div>
      </footer>
    </div>
  );
}
