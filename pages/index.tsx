import Head from "next/head";
import { About } from "../components";
import AppLayout from "../layouts";

export default function App() {
  return (
    <div>
      <Head>
        <title>Arun Govil</title>
        <meta name="description" content="Arun Govil — lead frontend engineer building web and mobile apps with React, React Native and Vue." />
        <link rel="icon" href="/img/frame.png" />
      </Head>
      <main>
        <AppLayout showSearch={false}>
          <About />
        </AppLayout>
      </main>
    </div>
  );
}
