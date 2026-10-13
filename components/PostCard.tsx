import Image from "next/image";
import Link from "next/link";

interface PostCardProps {
  title: string;
  description: string;
  url: string;
  icon: string;
  date?: string;
}
export default function PostCard({
  title,
  description,
  url,
  icon,
  date,
}: PostCardProps) {
  const image = require(`../public/icons/${icon}.svg`);
  return (
    <Link href={`/posts/${url}`} className="entry">
      <span className="entry-main">
        <Image alt="" src={image} width="28" height="28" className="flex-none" />
        <span className="entry-text">
          <span className="title block" style={{ color: "var(--primary)" }}>{title}</span>
          <span className="secondary block">{description}</span>
        </span>
      </span>
      {date && <span className="dates secondary">{date}</span>}
    </Link>
  );
}
