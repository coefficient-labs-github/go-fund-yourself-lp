import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const FeaturedCompanies = ({ companies }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [maxHeight, setMaxHeight] = useState("500px");
  const containerRef = useRef(null);

  useEffect(() => {
    if (isExpanded && containerRef.current) {
      const container = containerRef.current as HTMLElement; // Add type assertion
      setMaxHeight(`${container.scrollHeight}px`); // Fix the problem
    } else {
      setMaxHeight("500px");
    }
  }, [isExpanded]);

  return (
    <section
      id="companies"
      className="flex flex-col items-center justify-center py-10 lg:py-12"
    >
      <div className="flex flex-col justify-center w-full px-6 mb-4 max-w-7xl">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-extrabold md:text-3xl xl:text-4xl">
            Companies Featured This Season So Far
          </h3>
        </div>
        <div
          ref={containerRef}
          className={`grid gap-4 mt-6 lg:grid-cols-3 sm:grid-cols-2 overflow-hidden transition-max-height duration-500 ease-in-out xl:grid-cols-4`}
          style={{ maxHeight }}
        >
          {companies.map((company, index) => (
            <div
              key={index}
              className="overflow-hidden bg-white rounded-lg shadow-lg"
            >
              <div className="relative w-full aspect-video">
                <Image
                  src={
                    company.logo ? `/${company.logo}` : "/img/placeholder.png"
                  }
                  alt={company.name}
                  fill
                  className="object-contain"
                  onError={(e) => {
                    console.log("Error loading image", e);
                    e.currentTarget.src = "/img/placeholder.png";
                  }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold">{company.name}</h3>
                <p className="mt-2 text-base text-gray-500">
                  {company.description}
                </p>
                <div className="flex mt-6 space-x-4">
                  {company.episodeLink && (
                    <a href={company.episodeLink}>
                      <button className="px-4 py-2 text-sm text-[#FF3352] bg-white border border-[#FF3352] rounded-full whitespace-nowrap">
                        Watch Episode
                      </button>
                    </a>
                  )}
                  {company.investLink && (
                    <a href={company.investLink}>
                      <button className="px-4 py-2 text-sm text-white bg-[#FF3352] rounded-full whitespace-nowrap">
                        Learn More
                      </button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center px-5 py-3 m-auto mt-6 text-sm font-bold text-[#FF3352] bg-white rounded-full whitespace-nowrap w-min md:px-6 md:py-4"
        >
          {isExpanded ? "Show Less" : "Show More"}
          <svg
            className={`w-5 h-5 ml-2 -mr-1 transition-transform ${
              isExpanded ? "rotate-180" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default FeaturedCompanies;
