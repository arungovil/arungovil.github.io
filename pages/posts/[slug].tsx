import Head from "next/head";
import Link from "next/link";
import AppLayout from "../../layouts";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import hljs from "highlight.js/lib/core";
import bash from "highlight.js/lib/languages/bash";
import javascript from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";
import json from "highlight.js/lib/languages/json";
import xml from "highlight.js/lib/languages/xml";
import css from "highlight.js/lib/languages/css";

// only the languages posts use, to keep the build light; add more here as needed
hljs.registerLanguage("bash", bash);
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("jsx", javascript);
hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("tsx", typescript);
hljs.registerLanguage("json", json);
hljs.registerLanguage("html", xml);
hljs.registerLanguage("css", css);

marked.setOptions({
  highlight: (code, lang) =>
    hljs.getLanguage(lang) ? hljs.highlight(code, { language: lang }).value : code,
});

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files
    .filter((filename) => filename.includes(".md"))
    .map((filename) => ({
      params: {
        slug: filename.replace(".md", ""),
      },
    }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }: never) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontMatter,
      slug,
      html: marked(content),
    },
  };
}

export default function Post(props: {
  frontMatter: { [key: string]: string };
  slug: string;
  html: string;
}) {
  return (
    <div>
      <Head>
        <title>Posts / {props.frontMatter.title}</title>
        <meta name="description" content={props.frontMatter.description} />
        <link rel="icon" href="/img/frame.png" />
      </Head>
      <main>
        <AppLayout>
          <article className="section">
            <Link href="/posts" className="secondary hover:text-[var(--primary)]">
              ← Posts
            </Link>
            <div className="mt-6">
              <h1 style={{ fontSize: 20, lineHeight: "28px" }}>
                {props.frontMatter.title}
              </h1>
              <p className="secondary mt-1">
                {props.frontMatter.date} · {props.frontMatter.topic}
              </p>
            </div>
            {props.frontMatter.cover && (
              <img
                src={props.frontMatter.cover}
                alt=""
                className="my-6 w-full h-auto rounded"
              />
            )}
            <div
              className="markdown"
              dangerouslySetInnerHTML={{ __html: props.html }}
            />
          </article>
        </AppLayout>
      </main>
    </div>
  );
}
