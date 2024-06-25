import Image from "next/image";

const testimonials = [
  {
    name: "David M.",
    title: "Financial Advisor",
    quote:
      "This show truly democratizes investing. It’s not just for the wealthy anymore. The ability to join in real-time and ask questions makes me feel like I’m right there with the CEOs.",
    imageSrc: "https://picsum.photos/200/300",
    rating: 5,
  },
  {
    name: "Alisha Gibson",
    title: "Tech Enthusiast",
    quote:
      "I never thought I’d get the chance to invest in promising startups from the comfort of my home. It’s incredibly exciting to be part of these entrepreneurs’ journeys!",
    imageSrc: "https://picsum.photos/200/300",
    rating: 5,
  },
  {
    name: "Michael B.",
    title: "Entrepreneur",
    quote:
      "The mix of entertainment and real investment opportunities makes it thrilling to see new companies pitch their ideas and to be able to support them.",
    imageSrc: "https://picsum.photos/200/300",
    rating: 5,
  },
  {
    name: "Alisha Gibson",
    title: "Aspiring Investor",
    quote:
      "The honest feedback from the CEOs are what set this show apart. I’ve learned so much about investing and have even made a few successful investments myself!",
    imageSrc: "https://picsum.photos/200/300",
    rating: 5,
  },
  {
    name: "Emily R.",
    title: "Small Business Owner",
    quote:
      "Being able to purchase directly during the show is a game-changer. It’s engaging and a lot of fun. This is a must-watch for anyone interested in the business world.",
    imageSrc: "https://picsum.photos/200/300",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section
      id="reviews"
      className="flex flex-col items-center justify-center py-10 lg:py-12"
    >
      <div className="flex flex-col justify-between w-full max-w-6xl px-4 text-center 2xl:max-w-7xl">
        <p className="text-lg font-semibold tracking-widest text-gray-600 uppercase">
          What Our Viewers Are Saying
        </p>
        <h2 className="mt-6 text-6xl font-extrabold text-gray-900">
          What Companies <span className="text-violet-600">Are Saying</span>
        </h2>
        <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-500">
          Discover why “Go Fund Yourself!” is revolutionizing the investment
          world through the voices of our enthusiastic community.
        </p>
      </div>
      <div className="max-w-[100vw] overflow-x-hidden mt-6">
        {[1, 2].map((_, i) => (
          <div
            key={i}
            className={`flex gap-8 mt-10 ${
              i % 2 !== 0 ? "translate-x-[-300px]" : ""
            }`}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="grid w-full gap-6 max-w-3xl grid-cols-[auto_1fr] p-6 bg-white rounded-lg shadow-lg shrink-0"
              >
                <Image
                  src={testimonial.imageSrc}
                  alt={testimonial.name}
                  width={200}
                  height={236}
                  className="rounded-lg"
                />
                <div className="items-center">
                  <div className="flex items-center mt-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-red-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M10 15l-5.878 3.09 1.122-6.545L0 6.545l6.561-.955L10 0l3.439 5.59L20 6.545l-5.244 4.999 1.122 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-lg text-gray-500">“{testimonial.quote}”</p>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-base text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
