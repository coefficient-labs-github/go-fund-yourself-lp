import Image from "next/image";

const HowItWorks = () => {
  return (
    <section className="py-16 bg-white">
      <div className="px-6 mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase md:text-base lg:text-lg">
            Real-Time Interactive Investing
          </p>
          <h2 className="mt-4 text-2xl font-extrabold md:text-4xl md:mt-6 lg:text-5xl xl:text-6xl">
            How Does It Work?
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-gray-500 md:mt-6 md:text-lg">
            A Simple, Engaging, and Interactive Investment Experience
          </p>
        </div>
        <div className="grid grid-cols-1 mt-6 justify-items-center gap-y-10 lg:grid-cols-3 gap-x-6">
          <div className="flex flex-col items-center max-w-xl p-6 overflow-hidden text-center rounded-lg shadow-lg md:p-8">
            <Image
              src="/imgs/step-1.png"
              alt="Watch the 5-Minute Pitches"
              width={400}
              height={200}
              className="object-cover"
            />
            <h3 className="mt-4 text-2xl font-medium">
              Watch the 5-Minute Pitches
            </h3>
            <p className="mt-2 text-base text-gray-500">
              Business owners present their innovative ideas in a concise,
              5-minute pitch, showcasing their products and potential.
            </p>
          </div>
          <div className="flex flex-col items-center max-w-xl p-6 overflow-hidden text-center rounded-lg shadow-lg md:p-8">
            <Image
              src="/imgs/step-2.png"
              alt="CEOs Ask the Tough Questions"
              width={400}
              height={200}
              className="object-cover"
            />
            <h3 className="mt-4 text-2xl font-medium">
              CEOs Ask the Tough Questions
            </h3>
            <p className="mt-2 text-base text-gray-500">
              Our seasoned CEOs dive deep, asking the hard-hitting questions
              that matter most to investors, ensuring transparency and clarity.
            </p>
          </div>
          <div className="flex flex-col items-center max-w-xl p-6 overflow-hidden text-center rounded-lg shadow-lg md:p-8">
            <Image
              src="/imgs/step-3.png"
              alt="You Make the Investment Choice"
              width={400}
              height={200}
              className="object-cover"
            />
            <h3 className="mt-4 text-2xl font-medium">
              You Make the Investment Choice
            </h3>
            <p className="mt-2 text-base text-gray-500">
              Engage in real-time, vote for your favorites, and decide where to
              invest. Your participation can help shape the future of these
              businesses.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-10 gap-y-2 gap-x-4 md:flex-row">
          <a href="#episodes">
            <button className="px-5 py-3 text-white bg-red-500 rounded-full md:px-6 md:py-4">
              Watch Show
            </button>
          </a>
          <a href="#companies">
            <button className="px-5 py-3 text-red-500 bg-white border border-red-500 rounded-full md:px-6 md:py-4">
              Explore Companies
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
