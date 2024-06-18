import React from "react";
import MarketGirlForm from "./MarketGirlForm";

const MarketGirl = () => (
  <section className="relative flex items-center justify-center px-4 py-12 bg-[#1a1a1a]">
    <div className="flex flex-col items-center w-full text-center text-white max-w-8xl">
      <h3 className="z-10 mb-4 text-2xl uppercase md:text-4xl heading">
        Become a <span className="avoidwrap">Market Girl</span> & Subscribe
      </h3>
      <p className="mb-6 text-xl avoidwrap">
        <span className="avoidwrap">Special Discounts on Featured Stores</span>{" "}
        • <span className="avoidwrap">Free Shipping on All Purchases</span> •{" "}
        <span className="avoidwrap">Updates on Deals and Trendy Products</span>
      </p>
      <MarketGirlForm
        trigger={<span className="block uppercase cta-btn">Join Today</span>}
      />
    </div>
  </section>
);

export default MarketGirl;
