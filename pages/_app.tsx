import type { AppProps } from "next/app";
// import { Lexend_Exa, Roboto } from "next/font/google";
import "../globals.css";

// const lexendExa = Lexend_Exa({
//   subsets: ["latin"],
//   weight: "700",
// });

// const roboto = Roboto({
//   subsets: ["latin"],
//   weight: ["100", "300", "400"],
// });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
