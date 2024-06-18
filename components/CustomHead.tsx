import Head from "next/head";
import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const CustomHead = ({ children }: Props) => (
  <div>
    <Head>
      <title>
        Market.live | Discover the products soon to be your favorites, from
        viral sensations to undiscovered gems.
      </title>
      <link
        href="https://fonts.googleapis.com/css2?family=Lexend+Exa:wght@700&family=Roboto:wght@100;300;400&display=swap"
        rel="stylesheet"
      />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content="Discover the products soon to be your favorites, from viral
        sensations to undiscovered gems."
      />
    </Head>
    {children}
  </div>
);

export default CustomHead;
