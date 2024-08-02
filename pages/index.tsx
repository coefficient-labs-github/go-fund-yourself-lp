import { GetStaticProps } from "next";
import dynamic from "next/dynamic";
import Script from "next/script";
import ApplySection from "../components/Apply";
import Banner from "../components/Banner";
import CustomHead from "../components/CustomHead";
import FeaturedCompanies from "../components/FeaturedCompanies";
import FeaturedIn from "../components/FeaturedIn";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import MeetTheJudges from "../components/MeetTheJudges";
import NewestEpisodes from "../components/NewestEpisodes";
import Testimonials from "../components/Testimonials";
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
      {/* <Script
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','GTM-M2TF5L6');`,
        }}
      /> */}
      <Banner />
      <Hero />
      {/* <div className="pb-12 text-3xl text-center">Show Coming Soon!</div> */}
      <FeaturedIn />
      <HowItWorks />
      <MeetTheJudges />
      <NewestEpisodes />
      <FeaturedCompanies />
      <Testimonials />
      <ApplySection />
      <Footer />
      {/* <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M2TF5L6"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }}
      /> */}
    </div>
  );
};

const TempIndex = () => <div />;

// export default IndexPage;
export default TempIndex;
