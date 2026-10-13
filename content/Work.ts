export interface Role {
  role: string;
  year: string;
  experience: string[];
}

export interface WorkEntry {
  title: string;
  role: string;
  url: string;
  logo: string;
  year: string;
  experience: string[];
  roles?: Role[]; // several roles at one company, shown newest first
}

export const WorkExperience: WorkEntry[] = [
  {
    title: "Unifize",
    role: "Lead Frontend Engineer",
    url: "https://unifize.com/",
    logo: "unifize",
    year: "Jun 2023 - Sep 2026",
    experience: [],
    roles: [
      {
        role: "Lead Frontend Engineer",
        year: "Jul 2024 - Sep 2026",
        experience: [
          "Led the frontend architecture, code reviews and tech debt management for a team of 5 frontend engineers.",
          "Architected a SQLite and Web Worker flow for processing and caching large table datasets in the browser.",
          "Improved performance and UX of nested forms with 100+ native and custom elements, enabling seamless use on low-end mobile devices.",
          "Handled platform releases across web and mobile apps using GitHub CI/CD, Firebase and Bitrise.",
          "Proposed API contracts for features like AI-assisted checklists, reports and dashboards.",
        ],
      },
      {
        role: "Frontend Engineer",
        year: "Jun 2023 - Jul 2024",
        experience: [
          "Shipped key platform features and built a foundational design system to simplify UI development and maintenance.",
          "Developed realtime chats, a no-code form builder, dynamic nested conditional forms, data tables, dashboard charts and custom tiles.",
          "Reduced re-renders in critical areas of the web and mobile apps by making selectors scope aware.",
          "Collaborated closely with the design team, eventually founding the in-house design system.",
        ],
      },
    ],
  },
  {
    title: "Streben Technik",
    role: "Frontend Developer",
    url: "https://strebentechnik.com/",
    logo: "streben",
    year: "Sep 2021 - Jun 2023",
    experience: [
      "Led and contributed to small to mid scale client applications, built with React, Vue, Angular and React Native.",
      "Rewrote the in-house product frontend in NuxtJS to improve performance and developer experience.",
      "Designed user interfaces for web and mobile apps and provided UX solutions across projects and proposals.",
      "Worked directly with clients on estimations and feedback.",
      "Set up frontend projects, ran code reviews and maintained GitHub repositories.",
      "Deployed containerized apps on AWS and DigitalOcean droplets using Podman, serving SPAs through Caddy.",
    ],
  },
  {
    title: "3nions",
    role: "Web Content Writer",
    url: "https://3nions.com",
    logo: "3nions",
    year: "Jun 2019 - Jun 2020",
    experience: [
      "Wrote articles on technology, smartphones, gadgets and applications for 3nions.com",
    ],
  },
];
