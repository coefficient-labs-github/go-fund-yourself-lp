import Image from "next/image";

const FeaturedCompanies = ({ companies }) => {
  return (
    <section
      id="companies"
      className="flex flex-col items-center justify-center py-10 lg:py-12"
    >
      <div className="flex flex-col justify-between w-full px-6 mb-4 max-w-7xl">
        <div className="flex items-center justify-between">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Companies Featured This Season So Far
          </h2>
          <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50">
            Show Less
            <svg
              className="w-5 h-5 ml-2 -mr-1"
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
        <div className="grid gap-8 mt-6 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4">
          {companies.map((company, index) => (
            <div
              key={index}
              className="overflow-hidden bg-white rounded-lg shadow-lg"
            >
              <div className="relative w-full aspect-video">
                <Image
                  src={company.logo}
                  alt={company.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900">
                  {company.name}
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  {company.description}
                </p>
                <div className="flex mt-6 space-x-4">
                  <a href={company.episodeLink}>
                    <button className="px-4 py-3 text-sm text-red-500 bg-white border border-red-500 rounded-full whitespace-nowrap">
                      Watch Episode
                    </button>
                  </a>
                  <a href={company.investLink}>
                    <button className="px-4 py-3 text-sm text-white bg-red-500 rounded-full whitespace-nowrap">
                      Learn More
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCompanies;
