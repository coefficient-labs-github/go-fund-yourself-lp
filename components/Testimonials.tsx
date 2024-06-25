import Image from "next/image";

const testimonials = [
  {
    name: "David M.",
    title: "Financial Advisor",
    quote:
      "This show truly democratizes investing. It’s not just for the wealthy anymore. The ability to join in real-time and ask questions makes me feel like I’m right there with the CEOs.",
    imageSrc: "/path/to/david.png",
    rating: 5,
  },
  {
    name: "Alisha Gibson",
    title: "Tech Enthusiast",
    quote:
      "I never thought I’d get the chance to invest in promising startups from the comfort of my home. It’s incredibly exciting to be part of these entrepreneurs’ journeys!",
    imageSrc: "/path/to/alisha.png",
    rating: 5,
  },
  {
    name: "Michael B.",
    title: "Entrepreneur",
    quote:
      "The mix of entertainment and real investment opportunities makes it thrilling to see new companies pitch their ideas and to be able to support them.",
    imageSrc: "/path/to/michael.png",
    rating: 5,
  },
  {
    name: "Alisha Gibson",
    title: "Aspiring Investor",
    quote:
      "The honest feedback from the CEOs are what set this show apart. I’ve learned so much about investing and have even made a few successful investments myself!",
    imageSrc: "/path/to/alisha2.png",
    rating: 5,
  },
  {
    name: "Emily R.",
    title: "Small Business Owner",
    quote:
      "Being able to purchase directly during the show is a game-changer. It’s engaging and a lot of fun. This is a must-watch for anyone interested in the business world.",
    imageSrc: "/path/to/emily.png",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <div className="py-16 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold tracking-wide text-gray-600 uppercase">
            What Our Viewers Are Saying
          </p>
          <h2 className="mt-2 text-6xl font-extrabold leading-8 tracking-tight text-gray-900">
            What Companies <span className="text-purple-600">Are Saying</span>
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-xl text-gray-500">
            Discover why “Go Fund Yourself!” is revolutionizing the investment
            world through the voices of our enthusiastic community.
          </p>
        </div>
        <div className="grid gap-8 mt-10 lg:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 overflow-hidden bg-white rounded-lg shadow-lg"
            >
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Image
                    src={testimonial.imageSrc}
                    alt={testimonial.name}
                    width={100}
                    height={100}
                    className="rounded-full"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-base text-gray-500">“{testimonial.quote}”</p>
              </div>
              <div className="flex items-center mt-6">
                {[...Array(testimonial.rating)].map((star, i) => (
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
