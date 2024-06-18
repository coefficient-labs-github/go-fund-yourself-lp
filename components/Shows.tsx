import React from "react";
import { Show } from "../pages/index";

const Shows = ({ shows }: { shows: Show[] }) => (
  <section
    className="flex flex-col items-center justify-center mt-0 mb-8 md:my-16"
    id="events"
  >
    <div className="relative flex items-center justify-center w-full pt-20 pb-12">
      <div
        className="absolute top-0 w-full h-[calc(100%_+_4rem)] bg-bottom bg-no-repeat bg-cover -z-10 "
        // style={{ backgroundImage: "url('/imgs/hidden-gems.png')" }}
      />
      <div className="w-full px-4 max-w-7xl">
        <div>
          <h2 className="mb-2 text-2xl md:text-4xl b-2 heading">
            Up Coming Livestreams & Events
          </h2>
          <span className="text-lg md:text-xl">
            Dive into our live shows for viral TikTok finds and undiscovered
            gems soon to be your favorites.
          </span>
        </div>
      </div>
    </div>
    <div className="mb-4 overflow-x-scroll max-w-[calc(100vw_-_2rem)] scrollbar pb-4">
      <div className="grid grid-flow-col gap-x-4 gap-y-4 snap-x">
        {shows.map((show, idx) => (
          <a href={show.link} key={`${show.name}-${show.link}`}>
            <div className="aspect-[5/8] relative z-0 w-60 lg:w-72 2xl:w-80 group snap-start hover:opacity-80">
              <img
                src={show.image}
                className="absolute top-0 left-0 object-cover w-full h-full"
              />
              <div
                className="absolute top-0 left-0 z-20 w-full h-full"
                style={{
                  background:
                    "linear-gradient(0deg, rgb(0, 0, 0) 0%, rgba(0,0,0,0) 50%)",
                }}
              />
              <div className="absolute bottom-0 left-0 z-30 w-full p-4 text-white">
                <span className="block mb-2 text-xl tracking-tighter-heading font-heading">
                  {show.name}
                </span>
                <div className="flex justify-between">
                  <span className="block text-lg">{show.releaseddate}</span>
                  <span className="block text-lg">{show.duration}</span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Shows;
