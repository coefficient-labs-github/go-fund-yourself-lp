import Head from "next/head";
import React, { ReactNode } from "react";

const SITE_NAME = "Go Fund Yourself";
const DEFAULT_TITLE =
  "Go Fund Yourself - Reality TV for Entrepreneurs & Investors";
const DEFAULT_DESCRIPTION =
  "Watch entrepreneurs pitch to titans, discover groundbreaking startups, and find investment opportunities on Go Fund Yourself, the reality TV show bridging innovation and investment.";
const BASE_URL = "https://www.gofundyourself.show";
const DEFAULT_OG_IMAGE_PATH = "/img/GoFundYourself-Thumbnail.webp";

type Props = {
  title?: string;
  description?: string;
  ogImage?: string;
  ogUrl?: string;
  children?: ReactNode;
};

const CustomHead = ({
  title,
  description,
  ogImage,
  ogUrl,
  children,
}: Props) => {
  const pageTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE;
  const pageDescription = description || DEFAULT_DESCRIPTION;

  // Construct full URLs for OG tags
  const effectiveOgUrl = `${BASE_URL}${ogUrl || ""}`;
  const effectiveOgImage = ogImage
    ? ogImage.startsWith("http")
      ? ogImage
      : `${BASE_URL}${ogImage}`
    : `${BASE_URL}${DEFAULT_OG_IMAGE_PATH}`;

  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend+Exa:wght@700&family=Roboto:wght@100;300;400&display=swap"
          rel="stylesheet"
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={effectiveOgImage} />
        <meta property="og:url" content={effectiveOgUrl} />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={effectiveOgImage} />
      </Head>
      {children}
    </div>
  );
};

export default CustomHead;
