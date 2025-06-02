import Image from "next/image";

const HowItWorks = () => {
  return (
    <section className="py-16 bg-white">
      <div className="px-6 mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase md:text-base lg:text-lg">
            Real-Time Interactive Investing
          </p>
          <h2 className="mt-4 text-4xl md:mt-6 lg:text-5xl xl:text-6xl">
            How Does It <span className="text-[#ff3352]"> Work</span>?
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-gray-500 md:mt-6 md:text-lg">
            A Simple, Engaging, and Interactive Investment Experience
          </p>
        </div>
        <div className="grid grid-cols-1 mt-6 justify-items-center gap-y-10 lg:grid-cols-3 gap-x-6">
          {[
            {
              headline: "Stream the Episode",
              description:
                "Entrepreneurs present their companies to our CEO Titans and to the world!",
              imgSrc: "/img/step-1.webp",
            },
            {
              headline: "Titans ask the tough Questions",
              description:
                "Our seasoned CEO Titans dive deep, asking the hard-hitting questions that matter most to investors, ensuring transparency and clarity.",
              imgSrc: "/img/step-2.webp",
            },
            {
              headline: "Ready to Invest?",
              description:
                "Click the Invest Now button on screen or in the description to decide for yourself what companies you want to bet on!",
              imgSrc: "/img/step-3.webp",
            },
          ].map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center max-w-xl p-4 overflow-hidden text-center rounded-lg shadow-lg md:p-8"
            >
              <Image
                src={step.imgSrc}
                alt={step.headline}
                width={400}
                height={200}
                className="object-cover rounded-xl aspect-square"
              />
              <h3 className="mt-4 text-2xl font-medium">{step.headline}</h3>
              <p className="mt-2 text-base text-gray-500">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center mt-10 gap-y-2 gap-x-4 md:flex-row">
          <a href="#episodes">
            <button className="px-5 py-3 text-white bg-[#FF3352] rounded-full md:px-6 md:py-4">
              Watch Show
            </button>
          </a>
          <a href="#companies">
            <button className="px-5 py-3 text-[#FF3352] bg-white border border-[#FF3352] rounded-full md:px-6 md:py-4">
              Explore Companies
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
