import Link from 'next/link';
import type { ReactNode } from 'react';
import { profile } from '../portfolio-data';
import site from '../portfolio.module.css';

export default function PortfolioShell({ activePage, children }: { activePage: 'about' | 'contact'; children: ReactNode }) {
  return (
    <div className={site.site}>
      <header className={site.header}>
        <div className={site.headerInner}>
          <Link href="/" className={site.logo} aria-label="Go to homepage">
            <span className={site.logoMark}>{profile.initials}</span><span>{profile.name}</span>
          </Link>
          <nav className={site.navigation} aria-label="Main navigation">
            <Link href="/about" aria-current={activePage === 'about' ? 'page' : undefined}>About</Link>
            <Link href="/resume">Résumé</Link>
            <Link href="/#projects">Projects</Link>
            <Link href="/contact" aria-current={activePage === 'contact' ? 'page' : undefined}>Contact</Link>
          </nav>
        </div>
      </header>
      {children}
      <footer className={site.footer}>
        <div className={site.container}>
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>Built with Next.js · <a href={profile.repository} target="_blank" rel="noopener noreferrer">Source ↗</a></span>
        </div>
      </footer>
    </div>
  );
}
