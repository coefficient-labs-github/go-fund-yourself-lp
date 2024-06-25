import Image from "next/image";

const testimonials = [
  {
    name: "David M.",
    title: "Financial Advisor",
    quote:
      "This show truly democratizes investing. It’s not just for the wealthy anymore. The ability to join in real-time and ask questions makes me feel like I’m right there with the CEOs.",
    imageSrc: "https://i.pravatar.cc/300?img=16",
    rating: 5,
  },
  {
    name: "Alisha Gibson",
    title: "Tech Enthusiast",
    quote:
      "I never thought I’d get the chance to invest in promising startups from the comfort of my home. It’s incredibly exciting to be part of these entrepreneurs’ journeys!",
    imageSrc: "https://i.pravatar.cc/300?img=2",
    rating: 5,
  },
  {
    name: "Michael B.",
    title: "Entrepreneur",
    quote:
      "The mix of entertainment and real investment opportunities makes it thrilling to see new companies pitch their ideas and to be able to support them.",
    imageSrc: "https://i.pravatar.cc/300?img=13",
    rating: 5,
  },
  {
    name: "Alisha Gibson",
    title: "Aspiring Investor",
    quote:
      "The honest feedback from the CEOs are what set this show apart. I’ve learned so much about investing and have even made a few successful investments myself!",
    imageSrc: "https://i.pravatar.cc/300?img=4",
    rating: 5,
  },
  {
    name: "Emily R.",
    title: "Small Business Owner",
    quote:
      "Being able to purchase directly during the show is a game-changer. It’s engaging and a lot of fun. This is a must-watch for anyone interested in the business world.",
    imageSrc: "https://i.pravatar.cc/300?img=5",
    rating: 5,
  },
  {
    name: "John Doe",
    title: "Investment Analyst",
    quote:
      "This platform has completely changed the way I invest. The live pitches and interactive Q&A sessions provide valuable insights and opportunities.",
    imageSrc: "https://i.pravatar.cc/300?img=12",
    rating: 5,
  },
  {
    name: "Jane Smith",
    title: "Startup Founder",
    quote:
      "I've discovered some amazing startups through this show. It's a great way to support innovative ideas and be part of their growth.",
    imageSrc: "https://i.pravatar.cc/300?img=7",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    title: "Aspiring Entrepreneur",
    quote:
      "Watching this show has inspired me to pursue my own business ideas. It's motivating to see the passion and dedication of the founders.",
    imageSrc: "https://i.pravatar.cc/300?img=8",
    rating: 5,
  },
  {
    name: "Mark Thompson",
    title: "Angel Investor",
    quote:
      "I've been investing for years, but this show brings a new level of excitement. It's like being in the front row of the startup world.",
    imageSrc: "https://i.pravatar.cc/300?img=9",
    rating: 5,
  },
  {
    name: "Emily Wilson",
    title: "Finance Professional",
    quote:
      "As someone working in finance, I appreciate the educational aspect of this show. It's a great way to stay updated on industry trends.",
    imageSrc: "https://i.pravatar.cc/300?img=10",
    rating: 5,
  },
  {
    name: "Alex Rodriguez",
    title: "Tech Investor",
    quote:
      "I've made some incredible investments through this platform. The opportunities presented here are truly game-changing.",
    imageSrc: "https://i.pravatar.cc/300?img=11",
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
        {[0, 1].map((val) => (
          <div
            key={val}
            className={`flex gap-8 mt-10 ${
              val % 2 !== 0 ? "translate-x-[-300px]" : ""
            }`}
          >
            {testimonials
              .filter((_, i) => i % 2 === val)
              .map((testimonial, index) => (
                <div
                  key={index}
                  className="grid w-full gap-6 max-w-3xl grid-cols-[auto_1fr] p-6 bg-white rounded-lg shadow-lg shrink-0"
                >
                  <Image
                    src={testimonial.imageSrc}
                    alt={testimonial.name}
                    width={236}
                    height={236}
                    className="rounded-lg object-cover aspect-[200_/_236]"
                  />
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1">
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
                    <p className="mt-4 text-lg text-gray-500 not-balanced">
                      “{testimonial.quote}”
                    </p>
                    <h3 className="mt-4 text-2xl font-bold text-gray-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-base text-gray-500">
                      {testimonial.title}
                    </p>
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
