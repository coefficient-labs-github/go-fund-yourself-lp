import { GetStaticProps } from "next";
import dynamic from "next/dynamic";
import Script from "next/script";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import CollectionGrid from "../components/CollectionGrid";
import CollectionRow from "../components/CollectionRow";
import CustomHead from "../components/CustomHead";
import FeaturedBrand from "../components/FeaturedBrand";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import LogoRow from "../components/LogoRow";
import MarketGirl from "../components/MarketGirl";
import Nav from "../components/Nav";
import Shows from "../components/Shows";
import { fetchSpreadsheetData } from "./api/sheets";

export interface Product {
  name: string;
  image: string;
  price: string;
  link: string;
  collection: string;
}

export interface Show {
  name: string;
  releaseddate: string;
  duration: string;
  image: string;
  link: string;
}

export interface Brand {
  name: string;
  image: string;
  link: string;
  description: string;
}

export interface HeroType {
  headline: string;
  subheadline: string;
  color: string;
  lightordark: string;
  image: string;
  cta: string;
  link: string;
  eyebrow: string;
}

export interface LogoType {
  logo: string;
}

interface Props {
  products?: Product[];
  shows?: Show[];
  featuredBrands?: Brand[];
  heroes?: HeroType[];
  logos?: LogoType[];
}

export const getStaticProps: GetStaticProps = async () => {
  const sheetId = "1gVk681cZ7Klt70CrGmf0c4TYNGZfc3_BVD9saA7BpLA";
  const ranges = [
    "ProductList!A:E",
    "Shows!A:E",
    "FeaturedBrands!A:D",
    "Heroes!A:H",
    "LogosList!A:A",
  ];
  try {
    const rangeData = await fetchSpreadsheetData(sheetId, ranges);
    const getMatchingKeys = (key: string) =>
      Object.keys(rangeData).find((item) => item.startsWith(key));
    const productKey = getMatchingKeys("ProductList");
    const showsKey = getMatchingKeys("Shows");
    const featuredBrandsKey = getMatchingKeys("FeaturedBrands");
    const logosKey = getMatchingKeys("LogosList");
    const heroesKey = getMatchingKeys("Heroes");
    if (
      !productKey ||
      !showsKey ||
      !featuredBrandsKey ||
      !heroesKey ||
      !logosKey
    ) {
      throw new Error("Expected range keys not found in the data");
    }
    const products = rangeData[productKey];
    const shows = rangeData[showsKey];
    const featuredBrands = rangeData[featuredBrandsKey];
    const heroes = rangeData[heroesKey];
    const logos = rangeData[logosKey];
    return {
      props: { products, shows, featuredBrands, heroes, logos },
      revalidate: 3600, // Revalidate after 1 hour (3600 seconds)
    };
  } catch (error) {
    return { props: { error: "Failed to fetch data" } };
  }
};

const TikTokEmbed = dynamic(() => import("../components/TikTokEmbed"), {
  ssr: false,
});

const IndexPage = ({
  products,
  shows,
  featuredBrands,
  heroes,
  logos,
}: Props) => {
  const discountListProducts = products?.filter(
    (p) => p.collection === "discount-list"
  );
  const trendingListProducts = products?.filter(
    (p) => p.collection === "trending"
  );

  return (
    <div>
      <CustomHead />
      <Script
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','GTM-M2TF5L6');`,
        }}
      />
      <Banner />
      <Nav />
      <Hero heroes={heroes} />
      {logos && <LogoRow logos={logos} />}
      <TikTokEmbed />
      {trendingListProducts && (
        <CollectionGrid products={trendingListProducts.slice(0, 12)} />
      )}
      {featuredBrands && featuredBrands[0] && (
        <FeaturedBrand brand={featuredBrands[0]} direction="left" />
      )}
      {discountListProducts && discountListProducts.length > 0 && (
        <CollectionRow products={discountListProducts.slice(0, 12)} />
      )}
      {shows && <Shows shows={shows} />}
      <Categories />
      {/* {featuredBrands && featuredBrands[1] && (
        <FeaturedBrand brand={featuredBrands[1]} direction="right" />
      )} */}
      <MarketGirl />
      <Footer />
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M2TF5L6"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }}
      />
    </div>
  );
};

export default IndexPage;
