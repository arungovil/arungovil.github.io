import Head from "next/head";
import { PostCard } from "../../components";
import AppLayout from "../../layouts";
import { toTime } from "../../utils";
import matter from "gray-matter";
import fs from "fs";
import path from "path";

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));
  const posts = files
    .filter((filename) => filename.includes(".md"))
    .map((filename) => {
      const slug = filename.replace(".md", "");
      const markdownWithMeta = fs.readFileSync(
        path.join("posts", filename),
        "utf-8"
      );
      const { data: frontMatter } = matter(markdownWithMeta);
      return {
        slug,
        frontMatter,
      };
    })
    .sort((a, b) => toTime(b.frontMatter.date) - toTime(a.frontMatter.date));

  return {
    props: {
      posts,
    },
  };
}

export default function Blog(props: {
  posts: [
    {
      slug: string;
      frontMatter: { [key: string]: string };
    }
  ];
}) {
  return (
    <div>
      <Head>
        <title>Arun Govil / Posts</title>
        <meta name="description" content="Short tutorials on React Native, AWS and web development." />
        <meta property="og:title" content="Arun Govil · Posts" />
        <meta property="og:description" content="Short tutorials on React Native, AWS and web development." />
        <link rel="icon" href="/img/frame.png" />
      </Head>
      <main>
        <AppLayout>
          <section className="section">
            <div className="section-heading">
              <h1>Posts</h1>
            </div>
            <div className="entry-list">
              {props.posts.map(
                ({ slug, frontMatter: { title, description, thumbnail, date } }) => (
                  <PostCard
                    key={slug}
                    title={title}
                    description={description}
                    url={slug}
                    icon={thumbnail}
                    date={date}
                  />
                )
              )}
            </div>
          </section>
        </AppLayout>
      </main>
    </div>
  );
}
