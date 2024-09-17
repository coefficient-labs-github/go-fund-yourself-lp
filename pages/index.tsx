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
import MeetTheTitans from "../components/MeetTheTitans";
import NewestEpisodes from "../components/NewestEpisodes";
import Testimonials from "../components/Testimonials";
import { fetchSpreadsheetData } from "./api/sheets";

export interface Episode {
  date: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface Company {
  logo: string;
  name: string;
  description: string;
  episodeLink: string;
  investLink: string;
}

export interface Testimonial {
  picture: string;
  quote: string;
  title: string;
  name: string;
}

interface Props {
  episodes?: Episode[];
  companies?: Company[];
  testimonials?: Testimonial[];
  error?: Error;
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
    return { props: { error } };
  }
};

const IndexPage = ({ episodes, companies, testimonials, error }: Props) => {
  if (error) {
    console.log("Error::", error);
    return <div>500 Server Error</div>;
  }
  const now = new Date();
  const launchDate = new Date("2024-09-16T19:30:00-07:00");
  if (now < launchDate) {
    const timeLeft = launchDate.getTime() - now.getTime();
    const hoursLeft = Math.floor(timeLeft / 1000 / 60 / 60);
    const minutesLeft = Math.floor(timeLeft / 1000 / 60) - hoursLeft * 60;
    return (
      <div>
        {console.log(`
          The site is not live yet.
          Launch Date: ${launchDate}
          This will be live in ${hoursLeft} hours and ${minutesLeft} minutes.
        `)}
      </div>
    );
  }
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
      <FeaturedIn />
      <HowItWorks />
      <MeetTheTitans />
      {episodes && episodes.length > 0 ? (
        <NewestEpisodes episodes={episodes} />
      ) : null}
      {companies && companies.length > 0 ? (
        <FeaturedCompanies companies={companies} />
      ) : null}
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
