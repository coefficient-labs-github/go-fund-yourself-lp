import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";
import "../globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400"],
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component className={roboto.className} {...pageProps} />
    </>
  );
}
