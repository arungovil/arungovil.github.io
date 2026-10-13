import Head from "next/head";
import { WorkCard } from "../components";
import AppLayout from "../layouts";
import { WorkExperience } from "../content/Work";

export default function Work() {
  return (
    <div>
      <Head>
        <title>Arun Govil / Work</title>
        <meta name="description" content="Arun Govil — work" />
        <link rel="icon" href="/img/frame.png" />
      </Head>
      <main>
        <AppLayout showSearch={false}>
          <section className="section">
            <div className="section-heading">
              <h1>Work</h1>
            </div>
            <div className="entry-list">
              {WorkExperience.map((item, i) => {
                return (
                  <WorkCard
                    key={item.title}
                    title={item.title}
                    role={item.role}
                    url={item.url}
                    logo={item.logo}
                    year={item.year}
                    experience={item.experience}
                    roles={item.roles}
                    defaultExpanded={i === 0}
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
