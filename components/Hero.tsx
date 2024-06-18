import React, { useState } from "react";
import { HeroType } from "../pages";

const Hero = ({ heroes }: { heroes?: HeroType[] }) => {
  const [heroStep, setHeroStep] = useState(0);
  const hero = heroes?.[heroStep];

  if (heroes && heroes.length > 1) {
    setTimeout(() => {
      setHeroStep((heroStep + 1) % heroes.length);
    }, 12 * 1000);
  }

  return (
    <section
      className="relative flex items-center justify-center px-4 mt-8 transition-all xl:py-4"
      style={{
        background: hero?.color || "#fce8e8",
        color: hero?.lightordark === "dark" ? "#1a1a1a" : "#ffffff",
      }}
    >
      <div className="grid w-full max-w-4xl grid-cols-1 grid-rows-1 xl:grid-cols-2 xl:max-w-8xl min-h-[44rem] md:min-h-[30rem]">
        <img
          src={hero?.image || "/imgs/hero.jpg"}
          className="absolute xl:left-0 -top-12 object-cover h-80 w-5/6 max-w-xl xl:max-w-none object-center xl:w-1/2 xl:h-[calc(100%_+_64px)] xl:-top-8"
        />
        <div className="flex flex-col justify-center pb-8 pt-72 md:pt-80 xl:pt-0 xl:pb-0 xl:pl-24 md:text-left xl:col-start-2">
          <span className="block mb-2 text-xl uppercase md:text-xl">
            {hero?.eyebrow}
          </span>
          <h1 className="mb-2 text-5xl font-thin uppercase xl:mb-4 lg:text-7xl xl:text-8xl">
            {hero ? hero.headline : "NEW YEAR, NEW FITS"}
          </h1>
          <div className="mb-4 text-lg md:text-xl xl:mb-6">
            {hero ? hero.subheadline : "Shop the latest trends and essentials."}
          </div>
          <a href={hero?.link || "#"} target="_blank" rel="noreferrer">
            <span
              style={{ color: hero?.color || "#fce8e8" }}
              className="inline-block px-8 py-4 mb-6 text-lg underline uppercase transition-all transform bg-white rounded-lg lg:text-xl hover:scale-110 hover:opacity-90 w-fit"
            >
              {hero?.cta}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
