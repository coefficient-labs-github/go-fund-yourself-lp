import Image from "next/image";

export const platforms = [
  {
    platform: "La Weekly",
    src: "/imgs/la-weekly.png",
    link: "https://www.laweekly.com/go-fund-yourself-where-hollywood-glitz-meets-entrepreneurial-grit/",
  },
  {
    platform: "Citybiz",
    src: "/imgs/citybiz.png",
    link: "https://www.citybiz.co/article/653759/natasha-graziano-interviews-rory-cutaia-founder-of-verb-technology-nasdaq-verb-and-creator-of-go-fund-yourself-show-on-cheddar-tv/",
  },
];

const FeaturedIn = () => {
  return (
    <div className="py-12 bg-white">
      <div className="px-6 mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase md:text-base lg:text-lg">
            Featured in
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 mt-2 gap-y-2 gap-x-8">
          {platforms.map((item) => (
            <div className="flex items-center">
              <a target="_blank" href={item.link}>
                <Image
                  src={item.src}
                  alt={item.platform}
                  width={125}
                  height={50}
                  className="object-contain"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedIn;
