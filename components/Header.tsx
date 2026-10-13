import Link from "next/link";
import { useRouter } from "next/router";

export const technology = [
  { title: "About", path: "/" },
  { title: "Work", path: "/work" },
  { title: "Projects", path: "/projects" },
  { title: "Posts", path: "/posts" },
];

export default function Header() {
  const router = useRouter();
  const isActive = (path: string) =>
    path === "/" ? router.pathname === "/" : router.pathname.startsWith(path);

  return (
    <nav aria-label="Main" className="dock">
      <div className="dock-surface">
        {technology.map((item) => (
          <Link
            key={item.title}
            href={item.path}
            aria-current={isActive(item.path) ? "page" : undefined}
            className="dock-link"
          >
            {item.title}
          </Link>
        ))}
        <a
          href="https://rb.gy/qslrty"
          target="_blank"
          rel="noreferrer"
          className="dock-cta"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}
