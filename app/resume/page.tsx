
import PageFrame from "../components/PageFrame";

import {
  profile,
  education,
  skills,
  projects,
  languages,
} from "../portfolio-data";

export default function Resume() {
  return (
    <PageFrame
      title="Résumé"
      subtitle={`${profile.name} — ${profile.role}`}
    >
      {/* Personal Information */}
      <section>
        <h2 className="mb-3 text-2xl font-bold">
          Personal Information
        </h2>

        <h3 className="text-xl font-semibold">
          {profile.name}
        </h3>

        <p>{profile.role}</p>
        <p>{profile.location}</p>

        <a
          href={`mailto:${profile.email}`}
          className="text-blue-600 hover:underline"
        >
          {profile.email}
        </a>

        <p>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            GitHub Profile
          </a>
        </p>
      </section>

      {/* Professional Summary */}
      <section>
        <h2 className="mb-3 text-2xl font-bold">
          Professional Summary
        </h2>

        <p>{profile.introduction}</p>
      </section>

      {/* Education */}
      <section>
        <h2 className="mb-4 text-2xl font-bold">
          Education
        </h2>

        {education.map((item, index) => (
          <div key={index} className="mb-5">
            <h3 className="text-lg font-semibold">
              {item.degree}
            </h3>

            <p>{item.institution}</p>
            <p className="text-slate-500">
              {item.period}
            </p>
            <p>{item.detail}</p>
          </div>
        ))}
      </section>

      {/* Technical Skills */}
      <section>
        <h2 className="mb-4 text-2xl font-bold">
          Technical Skills
        </h2>

        {skills.map((skill, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-semibold">
              {skill.category}
            </h3>

            <p>{skill.items}</p>
          </div>
        ))}
      </section>

      {/* Projects */}
      <section>
        <h2 className="mb-4 text-2xl font-bold">
          Projects
        </h2>

        {projects.map((project) => (
          <div
            key={project.number}
            className="mb-6 border-b border-slate-200 pb-4"
          >
            <h3 className="text-lg font-semibold">
              {project.title}
            </h3>

            <p className="text-slate-500">
              {project.type}
            </p>

            <p>{project.description}</p>

            <p className="text-sm text-slate-500">
              {project.tools.join(" • ")}
            </p>

            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View Project
              </a>
            )}
          </div>
        ))}
      </section>

      {/* Languages */}
      <section>
        <h2 className="mb-4 text-2xl font-bold">
          Languages
        </h2>

        {languages.map((language) => (
          <p key={language}>{language}</p>
        ))}
      </section>
    </PageFrame>
  );
}
