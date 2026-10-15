import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PortfolioIcon, { type PortfolioIconName } from '../components/PortfolioIcon';
import PortfolioShell from '../components/PortfolioShell';
import { profile, skills } from '../portfolio-data';
import { siteDetails } from '../site-details';
import site from '../portfolio.module.css';
import ui from './about.module.css';

export const metadata: Metadata = {
  title: `About | ${profile.name}`,
  description: `Meet ${profile.name}: background, technical interests, and the tools behind the work.`,
};

const skillIcons: PortfolioIconName[] = ['code', 'terminal', 'network'];

export default function AboutPage() {
  return (
    <PortfolioShell activePage="about">
      <main className={ui.main}>
        <div className={site.container}>
          <section className={ui.hero} aria-labelledby="about-title">
            <div className={ui.heroCopy}>
              <p className={ui.eyebrow}><span /> THE PERSON BEHIND THE PROJECTS</p>
              <h1 id="about-title" className={ui.title}>A curious mind.<br /><em>A builder at heart.</em></h1>
              <p className={ui.introduction}>{profile.introduction}</p>
              <div className={ui.meta}>
                <span><PortfolioIcon name="pin" />{profile.location}</span>
                <span><PortfolioIcon name="book" />{profile.role}</span>
              </div>
              <div className={ui.actions}>
                <Link href="/resume" className={site.primaryButton}>Explore my résumé <PortfolioIcon name="arrow" /></Link>
                <Link href="/contact" className={site.inlineLink}>Say hello <span aria-hidden="true">↗</span></Link>
              </div>
            </div>
            <figure className={ui.profileCard}>
              <div className={ui.cardTop}><span>A LITTLE INTRODUCTION</span><span aria-hidden="true">✳</span></div>
              <div className={ui.photoFrame}>
                {siteDetails.profilePhoto ? (
                  <Image
                    src={siteDetails.profilePhoto}
                    alt={siteDetails.profilePhotoAlt}
                    fill
                    sizes="(max-width: 680px) calc(100vw - 74px), (max-width: 960px) 38vw, 350px"
                    className={ui.photo}
                  />
                ) : (
                  <div className={ui.monogram} aria-label={`Profile initials: ${profile.initials}`}>
                    <span className={ui.orbit} aria-hidden="true" />
                    <span className={ui.initials}>{profile.initials}</span>
                    <span className={ui.monogramCaption}>LEARN. BUILD. REPEAT.</span>
                  </div>
                )}
              </div>
              <figcaption className={ui.profileCaption}>
                <div><strong>{profile.name}</strong><span>{profile.role}</span></div>
                <PortfolioIcon name="code" />
              </figcaption>
            </figure>
          </section>
          <section className={ui.storySection} aria-labelledby="story-title">
            <div className={ui.storyCopy}>
              <p className={ui.eyebrow}>01 / MY STORY</p>
              <h2 id="story-title" className={ui.sectionTitle}>Learning by <em>doing.</em></h2>
              <p>{profile.about}</p>
              <p>From building web interfaces to configuring networks and working with Linux, I enjoy turning what I learn into something practical.</p>
              <p>This portfolio brings those projects together and documents the skills I am developing along the way.</p>
            </div>
            <aside className={ui.facts} aria-labelledby="glance-title">
              <h3 id="glance-title">At a glance</h3>
              <dl>
                <div><dt>University</dt><dd>{profile.university}</dd></div>
                <div><dt>Studies</dt><dd>{profile.degree}</dd></div>
                <div><dt>Study period</dt><dd>{profile.years}</dd></div>
                <div><dt>Based in</dt><dd>{profile.location}</dd></div>
              </dl>
            </aside>
          </section>
          <section className={ui.toolkitSection} aria-labelledby="toolkit-title">
            <div className={ui.sectionHeading}>
              <div><p className={ui.eyebrow}>02 / MY TOOLKIT</p><h2 id="toolkit-title" className={ui.sectionTitle}>What I <em>work with.</em></h2></div>
              <p>Tools I use in coursework and personal projects.</p>
            </div>
            <div className={ui.skillGrid}>
              {skills.map((skill, index) => (
                <article className={ui.skillCard} key={skill.category}>
                  <span className={ui.skillIcon}><PortfolioIcon name={skillIcons[index % skillIcons.length]} /></span>
                  <h3>{skill.category}</h3>
                  <ul>{skill.items.split(',').map((item) => <li key={item.trim()}>{item.trim()}</li>)}</ul>
                </article>
              ))}
            </div>
          </section>
          <section className={ui.interestsSection} aria-labelledby="interests-title">
            <div><p className={ui.eyebrow}>03 / WHAT SPARKS MY CURIOSITY</p><h2 id="interests-title" className={ui.sectionTitle}>Always <em>exploring.</em></h2></div>
            <ul className={ui.interests}>{profile.interests.map((interest) => <li key={interest}><span aria-hidden="true">↗</span>{interest}</li>)}</ul>
          </section>
          <section className={ui.cta} aria-labelledby="connect-title">
            <div><p>HAVE SOMETHING IN MIND?</p><h2 id="connect-title">Let&apos;s start a conversation.</h2></div>
            <Link href="/contact">Get in touch <PortfolioIcon name="arrow" /></Link>
          </section>
        </div>
      </main>
    </PortfolioShell>
  );
}
