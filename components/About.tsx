import { links } from "../content/constants";

const stack = [
  "TypeScript",
  "React",
  "React Native",
  "Design Systems",
  "SQLite",
  "Go",
  "Figma",
];

export default function About() {
  const techTitle = <h2>Tech</h2>;
  const elsewhereTitle = (
    <h2>
      Elsewhere <span aria-hidden="true">👋</span>
    </h2>
  );
  const techList = (
    <ul className="flex flex-wrap gap-2">
      {stack.map((s) => (
        <li key={s} className="tag">
          {s}
        </li>
      ))}
    </ul>
  );
  const linkRow = (
    <div className="flex flex-wrap items-center gap-3">
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          target="_blank"
          rel="noreferrer"
          aria-label={l.label}
          title={l.label}
          className="pill pill-icon"
        >
          <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d={l.path} />
          </svg>
        </a>
      ))}
      <a href="mailto:arungovil@duck.com" className="pill pill-filled">
        Contact me
      </a>
    </div>
  );

  return (
    <>
      <section className="section">
        <div className="flex justify-between items-center gap-4 mb-6">
          <div>
            <h1>Arun Govil</h1>
            <p className="secondary">Lead Frontend Engineer</p>
          </div>
          <p className="secondary whitespace-nowrap">
            <span aria-hidden="true">🌏</span> Bengaluru, India
          </p>
        </div>
        <div className="max-w-[509px]" style={{ lineHeight: 1.5 }}>
          <p>
            I design and build web and mobile interfaces with love for
            minimalist design and meaningful experience.
          </p>
          <p className="mt-3">
            Most recently I was Lead Frontend Engineer at{" "}
            <a
              className="underline underline-offset-4"
              href="https://www.unifize.com"
            >
              Unifize
            </a>
            , a collaborative quality management platform used by manufacturers.
            I led a team of 5 frontend engineers building its core features,
            from enterprise workflows and realtime collaboration to no-code
            builders and nested datatables, and founded the in-house design
            system.
          </p>
          <p className="mt-3">
            I&apos;m happiest between product and engineering. I care deeply
            about the end user and about simplicity, so I&apos;m not afraid to
            push back when something isn&apos;t right for them. As a result,
            some of my best work has been what we chose not to build.
          </p>
          <p className="mt-3">
            Outside of work I play music, cycle, shoot black and white photos,
            and drink beer to old school rock, all while battling an existential
            crisis.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="flex flex-col gap-8">
          <div>
            <div className="section-heading">{techTitle}</div>
            {techList}
          </div>
          <div>
            <div className="section-heading">{elsewhereTitle}</div>
            {linkRow}
          </div>
        </div>
      </section>
    </>
  );
}
