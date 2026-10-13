import Head from "next/head";
import { About } from "../components";
import AppLayout from "../layouts";

export default function App() {
  return (
    <div>
      <Head>
        <title>Arun Govil</title>
        <meta name="description" content="Lead frontend engineer building web and mobile products with React, React Native and TypeScript." />
        <meta property="og:title" content="Arun Govil · Lead Frontend Engineer" />
        <meta property="og:description" content="Lead frontend engineer building web and mobile products with React, React Native and TypeScript." />
        <link rel="icon" href="/img/frame.png" />
      </Head>
      <main>
        <AppLayout>
          <About />
        </AppLayout>
      </main>
    </div>
  );
}
