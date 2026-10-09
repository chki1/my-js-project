import Link from "next/link";

export default function Contact() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6">
      <section className="w-full max-w-xl rounded-2xl border border-slate-800 bg-slate-900 p-8">
        <h1 className="text-4xl font-bold text-white">
          Contact me
        </h1>

        <p className="mt-4 text-slate-300">
          This is the third page of my Next.js website.
          You can contact me using the email below.
        </p>

        <a
          href="mailto:your-email@example.com"
          className="mt-6 block break-all text-lg text-blue-400 hover:underline"
        >
          your-email@example.com
        </a>

        <nav className="mt-8 flex gap-4">
          <Link
            href="/"
            className="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-500"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="rounded-lg border border-slate-600 px-5 py-3 font-semibold text-white hover:bg-slate-800"
          >
            About
          </Link>
        </nav>
      </section>
    </main>
  );
}