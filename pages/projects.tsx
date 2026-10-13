import Head from "next/head";
import { ProjectCard } from "../components";
import AppLayout from "../layouts";
import { ProjectsData } from "../content/Projects";

export default function Projects() {
  return (
    <div>
      <Head>
        <title>Arun Govil / Projects</title>
        <meta name="description" content="Arun Govil — projects" />
        <link rel="icon" href="/img/frame.png" />
      </Head>
      <main>
        <AppLayout>
          <section className="section">
            <div className="section-heading">
              <h1>Projects</h1>
            </div>
            <div className="entry-list">
              {ProjectsData.map((item) => {
                return (
                  <ProjectCard
                    key={item.title}
                    title={item.title}
                    description={item.description}
                    url={item.url}
                    icon={item.icon}
                  />
                );
              })}
            </div>
          </section>
        </AppLayout>
      </main>
    </div>
  );
}
