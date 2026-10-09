export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6">
      <section className="max-w-xl text-center">
        <h1 className="text-5xl font-bold text-white">
          My first Next.js website
        </h1>

        <p className="mt-6 text-lg text-slate-300">
          I created this project and I am learning Next.js.
        </p>

        <a
          href="/about"
          className="mt-8 inline-block rounded-lg bg-cyan-600 px-6 py-3 font-semibold text-white hover:bg-red-500"
        >
          About this project
        </a>
        <a
  href="/contact"
  className="mt-4 block text-blue-400 underline hover:text-blue-300"
>
  Contact me
</a>
      </section>
    </main>
  );
}