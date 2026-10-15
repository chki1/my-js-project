import type { Metadata } from 'next';
import Link from 'next/link';
import PortfolioIcon, { type PortfolioIconName } from '../components/PortfolioIcon';
import PortfolioShell from '../components/PortfolioShell';
import { profile } from '../portfolio-data';
import { siteDetails } from '../site-details';
import site from '../portfolio.module.css';
import ui from './contact.module.css';

export const metadata: Metadata = {
  title: `Contact | ${profile.name}`,
  description: `Telephone, email, and address for ${profile.name}.`,
};

type ContactDetail = { label: string; value: string; hint: string; icon: PortfolioIconName; href?: string; external?: boolean };

function ContactCard({ detail, index }: { detail: ContactDetail; index: number }) {
  const content = (
    <>
      <div className={ui.cardTop}><span className={ui.icon}><PortfolioIcon name={detail.icon} /></span><span className={ui.index}>0{index + 1}</span></div>
      <h2>{detail.label}</h2>
      <p className={detail.icon === 'mail' ? `${ui.value} ${ui.emailValue}` : ui.value}>{detail.value}</p>
      <span className={ui.hint}>{detail.hint}{detail.href && <PortfolioIcon name="arrow" />}</span>
    </>
  );
  return detail.href ? (
    <a className={ui.card} href={detail.href} target={detail.external ? '_blank' : undefined} rel={detail.external ? 'noopener noreferrer' : undefined}>{content}</a>
  ) : (
    <article className={ui.card}>{content}</article>
  );
}

export default function ContactPage() {
  const telephone = siteDetails.telephone.trim();
  const email = siteDetails.email.trim();
  const address = siteDetails.address.trim();
  const contacts: ContactDetail[] = [
    { label: 'Telephone', value: telephone || 'Not listed', hint: telephone ? 'Call me directly' : 'You can reach me by email', icon: 'phone', href: telephone ? `tel:${telephone.replace(/[^+0-9]/g, '')}` : undefined },
    { label: 'Email', value: email || 'Not listed', hint: email ? 'Send me a message' : 'Contact details coming soon', icon: 'mail', href: email ? `mailto:${email}` : undefined },
    { label: 'Address', value: address || 'Not listed', hint: address ? 'View location on Google Maps' : 'Location coming soon', icon: 'pin', href: address ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}` : undefined, external: true },
  ];
  return (
    <PortfolioShell activePage="contact">
      <main className={ui.main}>
        <div className={site.container}>
          <div className={ui.heading}>
            <p className={ui.eyebrow}><span /> GET IN TOUCH</p>
            <h1>Good things start with<br /><em>a conversation.</em></h1>
            <p className={ui.lead}>A project idea, a question, or just a hello — I would love to hear from you. Here is where you can find me.</p>
          </div>
          <section className={ui.grid} aria-label="Contact details">
            {contacts.map((detail, index) => <ContactCard detail={detail} index={index} key={detail.label} />)}
          </section>
          <section className={ui.githubPanel} aria-labelledby="github-title">
            <span className={ui.githubIcon}><PortfolioIcon name="github" /></span>
            <div><p>ELSEWHERE ON THE INTERNET</p><h2 id="github-title">See what I am building.</h2><span>Coursework, experiments, and projects in progress.</span></div>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">Find me on GitHub <PortfolioIcon name="arrow" /></a>
          </section>
          <div className={ui.bottom}>
            <p><PortfolioIcon name="pin" /> Based in {profile.location}</p>
            <Link href="/about">A little more about me <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </main>
    </PortfolioShell>
  );
}
