import Head from "next/head";
import React from "react";
import { Header } from "../components";

interface AppLayoutProps {
  children: any;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Arun Govil" />
        <meta property="og:image" content="https://arungovil.me/img/og.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <a href="#main" className="sr-only-link">
        Skip to content
      </a>
      <div id="main" className="page-column">
        {children}
      </div>
      <Header />
    </>
  );
}
