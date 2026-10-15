import "../styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        src="//gc.zgo.at/count.js"
        data-goatcounter="https://arungovil.goatcounter.com/count"
        strategy="afterInteractive"
      />
      <Component {...pageProps} />
    </>
  );
}
