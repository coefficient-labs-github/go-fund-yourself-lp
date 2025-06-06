import Image from "next/image";
import { useEffect } from "react";

const Testimonials = ({ testimonials }) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const rows = document.querySelectorAll(".testimonial-row");
      rows.forEach((row, index) => {
        const direction = index % 2 === 0 ? 1 : -1;
        const transformValue = `translateX(calc(${
          scrollPosition * 0.1 * direction * 0.5
        }px))`;
        (row as HTMLElement).style.transform = transformValue;
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="reviews"
      className="flex flex-col items-center justify-center py-10 lg:py-12"
    >
      <div className="flex flex-col justify-between w-full px-6 text-center max-w-7xl 2xl:max-w-7xl">
        <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase md:text-base lg:text-lg">
          What Our Viewers Are Saying
        </p>
        <h2 className="mt-4 text-4xl md:mt-6 lg:text-5xl xl:text-6xl">
          What Companies <span className="text-[#0125BD]">Are Saying</span>
        </h2>
        <p className="max-w-2xl mx-auto mt-4 text-gray-500 md:mt-6 md:text-lg">
          Discover why “Go Fund Yourself!” is revolutionizing the investment
          world through the voices of our enthusiastic community.
        </p>
      </div>
      <div className="max-w-[100vw] overflow-x-hidden mt-6 flex-col flex gap-y-4">
        {[0, 1].map((_, idx) => {
          return (
            <div
              key={idx}
              data-index={idx}
              className="flex justify-center gap-x-4 testimonial-row"
            >
              {testimonials
                .filter((_, i) => i % 2 === idx)
                .map((testimonial, index) => (
                  <div
                    key={index}
                    className="grid border w-full gap-4 max-w-sm lg:max-w-xl xl:max-w-2xl grid-cols-1 lg:grid-cols-[auto_1fr] p-6 bg-white rounded-lg shadow-lg shrink-0"
                  >
                    <div className="lg:block hidden relative w-32 lg:w-48 aspect-[200_/_236]">
                      <Image
                        src={
                          testimonial.picture
                            ? `/${testimonial.picture}`
                            : "/img/placeholder.png"
                        }
                        alt={testimonial.name}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5 text-[#FF3352]"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M10 15l-5.878 3.09 1.122-6.545L0 6.545l6.561-.955L10 0l3.439 5.59L20 6.545l-5.244 4.999 1.122 6.545z" />
                          </svg>
                        ))}
                      </div>
                      <p className="mt-4 text-gray-500 md:text-lg not-balanced">
                        “{testimonial.quote}”
                      </p>
                      <div className="flex gap-4 mt-4">
                        <div className="relative w-16 lg:hidden aspect-square">
                          <Image
                            src={
                              testimonial.picture
                                ? `/${testimonial.picture}`
                                : "/img/placeholder.png"
                            }
                            alt={testimonial.name}
                            fill
                            className="object-cover rounded-lg"
                          />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold xl:text-2xl">
                            {testimonial.name}
                          </h3>
                          <p className="text-base text-gray-500">
                            {testimonial.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
