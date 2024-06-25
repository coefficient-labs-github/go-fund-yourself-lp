import Image from "next/image";

const HowItWorks = () => {
  return (
    <section className="py-16 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-lg font-semibold tracking-widest text-gray-600 uppercase">
            Real-Time Interactive Investing
          </p>
          <h2 className="mt-6 text-6xl font-extrabold text-gray-900">
            How Does It Work?
          </h2>
          <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-500">
            A Simple, Engaging, and Interactive Investment Experience
          </p>
        </div>
        <div className="grid grid-cols-1 mt-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 gap-x-6">
          <div className="p-8 overflow-hidden text-center rounded-lg shadow-lg">
            <Image
              src="/imgs/step-1.png"
              alt="Watch the 5-Minute Pitches"
              width={400}
              height={200}
              className="object-cover mb-8"
            />
            <h3 className="mt-4 text-3xl font-medium text-gray-900">
              Watch the 5-Minute Pitches
            </h3>
            <p className="mt-2 text-base text-gray-500">
              Business owners present their innovative ideas in a concise,
              5-minute pitch, showcasing their products and potential.
            </p>
          </div>
          <div className="p-8 overflow-hidden text-center rounded-lg shadow-lg">
            <Image
              src="/imgs/step-2.png"
              alt="CEOs Ask the Tough Questions"
              width={400}
              height={200}
              className="object-cover mb-8"
            />
            <h3 className="mt-4 text-3xl font-medium text-gray-900">
              CEOs Ask the Tough Questions
            </h3>
            <p className="mt-2 text-base text-gray-500">
              Our seasoned CEOs dive deep, asking the hard-hitting questions
              that matter most to investors, ensuring transparency and clarity.
            </p>
          </div>
          <div className="p-8 overflow-hidden text-center rounded-lg shadow-lg">
            <Image
              src="/imgs/step-3.png"
              alt="You Make the Investment Choice"
              width={400}
              height={200}
              className="object-cover mb-8"
            />
            <h3 className="mt-4 text-3xl font-medium text-gray-900">
              You Make the Investment Choice
            </h3>
            <p className="mt-2 text-base text-gray-500">
              Engage in real-time, vote for your favorites, and decide where to
              invest. Your participation can help shape the future of these
              businesses.
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-10 space-x-4">
          <button className="px-4 py-2 font-bold text-white bg-red-500 rounded-full">
            Watch Show
          </button>
          <button className="px-4 py-2 font-bold text-red-500 bg-white border border-red-500 rounded-full">
            Explore Companies
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
