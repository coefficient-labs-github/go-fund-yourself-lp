import Image from "next/image";

const NewestEpisodes = ({ episodes }) => {
  return (
    <section
      id="episodes"
      className="flex flex-col items-center justify-center py-10 lg:py-12"
    >
      <div className="flex justify-between w-full px-4 mb-4 max-w-7xl 2xl:max-w-7xl">
        <h3 className="text-xl font-extrabold md:text-3xl xl:text-4xl">
          Newest Episodes
        </h3>
        <div className="relative inline-block text-left">
          <button
            type="button"
            className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
          >
            Season 1
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="overflow-x-scroll max-w-[calc(100vw_-_2rem)] scrollbar">
        <div className="grid grid-flow-col pb-0 gap-x-4 snap-x">
          {/* <div className="w-64 overflow-hidden" /> */}
          {episodes.map((episode, index) => (
            <div
              key={index}
              className="overflow-hidden bg-white rounded-lg shadow-lg w-72"
            >
              <div className="relative">
                <div className="aspect-video">
                  <Image
                    src={episode.image || "/imgs/episode-coming-soon.png"}
                    alt={episode.title}
                    className="object-cover"
                    fill
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                  <button className="text-4xl text-white">
                    <i className="fas fa-play-circle"></i>
                  </button>
                </div>
              </div>
              <div className="p-6">
                <p
                  className={`text-sm ${
                    episode.link ? "text-red-600" : "text-gray-500"
                  }`}
                >
                  {episode.date}
                </p>
                <h3 className="mt-2 font-bold md:text-lg">{episode.title}</h3>
                <p className="mt-3 text-gray-500">{episode.description}</p>
                <div className="mt-6">
                  {episode.link ? (
                    <a href={episode.link}>
                      <button className="px-4 py-2 text-white bg-[#FF3352] rounded-full">
                        Preview
                      </button>
                    </a>
                  ) : (
                    <button className="px-4 py-2 text-gray-500 bg-gray-200 rounded-full">
                      Coming Soon
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewestEpisodes;
