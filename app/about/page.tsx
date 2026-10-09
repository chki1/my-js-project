
import PageFrame from "../components/PageFrame";

export default function About() {
  return (
    <PageFrame
      title="About Me"
      subtitle="A little about my background and interests."
    >
      <section>
        <h2 className="mb-3 text-2xl font-semibold">
          Hello, I'm YOUR NAME.
        </h2>
        <p>
          I am an IT student interested in software
          development, networking, and cybersecurity.
          I enjoy learning new technologies and
          building practical applications.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-2xl font-semibold">
          My Interests
        </h2>
        <p>
          My interests include web development,
          mobile applications, operating systems,
          and network security.
        </p>
      </section>
    </PageFrame>
  );
}
