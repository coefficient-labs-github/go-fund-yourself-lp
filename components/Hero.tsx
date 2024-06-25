import Image from "next/image";

const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Episodes",
    link: "/episodes",
  },
  {
    name: "Companies",
    link: "/companies",
  },
  {
    name: "Meet the Judges",
    link: "/judges",
  },
  {
    name: "Reviews",
    link: "/reviews",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

const HeroSection = () => {
  return (
    <section className="relative text-white">
      <Image
        src="/imgs/hero-bg.svg"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        objectPosition="bottom"
        className="absolute w-full pb-64 h-1/2 -z-10"
      />
      <div className="flex flex-col items-center px-4 py-12 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
        <nav className="flex justify-between max-w-5xl gap-4 mb-4">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="text-sm font-semibold tracking-wide uppercase hover:underline"
            >
              {item.name}
            </a>
          ))}
        </nav>
        <Image
          src="/imgs/logo.svg"
          alt="Go Fund Yourself Logo"
          width={370}
          height={370}
          className="mb-4"
        />
        <p className="max-w-4xl mx-auto mb-4 text-lg">
          Join the ultimate interactive show where entertainment meets
          opportunity. Engage with top CEOs, discover innovative startups, and
          invest in real-time—all from the comfort of your home.
        </p>
        <div className="flex justify-center mb-4 space-x-4">
          <button className="px-4 py-2 font-bold text-pink-500 bg-white rounded-full">
            Watch Live Now
          </button>
          <button className="px-4 py-2 font-bold border border-white rounded-full">
            Explore Companies
          </button>
        </div>
        <video
          src="https://client-lp-assets.s3.amazonaws.com/2305_Verb_Go+Fund+Yourself+Promo_24-05-17_v03_DB_v1+(1).mp4"
          className="z-20 w-full max-w-6xl bg-white cursor-pointer rounded-3xl"
          poster="/imgs/hero-poster.png"
          preload="none"
          controls
          onClick={(e) => (e.target as HTMLVideoElement).play()}
        />
      </div>
    </section>
  );
};

export default HeroSection;
