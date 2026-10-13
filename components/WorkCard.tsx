import { useState } from "react";
import Image from "next/image";
import type { Role } from "../content/Work";

interface WorkCardProps {
  title: string;
  role: string;
  url: string;
  logo: string;
  year: string;
  experience: Array<string>;
  roles?: Role[];
  defaultExpanded?: boolean;
}
export default function WorkCard({
  title,
  role,
  url,
  logo,
  year,
  experience,
  roles,
  defaultExpanded = false,
}: WorkCardProps) {
  const [isExpanded, setExpanded] = useState(defaultExpanded);
  const image = require(`../public/work/${logo}.jpeg`);

  return (
    <div>
      {/* button, not a clickable div, so keyboard and screen readers can expand it */}
      <button
        type="button"
        aria-expanded={isExpanded}
        onClick={() => setExpanded(!isExpanded)}
        className="entry"
      >
        <span className="entry-main">
          <Image alt="" src={image} width="28" height="28" className="rounded-md flex-none" />
          <span className="entry-text">
            <span className="title block" style={{ color: "var(--primary)" }}>{role}</span>
            <span className="secondary block">{title}</span>
          </span>
        </span>
        <span className="dates secondary">{year}</span>
      </button>

      {isExpanded && (
        <div className="bullets" style={{ gap: roles ? 20 : undefined }}>
          {roles
            ? roles.map((r) => (
                <div key={r.role} className="flex flex-col gap-2">
                  <p style={{ color: "var(--primary)" }}>
                    {r.role} <span className="secondary">· {r.year}</span>
                  </p>
                  {r.experience.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              ))
            : experience.map((item) => <p key={item}>{item}</p>)}
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="secondary underline underline-offset-4 w-fit"
          >
            Visit {title} ↗
          </a>
        </div>
      )}
    </div>
  );
}
