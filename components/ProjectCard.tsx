import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  url: string;
  icon: string;
}
export default function ProjectCard({
  title,
  description,
  url,
  icon,
}: ProjectCardProps) {
  const image = require(`../public/icons/${icon}`);
  return (
    <a href={url.trim()} target="_blank" rel="noreferrer" className="entry">
      <span className="entry-main">
        <Image alt="" src={image} width="28" height="28" className="flex-none" />
        <span className="entry-text">
          <span className="title block" style={{ color: "var(--primary)" }}>{title}</span>
          <span className="secondary block">{description}</span>
        </span>
      </span>
      <span aria-hidden="true" className="secondary">↗</span>
    </a>
  );
}
