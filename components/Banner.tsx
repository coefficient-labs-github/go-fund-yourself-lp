import React from "react";
import LeadForm from "./LeadForm";

const Banner = () => (
  <LeadForm
    trigger={
      <section
        id="CTA_BANNER"
        role="banner"
        className="flex items-center justify-center py-2 text-white transition-all cursor-pointer bg-typeBlack hover:opacity-90"
      >
        <div className="w-full px-4 m-auto text-base text-center uppercase max-w-7xl">
          <span className="avoidwrap">Are you a Brand or Influencer?</span>{" "}
          <span className="underline avoidwrap">click here</span>{" "}
          <span className="avoidwrap">to work with us!</span>
        </div>
      </section>
    }
  />
);

export default Banner;
