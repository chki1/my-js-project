
import Link from "next/link";
import type { ReactNode } from "react";

type PageFrameProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export default function PageFrame({
  title,
  subtitle,
  children,
}: PageFrameProps) {
  return (
    <div className="min-h-screen bg-[#faf9f6] text-slate-900">
      <header className="border-b border-slate-200">
        <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-6">
          <Link href="/" className="text-xl font-bold">
            My Portfolio
          </Link>

          <div className="flex flex-wrap gap-5 text-sm">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <Link href="/about" className="hover:text-blue-600">About</Link>
            <Link href="/resume" className="hover:text-blue-600">Résumé</Link>
            <Link href="/projects" className="hover:text-blue-600">Projects</Link>
            <Link href="/contact" className="hover:text-blue-600">Contact</Link>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="mb-4 text-5xl font-bold">{title}</h1>

        {subtitle && (
          <p className="mb-12 text-lg text-slate-500">{subtitle}</p>
        )}

        <div className="space-y-8 leading-8">{children}</div>
      </main>

      <footer className="mt-16 border-t border-slate-200 p-8 text-center text-sm text-slate-500">
        © 2026 My Portfolio · Built with Next.js
      </footer>
    </div>
  );
}
