import { GoogleTagManager } from "@next/third-parties/google";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import "../globals.css";

const grobold = localFont({
  src: "../public/grobold.woff2",
  variable: "--font-grobold",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400"],
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${roboto.className} ${grobold.variable}`}>
      <Script
        src="//js.hsforms.net/forms/embed/v2.js"
        strategy="lazyOnload"
        onLoad={() => {
          console.log("HubSpot script loaded");
        }}
      />
      <Component {...pageProps} />
      <GoogleTagManager gtmId="GTM-W53BNTKL" />
    </div>
  );
}
