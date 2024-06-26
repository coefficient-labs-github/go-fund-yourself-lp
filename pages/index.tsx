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
  episodes?: Product[];
  companies?: Show[];
  testimonials?: Brand[];
  heroes?: HeroType[];
  logos?: LogoType[];
}

export const getStaticProps: GetStaticProps = async () => {
  const sheetId = "1a-6KjDAFb6IpHiCIAMz8NiFWaw2IqjSomuUcJn5TEBA";
  const ranges = ["Episodes!A:E", "Companies!A:E", "Testimonials!A:D"];
  try {
    const rangeData = await fetchSpreadsheetData(sheetId, ranges);
    const getMatchingKeys = (key: string) =>
      Object.keys(rangeData).find((item) => item.startsWith(key));
    const episodesKey = getMatchingKeys("Episodes");
    const companiesKey = getMatchingKeys("Companies");
    const testimonialsKey = getMatchingKeys("Testimonials");
    if (!episodesKey || !companiesKey || !testimonialsKey) {
      throw new Error("Expected range keys not found in the data");
    }
    const episodes = rangeData[episodesKey];
    const companies = rangeData[companiesKey];
    const testimonials = rangeData[testimonialsKey];
    return {
      props: { episodes, companies, testimonials },
      revalidate: 3600, // Revalidate after 1 hour (3600 seconds)
    };
  } catch (error) {
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", error);
    return { props: { error: "Failed to fetch data" } };
  }
};

const IndexPage = ({ episodes, companies, testimonials }: Props) => {
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
      <NewestEpisodes episodes={episodes} />
      <FeaturedCompanies companies={companies} />
      <Testimonials testimonials={testimonials} />
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

export default IndexPage;
