import type { ReactNode } from 'react';

export type PortfolioIconName = 'arrow' | 'mail' | 'phone' | 'pin' | 'code' | 'terminal' | 'network' | 'book' | 'github';

const paths: Record<PortfolioIconName, ReactNode> = {
  arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m4 7 8 6 8-6" /></>,
  phone: <path d="m8 3 2 5-3 2c1.5 3 4 5.5 7 7l2-3 5 2v3a2 2 0 0 1-2 2C10 21 3 14 3 5a2 2 0 0 1 2-2h3Z" />,
  pin: <><path d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
  code: <><path d="m7 7-5 5 5 5M17 7l5 5-5 5M14 4l-4 16" /></>,
  terminal: <><rect x="2" y="4" width="20" height="16" rx="3" /><path d="m6 9 3 3-3 3M12 15h5" /></>,
  network: <><rect x="8" y="2" width="8" height="6" rx="1" /><rect x="2" y="16" width="8" height="6" rx="1" /><rect x="14" y="16" width="8" height="6" rx="1" /><path d="M12 8v4M6 16v-4h12v4" /></>,
  book: <><path d="M12 6C9 3 5 3 2 4v15c4-1 7-1 10 2 3-3 6-3 10-2V4c-3-1-7-1-10 2ZM12 6v15" /></>,
  github: <><path d="M9 19c-4 1-4-2-6-2m12 5v-4c0-1-.3-1.7-1-2 3-.3 6-1.5 6-6 0-1.3-.5-2.5-1.3-3.4.1-.4.6-2-0.2-3.6 0 0-1.1-.4-3.6 1.3a12 12 0 0 0-6 0C6.4 2.6 5.3 3 5.3 3c-.8 1.6-.3 3.2-.2 3.6C4.3 7.5 4 8.7 4 10c0 4.5 3 5.7 6 6-.7.3-1 1-1 2v4" /></>,
};

export default function PortfolioIcon({ name, className }: { name: PortfolioIconName; className?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" className={className}>
      {paths[name]}
    </svg>
  );
}
