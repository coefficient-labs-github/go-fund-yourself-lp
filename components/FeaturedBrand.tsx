import React from "react";
import { Brand } from "../pages";

type FeaturedBrandProps = {
  direction: "left" | "right";
  brand: Brand;
};

const FeaturedBrand = ({ direction, brand }: FeaturedBrandProps) => (
  <section
    className="relative flex items-center justify-center px-4 mt-16 mb-0 md:my-20"
    id="brand"
  >
    <div className="absolute w-full h-full md:h-[calc(100%_-_60px)] bg-secondary -z-10" />
    <div className="grid w-full max-w-6xl gap-4 md:grid-cols-2">
      <div className="relative">
        <img
          src={brand.image}
          className="absolute hidden object-cover w-full h-full border-2 md:block border-secondary"
        />
      </div>
      <div
        className={`flex flex-col justify-center py-16 md:py-32 row-start-1 md:items-start items-center ${
          direction === "right"
            ? "md:col-start-2 md:ml-4 lg:ml-16"
            : "col-start-1"
        }`}
      >
        <span className="block mb-2 text-lg text-center uppercase md:text-xl md:text-left">
          Featured Brand
        </span>
        <h1 className="z-10 mb-2 text-3xl text-center uppercase md:text-4xl heading md:text-left">
          {brand.name}
        </h1>
        <p className="w-full mb-4 text-xl text-center md:w-96 md:text-left">
          {brand.description}
        </p>
        <img
          className="object-cover w-full mb-4 md:hidden md:aspect-auto aspect-square rounded-2xl"
          src={brand.image}
        />
        <a href={brand.link} target="_blank" rel="noreferrer">
          <span className="text-center cta-btn">SHOP NOW</span>
        </a>
      </div>
    </div>
  </section>
);

export default FeaturedBrand;
